import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";

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

      {/* footer */}
    </div>
  );
};
