
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-emerald-900/30 via-slate-800/50 to-emerald-900/30">
      <div className="campus-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-bold mb-4 sm:mb-6 neon-text">
              Welcome to Campus Digital Sphere
            </h2>
            <p className="text-emerald-200 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              At Campus Digital Sphere, we believe in empowering students with the knowledge, skills, 
              and mindset needed to thrive in an increasingly digital world. Our innovative approach 
              to education combines traditional academic excellence with cutting-edge technology and 
              modern teaching methodologies.
            </p>
            
            <Tabs defaultValue="mission" className="mt-6 sm:mt-8">
              <TabsList className="grid w-full grid-cols-3 glass-effect border border-emerald-400/30 h-auto">
                <TabsTrigger value="mission" className="text-xs sm:text-sm px-2 py-2 font-orbitron text-emerald-200 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-100">Our Mission</TabsTrigger>
                <TabsTrigger value="vision" className="text-xs sm:text-sm px-2 py-2 font-orbitron text-emerald-200 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-100">Our Vision</TabsTrigger>
                <TabsTrigger value="values" className="text-xs sm:text-sm px-2 py-2 font-orbitron text-emerald-200 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-100">Core Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="p-3 sm:p-4 rounded-lg mt-2 glass-effect border border-emerald-400/20">
                <p className="text-emerald-200 text-sm sm:text-base">
                  To provide an exceptional education that integrates digital literacy 
                  and critical thinking, preparing students to lead and innovate in a 
                  rapidly evolving global society.
                </p>
              </TabsContent>
              <TabsContent value="vision" className="p-3 sm:p-4 rounded-lg mt-2 glass-effect border border-emerald-400/20">
                <p className="text-emerald-200 text-sm sm:text-base">
                  To be recognized globally as a pioneering educational institution that 
                  bridges traditional learning with digital innovation, producing graduates 
                  who are agents of positive change.
                </p>
              </TabsContent>
              <TabsContent value="values" className="p-3 sm:p-4 rounded-lg mt-2 glass-effect border border-emerald-400/20">
                <ul className="list-disc pl-5 text-emerald-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Excellence in all endeavors</li>
                  <li>Innovation and creative thinking</li>
                  <li>Inclusivity and respect for diversity</li>
                  <li>Integrity and ethical responsibility</li>
                  <li>Collaboration and community engagement</li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="mt-6 sm:mt-8">
              <Link to="/about" className="btn-primary inline-block text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-video rounded-lg overflow-hidden shadow-neon border border-emerald-400/30">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80" 
                alt="Campus grounds vintage" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-4 sm:p-6 rounded-lg shadow-neon max-w-xs glass-effect border border-emerald-400/30">
              <p className="font-orbitron font-bold text-xl sm:text-2xl mb-2 text-emerald-400">Est. 2000</p>
              <p className="text-xs sm:text-sm text-emerald-200">25 years of educational excellence and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
