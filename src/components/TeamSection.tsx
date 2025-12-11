import { Users, Heart, Target, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";
const teamValues = [
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together in the kitchen, sharing tasks, and learning from each other's strengths.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Developing attention to detail in measurements, timing, and presentation together.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Sharing a love for food and cooking that drives us to create something special.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Encouraging each other to experiment and bring our own flair to dishes.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Working Together</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Teamwork & Collaboration</h2>
          <div className="w-16 h-0.5 bg-gradient-copper mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The KSG Chef Course emphasized the importance of working together in the kitchen. 
            Here's what I learned about collaboration and teamwork.
          </p>
        </div>

        {/* Team Photo Placeholder */}
        <div className="relative mb-16">
          <div className="aspect-[21/9] bg-card rounded-lg overflow-hidden border border-border/50 shadow-elegant">
            <div
            className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${heroImage}')`,}}/>
          </div>
        </div>
        {/*
        <div className="relative mb-16">
          <div className="aspect-[21/9] bg-card rounded-lg overflow-hidden border border-border/50 shadow-elegant">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroImage}')`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-primary/70" />
                  {/*<p className="text-lg font-display text-foreground/80">Team Photo</p>
                  <p className="text-sm text-muted-foreground">Add your group photo here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative corners
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
        </div>
        */}

        {/* Team Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamValues.map((value, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic text-muted-foreground max-w-3xl mx-auto">
            "A great meal is not just about the food – it's about the people who come together to create it."
          </blockquote>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
