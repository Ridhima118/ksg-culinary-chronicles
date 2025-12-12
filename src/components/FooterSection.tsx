import { ChefHat, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl">KSG Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A showcase of my culinary journey through the KSG Chef Course. 
              Thank you for exploring my passion for cooking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Journey", "Skills", "Recipes", "Team"].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                chhabraridhima118@gmail.com
              </a>
              {/*<div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                +1 234 567 890
              </div>
              */}
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Dublin, Ireland
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} KSG Chef Course Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Course Completed: 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
