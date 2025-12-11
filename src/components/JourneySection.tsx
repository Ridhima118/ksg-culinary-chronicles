import { Utensils, Flame, ChefHat, Award } from "lucide-react";

const journeyMilestones = [
  {
    icon: Utensils,
    title: "Getting Started",
    period: "Week 1-2",
    description: "Introduction to kitchen fundamentals, knife skills, and mise en place. Learning to organize the workspace efficiently.",
    highlights: ["Kitchen safety", "Basic knife techniques", "Ingredient preparation"],
  },
  {
    icon: Flame,
    title: "Mastering Heat",
    period: "Week 3-4",
    description: "Deep dive into heat control, pan-frying, and grilling techniques. Understanding how heat transforms ingredients.",
    highlights: ["Pan-frying fish", "Temperature control", "Grilling proteins"],
  },
  {
    icon: ChefHat,
    title: "Advanced Techniques",
    period: "Week 5-6",
    description: "Exploring roasting, sauce making, and more complex preparations. Building flavor through various cooking methods.",
    highlights: ["Roasting mastery", "Sauce reductions", "Cream-based sauces"],
  },
  {
    icon: Award,
    title: "The Final Touches",
    period: "Week 7-8",
    description: "Perfecting presentation, plating aesthetics, and completing the full course with signature dishes.",
    highlights: ["Plating techniques", "Final assessments", "Portfolio creation"],
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.3em] uppercase text-sm">My Progress</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Culinary Journey</h2>
          <div className="w-16 h-0.5 bg-gradient-copper mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow my transformation from beginner to confident cook through the KSG Chef Course curriculum.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card p-6 rounded-lg border border-border/50 shadow-elegant hover:border-primary/30 transition-colors">
                    <span className="text-primary text-sm font-medium">{milestone.period}</span>
                    <h3 className="font-display text-2xl mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground mb-4">{milestone.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {milestone.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-glow">
                  <milestone.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
