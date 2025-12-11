import { Utensils, Flame, ChefHat, Award,Sandwich,Cookie,Salad, EggFried, Ham } from "lucide-react";


const journeyMilestones = [
  {
    icon: Sandwich,
    title: "Deli Sandwich",
    period: "Week 1",
    description: "Introduction to kitchen fundamentals, and mise en place. Learning to organize the workspace efficiently. Prepared deli sandwiches using KSG standardised recipes",
    highlights: ["Ingredient preparation","Open-closed-wrapped sandwiches","garnishing","selection of breads"],
  },
  {
    icon: Cookie,
    title: "Baked Goods",
    period: "Week 2",
    description: "Learned to bake a variety of goods including soda bread, hazelnut brownies, scones, and cookies, mastering techniques to control heat and achieve perfect texture in each product.",
    highlights: ["pastry techniques","baking techniques","dough handling"],
  },
  {
    icon: Salad,
    title: "Deli Salads",
    period: "Week 3",
    description: "Deep dive into heat control, pan-frying, and grilling techniques. Understanding how heat transforms ingredients.",
    highlights: ["Charcutier platter", "Gourmet Salads", "Salad Dressing"],
  },
  {
    icon: Flame,
    title: "Stewing",
    period: "Week 4",
    description: "Practiced stewing by browning ingredients, adding liquid, and simmering them slowly to develop flavor and tenderness.",
    highlights: ["Stewing", "beef", "lamb","simmering","sweating"],
  },
  {
    icon: EggFried,
    title: "Stewing continued",
    period: "Week 5",
    description: "We reinforced stewing principles through lamb tagine, risotto variations, couscous, and egg fried rice. Main techniques included controlled absorption, low-and-slow cooking, and aromatic profiling.",
    highlights: ["Consistency control", "Aromatic profiling", "Low-and-slow cooking"],
  },
  {
    icon: Ham,
    title: "Roasting and Poaching",
    period: "Week 6",
    description: "We prepared roast chicken, poached/steamed chicken, and poached salmon while learning dry-heat roasting, gentle poaching, and moisture retention for tender proteins.",
    highlights: ["Dry-heat roasting", "Slow braise", "Caramelisation"],
  },
  {
    icon: ChefHat,
    title: "Frying & Grilling",
    period: "Week 7",
    description: "We cooked pollo asado, chicken schnitzel, seabass, stir-fried noodles, and halloumi using pan, wok methods. Focus was on searing, shallow frying, wok control, and grill marking.",
    highlights: ["Grill marking", "Searing", "Heat-zone management"],
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
