import { Flame, Timer, Droplets, Palette } from "lucide-react";

const skills = [
  {
    icon: Flame,
    title: "Frying & Grilling",
    description: "Mastered the art of pan-frying with precise temperature control, achieving perfect browning and caramelization. Developed skills in grilling proteins to perfection.",
    techniques: ["Pan-frying fish", "Temperature control", "Griddle techniques", "Achieving golden crusts"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
  },
  {
    icon: Timer,
    title: "Roasting & Organization",
    description: "Learned proper roasting techniques for various proteins and vegetables. Developed strong mise en place habits for efficient kitchen workflow.",
    techniques: ["Roasting temperatures", "Mise en place", "Time management", "Kitchen organization"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Sauce Making",
    description: "Created various sauces from rich cream-based preparations to light vinaigrettes. Understanding reduction techniques and flavor balancing.",
    techniques: ["Cream sauces", "Reductions", "Vinaigrettes", "Yogurt dressings"],
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80",
  },
  {
    icon: Palette,
    title: "Presentation & Prep",
    description: "Developed an eye for beautiful plating and food presentation. Learned essential prep techniques including fish scaling, crumbing, and butchery basics.",
    techniques: ["Plating aesthetics", "Fish preparation", "Crumbing proteins", "Garnishing"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.3em] uppercase text-sm">What I Learned</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Skills & Techniques</h2>
          <div className="w-16 h-0.5 bg-gradient-copper mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The core competencies I developed throughout the KSG Chef Course, building a strong foundation for culinary excellence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border/50 shadow-elegant hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Techniques List */}
                <div className="flex flex-wrap gap-2">
                  {skill.techniques.map((technique, tIndex) => (
                    <span 
                      key={tIndex}
                      className="text-xs px-3 py-1.5 bg-secondary/50 border border-border rounded-full text-secondary-foreground"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
