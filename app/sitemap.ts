import { MetadataRoute } from "next";
import { getPublishedIdeas } from "@/lib/ideas";
import { getBuilds } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vikas-bandaru.vercel.app";

  // Core static public surfaces
  const staticRoutes = [
    "",
    "/ideas",
    "/builds",
    "/logicsims",
    "/learn",
    "/cohorts/frontend-foundations",
    "/cohorts/java-foundations",
    "/work",
    "/work/career-clarity",
    "/about",
    "/watch",
    "/collaborate",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic published ideas
  const ideas = await getPublishedIdeas();
  const ideaRoutes = ideas.map((idea) => ({
    url: `${baseUrl}/ideas/${idea.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic builds
  const builds = getBuilds();
  const buildRoutes = builds.map((build) => ({
    url: `${baseUrl}/builds/${build.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...ideaRoutes, ...buildRoutes];
}
