import { Metadata } from "next";
import { getPublishedIdeas } from "@/lib/ideas";
import IdeasClient from "./IdeasClient";

export const metadata: Metadata = {
  title: "Ideas & Systems Analysis | Vikas Bandaru",
  description:
    "Reflective essays and systems analysis exploring engineering education, mental models, cognitive science, and developer autonomy in the AI era.",
};

// Ensure page dynamically reflects updates or revalidated cache
export const dynamic = "force-dynamic";

export default async function IdeasPage() {
  const publishedPosts = await getPublishedIdeas();

  return <IdeasClient initialPosts={publishedPosts} />;
}
