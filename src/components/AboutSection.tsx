
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-md aspect-square relative">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/lovable-uploads/d1c50d10-80ac-41eb-93e9-363ea95d24f0.png" 
                  alt="Dhevendhiran R - Graphic Designer Action Figure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 p-4 glass-card rounded-xl -rotate-3">
                <p className="text-sm font-medium text-primary">Graphic & UI Designer</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-heading font-medium mb-6 text-foreground/90">
              Passionate about Creating Beautiful & Functional Designs
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Dhevendhiran, a passionate graphic designer and UI enthusiast with a keen eye for detail and creativity.
                I specialize in creating visually striking designs that effectively communicate messages and enhance user experiences.
              </p>
              <p>
                Currently pursuing my B.Tech in Information Technology at IFET College of Engineering (2021-2025),
                I combine my academic knowledge with practical experience in design to deliver results that exceed expectations.
              </p>
              <p>
                My journey in design began with freelance projects for friends and college events, where I discovered my passion
                for transforming ideas into compelling visual stories. I pride myself on making every design memorable and purposeful.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {["Adobe Illustrator", "Photoshop", "Figma", "Canva", "UI Design", "Web Design", "Branding", "Typography"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">Education</h4>
              <div className="p-4 glass-card rounded-xl">
                <h5 className="font-medium">B.Tech in Information Technology</h5>
                <p className="text-muted-foreground">IFET College of Engineering</p>
                <p className="text-sm text-muted-foreground">2021 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
