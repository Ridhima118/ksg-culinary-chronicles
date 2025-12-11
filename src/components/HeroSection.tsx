import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            Culinary Portfolio
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
          KSG Chef Course
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
          A Journey Through the Art of Cooking
        </p>
        
        <div className="w-24 h-0.5 bg-gradient-copper mx-auto mb-8" />
        
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-light">
          From mastering foundational techniques to creating exquisite dishes, 
          this portfolio showcases my transformation in the kitchen.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
            Explore
          </span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
