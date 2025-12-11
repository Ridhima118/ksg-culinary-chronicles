import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import RecipesSection from "@/components/RecipesSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <RecipesSection />
      <TeamSection />
      <FooterSection />
    </main>
  );
};

export default Index;
