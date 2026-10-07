import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PedagogySection from "./components/PedagogySection";
import IdeasSection from "./components/IdeasSection";
import MarqueeBand from "./components/MarqueeBand";
import BuildsSection from "./components/BuildsSection";
import WatchSection from "./components/WatchSection";
import EngagementSection from "./components/EngagementSection";
import CollaborateSection from "./components/CollaborateSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <PedagogySection />
        <IdeasSection />
        <MarqueeBand />
        <BuildsSection />
        <WatchSection />
        <EngagementSection />
        <CollaborateSection />
      </main>
      <Footer />
    </div>
  );
}