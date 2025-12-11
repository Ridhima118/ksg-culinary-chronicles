import { useState } from "react";
import { Clock, Users, ChefHat, X } from "lucide-react";
import seabass from "@/assets/seabass.jpg";
import schnitzel from "@/assets/schnitzel.jpg"
interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  //difficulty: string;
  ingredients: string[];
  method: string[];
  category: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Panfried Seabass",
    description: "Crispy-skinned seabass fillet served with a luxurious white wine cream sauce, showcasing perfect pan-frying technique.",
    image: seabass,
    prepTime: "30 mins",
    servings: "2",
    //difficulty: "Intermediate",
    category: "Main Course",
    ingredients: [
      "2 seabass fillets, scaled and pin-boned",
      "200ml white wine",
      "150ml double cream",
      "2 shallots, finely diced",
      "Fresh herbs (dill, parsley)",
      "Butter and olive oil",
      "Lemon juice",
      "Salt and white pepper"
    ],
    method: [
      "Score the fish skin lightly and season both sides with salt.",
      "Heat oil in a non-stick pan until shimmering.",
      "Place fish skin-side down, press gently for even contact.",
      "Cook until skin is golden and crispy, about 4-5 minutes.",
      "Flip and cook for 1-2 minutes more.",
      "For sauce: Sauté shallots, deglaze with wine, reduce by half.",
      "Add cream, simmer until thickened, finish with lemon and herbs."
    ]
  },
  {
    id: 2,
    name: "Chicken Schnitzel",
    description: "Golden, crispy breaded chicken cutlet served alongside buttery egg noodles with fresh herbs.",
    image: schnitzel,
    prepTime: "40 mins",
    servings: "2",
    //difficulty: "Beginner",
    category: "Main Course",
    ingredients: [
      "2 chicken breasts",
      "Plain flour for dredging",
      "2 eggs, beaten",
      "200g panko breadcrumbs",
      "Butter and parsley",
      "Lemon wedges",
      "Salt and pepper"
    ],
    method: [
      "Butterfly the chicken and pound between plastic wrap until 1cm thick.",
      "Set up breading station: flour, eggs, breadcrumbs.",
      "Season chicken, dredge in flour, dip in egg, coat in crumbs.",
      "Shallow fry in oil/butter mixture until golden, 3-4 mins per side.",
      "Finish in oven for 5 mins",
      "Serve schnitzel with noodles and lemon wedges."
    ]
  },
  {
    id: 3,
    name: "Stir Fry Egg Noodles",
    description: "Quick and flavorful wok-tossed egg noodles with fresh vegetables and savory Asian sauce.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    prepTime: "20 mins",
    servings: "2",
    //difficulty: "Beginner",
    category: "Main Course",
    ingredients: [
      "300g fresh egg noodles",
      "Mixed vegetables (pak choi, peppers, spring onions)",
      "Soy sauce",
      "Oyster sauce",
      "Sesame oil",
      "Garlic and ginger",
      "Vegetable oil",
      "Sesame seeds for garnish"
    ],
    method: [
      "Cook noodles briefly, drain and toss with sesame oil.",
      "Heat wok until smoking, add oil.",
      "Stir fry garlic and ginger until fragrant.",
      "Add vegetables in order of cooking time needed.",
      "Add noodles, toss vigorously.",
      "Season with soy sauce and oyster sauce.",
      "Garnish with spring onions and sesame seeds."
    ]
  },
  {
    id: 4,
    name: "Panfried Potatoes",
    description: "Perfectly crispy on the outside, fluffy on the inside - the ultimate side dish for any protein.",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&q=80",
    prepTime: "35 mins",
    servings: "4",
    //difficulty: "Beginner",
    category: "Side Dish",
    ingredients: [
      "500g waxy potatoes",
      "Butter",
      "Olive oil",
      "Fresh rosemary and thyme",
      "Garlic cloves, crushed",
      "Sea salt flakes",
      "Black pepper"
    ],
    method: [
      "Cut potatoes into even-sized pieces.",
      "Par-boil until just tender, drain and steam dry.",
      "Heat butter and oil in a large pan.",
      "Add potatoes in a single layer, don't overcrowd.",
      "Cook without moving for 4-5 mins until golden.",
      "Flip and repeat, adding herbs and garlic.",
      "Season with sea salt and serve immediately."
    ]
  },
  {
    id: 5,
    name: "Grilled Pollo Asado",
    description: "Marinated and grilled chicken with Mediterranean spices, served with a refreshing yogurt dressing.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
    prepTime: "45 mins",
    servings: "4",
    //difficulty: "Intermediate",
    category: "Main Course",
    ingredients: [
      "4 chicken thighs, bone-in",
      "Olive oil",
      "Smoked paprika, cumin, oregano",
      "Garlic, minced",
      "Lemon zest and juice",
      "Greek yogurt",
      "Fresh mint and cucumber",
      "Salt and pepper"
    ],
    method: [
      "Combine spices, garlic, oil, and lemon for marinade.",
      "Coat chicken thoroughly, marinate for at least 2 hours.",
      "Bring to room temperature before grilling.",
      "Grill over medium-high heat, skin-side first.",
      "Cook until internal temp reaches 75°C.",
      "Rest for 5 minutes before serving.",
      "Mix yogurt with cucumber, mint, and lemon for dressing."
    ]
  },
  {
    id: 6,
    name: "Chocolate Hazelnut Brownie",
    description: "Rich, fudgy brownies with a crunchy hazelnut topping - the perfect indulgent finale to any meal.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: "50 mins",
    servings: "12",
    //difficulty: "Beginner",
    category: "Dessert",
    ingredients: [
      "200g dark chocolate",
      "200g butter",
      "300g caster sugar",
      "3 large eggs",
      "100g plain flour",
      "50g cocoa powder",
      "100g hazelnuts, roughly chopped",
      "Pinch of sea salt"
    ],
    method: [
      "Preheat oven to 180°C, line a baking tin.",
      "Melt chocolate and butter together, cool slightly.",
      "Whisk eggs and sugar until pale and thick.",
      "Fold in chocolate mixture.",
      "Sift in flour and cocoa, fold gently.",
      "Pour into tin, scatter hazelnuts on top.",
      "Bake for 25-30 mins until set with a slight wobble."
    ]
  }
];

const RecipesSection = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section id="recipes" className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.3em] uppercase text-sm">My Creations</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Recipe Showcase</h2>
          <div className="w-16 h-0.5 bg-gradient-copper mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six signature dishes I mastered during the course, each representing different techniques and flavor profiles.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border/50 shadow-elegant hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-primary/90 text-primary-foreground rounded-full">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                  {recipe.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {recipe.servings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedRecipe(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-lg border border-border shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block text-xs px-3 py-1 bg-primary text-primary-foreground rounded-full mb-4">
                {selectedRecipe.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">{selectedRecipe.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedRecipe.description}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
                <span className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  {selectedRecipe.prepTime}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  Serves {selectedRecipe.servings}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ingredients */}
                <div>
                  <h3 className="font-display text-xl mb-4 text-primary">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Method */}
                <div>
                  <h3 className="font-display text-xl mb-4 text-primary">Method</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.method.map((step, index) => (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipesSection;
