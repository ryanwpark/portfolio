import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      <ThemeToggle />
      {/* background effectw */}
      <StarBackground />
      {/* navBar */}
      <Navbar />
      {/* main content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <ProjectsSection />
      </main>
      {/* footer */}
      <FooterSection />
    </div>
  );
};
