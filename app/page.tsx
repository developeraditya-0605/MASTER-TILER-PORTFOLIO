// File: app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ComprehensiveSkills from "@/components/ComprehensiveSkills";
import GlobalFootprint from "@/components/GlobalFootprint";
import ExpertiseSafety from "@/components/ExpertiseSafety";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />
      <Hero />
      <AboutMe />
      <ComprehensiveSkills />
      <GlobalFootprint />
      <ExpertiseSafety />
      <ProjectGallery />
      <Footer />
    </main>
  );
}