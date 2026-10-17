import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export interface ProcessedImageResult {
  success: boolean;
  filePath?: string;
  fileName?: string;
  width?: number;
  height?: number;
  error?: string;
}

/**
 * Converts any incoming image buffer (PNG, JPG, HEIC, HEIF, TIFF, WEBP)
 * into an optimized, high-fidelity WebP asset saved into public/images/editorial/.
 */
export async function processAndSaveEditorialImage(
  inputBuffer: Buffer,
  originalFilename: string,
  targetSlug?: string
): Promise<ProcessedImageResult> {
  try {
    const outputDir = path.join(process.cwd(), "public/images/editorial");
    await fs.mkdir(outputDir, { recursive: true });

    // Determine target clean filename
    const ext = path.extname(originalFilename).toLowerCase();
    const baseName = targetSlug
      ? targetSlug.toLowerCase().replace(/[^a-z0-9_-]/g, "-")
      : path.basename(originalFilename, ext).toLowerCase().replace(/[^a-z0-9_-]/g, "-");

    const finalFileName = `${baseName}.webp`;
    const finalFilePath = path.join(outputDir, finalFileName);
    const publicUrl = `/images/editorial/${finalFileName}`;

    let bufferToProcess = inputBuffer;

    // If macOS HEIC/HEIF format: check if sharp can process directly, or bridge via macOS sips
    const isHeic = ext === ".heic" || ext === ".heif";

    if (isHeic) {
      try {
        // Test sharp conversion first
        const testWebp = await sharp(inputBuffer)
          .webp({ quality: 92, effort: 4 })
          .toBuffer();
        bufferToProcess = testWebp;
        await fs.writeFile(finalFilePath, bufferToProcess);
        const metadata = await sharp(finalFilePath).metadata();
        return {
          success: true,
          filePath: publicUrl,
          fileName: finalFileName,
          width: metadata.width,
          height: metadata.height,
        };
      } catch {
        // Fallback for HEIC on macOS: write temporary file and run native sips to png, then sharp to webp
        const tempInput = path.join("/tmp", `upload-${Date.now()}${ext}`);
        const tempPng = path.join("/tmp", `upload-${Date.now()}.png`);

        await fs.writeFile(tempInput, inputBuffer);
        try {
          await execFileAsync("sips", ["-s", "format", "png", tempInput, "--out", tempPng]);
          const pngBuffer = await fs.readFile(tempPng);
          bufferToProcess = pngBuffer;
        } finally {
          await fs.unlink(tempInput).catch(() => {});
          await fs.unlink(tempPng).catch(() => {});
        }
      }
    }

    // Process with Sharp to high-fidelity WebP
    // 92 quality preserves retina typography and screenshot crisps without banding
    const sharpInstance = sharp(bufferToProcess);
    const metadata = await sharpInstance.metadata();

    // If screenshot is extraordinarily large (e.g. 5K retina > 2400px wide), gracefully downscale preserving aspect ratio
    let transform = sharpInstance.rotate(); // auto-orient based on EXIF
    if (metadata.width && metadata.width > 2400) {
      transform = transform.resize({ width: 2400, withoutEnlargement: true });
    }

    const outputBuffer = await transform
      .webp({
        quality: 92,
        effort: 5,
        smartSubsample: true,
      })
      .toBuffer();

    await fs.writeFile(finalFilePath, outputBuffer);

    const finalMetadata = await sharp(outputBuffer).metadata();

    return {
      success: true,
      filePath: publicUrl,
      fileName: finalFileName,
      width: finalMetadata.width,
      height: finalMetadata.height,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Image processing error:", errorMsg);
    return {
      success: false,
      error: `Failed to convert and save image: ${errorMsg}`,
    };
  }
}
