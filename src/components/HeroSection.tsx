
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Dhevendhiran R
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
            Passionate Graphic Designer | UI Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Transforming ideas into visually compelling designs that communicate and captivate. 
            I blend creativity with purpose to craft memorable visual experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleContactClick} size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              <img 
                src="/lovable-uploads/3fb10cb4-a3c1-4699-bba2-97474f6828cc.png" 
                alt="Dhevendhiran R" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 glass-card rounded-xl rotate-3 animate-pulse">
              <p className="text-sm font-medium">Adobe • Figma • Canva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
