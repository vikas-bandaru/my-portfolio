import { NextRequest, NextResponse } from "next/server";
import { verifyStudioSession } from "@/lib/auth";
import { processAndSaveEditorialImage } from "@/lib/image-processing";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const isAuth = await verifyStudioSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const customName = formData.get("name") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await processAndSaveEditorialImage(
      buffer,
      file.name,
      customName || undefined
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      url: result.filePath,
      fileName: result.fileName,
      width: result.width,
      height: result.height,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
