
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

// Define portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Construction Shop Brand Identity",
    description: "Complete branding package including logo, business cards, and promotional banners for a local construction business.",
    category: "Branding",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Developed a cohesive brand identity for a friend's construction shop that conveys reliability and professionalism. The design focuses on bold typography paired with industrial elements to communicate strength and expertise in the construction field.",
    tools: ["Adobe Illustrator", "Photoshop"]
  },
  {
    id: 2,
    title: "College Tech Fest Poster",
    description: "Eye-catching poster design for the annual technology festival at IFET College of Engineering.",
    category: "Event",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Created a vibrant poster that captures the innovative spirit of the college's tech fest. The design uses dynamic geometric shapes and a bold color scheme to attract attention and communicate the event's tech-forward focus.",
    tools: ["Adobe Illustrator", "Photoshop"]
  },
  {
    id: 3,
    title: "E-commerce UI Design",
    description: "Modern user interface design for a fashion e-commerce platform focusing on user experience and conversion.",
    category: "UI Design",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Designed a clean, intuitive interface that enhances the shopping experience and guides users efficiently through the purchase journey. The UI features carefully considered typography, whitespace, and visual hierarchy to showcase products effectively.",
    tools: ["Figma", "Adobe Illustrator"]
  },
  {
    id: 4,
    title: "Cultural Event Banner Series",
    description: "Series of banners for the annual cultural celebrations at college showcasing traditional art forms.",
    category: "Event",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Developed a cohesive series of banners that highlight various cultural performances and activities. The designs incorporate traditional patterns and motifs while maintaining a fresh, contemporary look that appeals to the student audience.",
    tools: ["Adobe Illustrator", "Photoshop", "Canva"]
  },
  {
    id: 5,
    title: "Social Media Campaign",
    description: "Comprehensive social media graphics package for a local startup's product launch.",
    category: "Social Media",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Created an engaging series of social media graphics that maintained brand consistency while offering visual variety to keep the audience interested throughout the campaign. The designs were optimized for different platforms while telling a cohesive story about the product.",
    tools: ["Photoshop", "Canva"]
  },
  {
    id: 6,
    title: "Mobile App UI Concept",
    description: "Conceptual UI design for a productivity mobile application with dark mode interface.",
    category: "UI Design",
    imageSrc: "/placeholder.svg",
    detailedDescription: "Developed a sleek, user-friendly interface concept for a productivity app that emphasizes ease of use and visual comfort. The dark mode design reduces eye strain while maintaining excellent readability and incorporating subtle animations for an engaging user experience.",
    tools: ["Figma", "Adobe Illustrator"]
  }
];

const PortfolioSection = () => {
  // State for filter and selected project
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<null | typeof portfolioItems[0]>(null);
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  // Filter items
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my selected projects showcasing my design skills and creative problem-solving.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-secondary/50 border-white/5 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <span className="text-xs font-medium bg-primary/20 text-primary rounded-full px-2 py-1">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full text-primary hover:text-primary hover:bg-primary/10"
                  onClick={() => setSelectedProject(item)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Project detail dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-[16/9] overflow-hidden rounded-md">
                <img 
                  src={selectedProject.imageSrc} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Project Details</h4>
                <p className="text-muted-foreground">{selectedProject.detailedDescription}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
