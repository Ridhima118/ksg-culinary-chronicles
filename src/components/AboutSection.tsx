import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Get to Know Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-copper mx-auto" />
        </div>

        <div className="grid gap-12 items-center">
          {/* Photo Placeholder */}
          {/* 
          <div className="relative group">
            <div className="aspect-[4/5] bg-card rounded-lg overflow-hidden shadow-elegant border border-border/50">
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <User className="w-24 h-24 mb-4 text-primary/50" />
                <p className="text-lg font-medium">Your Photo Here</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Add your personal photo</p>
              </div>
            </div>
            {/* Decorative Frame
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </div>
*/}
          {/* Bio Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-3xl text-primary">My Culinary Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to my culinary portfolio! I embarked on this incredible journey through the 
                KSG Chef Course with a passion for creating delicious food and a desire to master 
                the art of cooking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout this course, I've learned not just recipes, but the fundamental techniques 
                that form the backbone of great cooking. From the precise heat control needed for the 
                perfect pan-fry to the patience required for a beautifully roasted dish, every lesson 
                has been a step forward in my culinary education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What excited me most was the hands-on approach – working with fresh ingredients, 
                understanding flavor combinations, and learning to present dishes that are as 
                beautiful as they are delicious.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              <div className="text-center">
                <span className="text-3xl font-display text-primary">6</span>
                <p className="text-sm text-muted-foreground mt-1">Concepts Mastered</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-display text-primary">4</span>
                <p className="text-sm text-muted-foreground mt-1">Core Techniques</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-display text-primary">1</span>
                <p className="text-sm text-muted-foreground mt-1">Course Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
