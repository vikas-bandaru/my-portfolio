import { verifyStudioSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { fetchCurationItems, fetchAllTestimonials } from "./actions";
import StudioClient from "./StudioClient";

export const metadata = {
  title: "Content Curation Studio | Vikas Bandaru",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function StudioPage() {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    redirect("/studio/not-found");
  }

  const { items } = await fetchCurationItems();
  const { testimonials } = await fetchAllTestimonials();

  return <StudioClient initialItems={items} initialTestimonials={testimonials} />;
}
