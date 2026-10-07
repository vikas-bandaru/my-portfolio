import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PedagogySection from "@/components/home/PedagogySection";
import IdeasSection from "@/components/home/IdeasSection";
import MarqueeBand from "@/components/MarqueeBand";
import BuildsSection from "@/components/home/BuildsSection";
import WatchSection from "@/components/home/WatchSection";
import EngagementSection from "@/components/home/EngagementSection";
import CollaborateSection from "@/components/home/CollaborateSection";

export const metadata = {
  title: "Vikas Bandaru — Engineering Education, Builds & Systems Thinking",
  description:
    "Degrees test memory. Building solves real problems. Exploring how people develop the capability to solve complex real-world problems through technology.",
};

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <PedagogySection />
      <IdeasSection />
      <MarqueeBand />
      <BuildsSection />
      <WatchSection />
      <EngagementSection />
      <CollaborateSection />
    </div>
  );
}
