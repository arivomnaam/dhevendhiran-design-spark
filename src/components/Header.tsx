
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find the current active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dhevendhiran R
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
            <Button 
              key={item}
              variant="ghost" 
              onClick={() => scrollToSection(item)}
              className={cn(
                'capitalize', 
                activeSection === item ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {item}
            </Button>
          ))}
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 gap-2">
            {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
              <Button 
                key={item}
                variant="ghost" 
                className={cn(
                  'justify-start capitalize w-full', 
                  activeSection === item ? 'text-primary bg-secondary/50' : ''
                )}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
