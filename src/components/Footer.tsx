
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-secondary/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-heading font-bold">Dhevendhiran R</h2>
            <p className="text-muted-foreground">
              Passionate Graphic Designer creating memorable visual experiences that communicate and captivate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/dhevendhiran-r/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Arivomnaam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a 
                href="mailto:dhevendhiran739@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a 
                href="tel:+919360325198"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className="text-muted-foreground hover:text-primary transition-colors capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-medium">Get In Touch</h3>
            <p className="text-muted-foreground">
              Interested in working together? Feel free to contact me for any project or collaboration.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dhevendhiran R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
