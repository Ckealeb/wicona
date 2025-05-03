import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section className="py-16 bg-amber-300">
      <div className="campus-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Welcome to Campus Digital Sphere</h2>
            <p className="text-gray-700 mb-6">
              At Campus Digital Sphere, we believe in empowering students with the knowledge, skills, 
              and mindset needed to thrive in an increasingly digital world. Our innovative approach 
              to education combines traditional academic excellence with cutting-edge technology and 
              modern teaching methodologies.
            </p>
            
            <Tabs defaultValue="mission" className="mt-8">
              <TabsList className="grid w-full grid-cols-3 bg-lime-400">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="vision" className="bg-gray-50">Our Vision</TabsTrigger>
                <TabsTrigger value="values">Core Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="p-4 rounded-lg mt-2 bg-yellow-100">
                <p className="text-gray-700">
                  To provide an exceptional education that integrates digital literacy 
                  and critical thinking, preparing students to lead and innovate in a 
                  rapidly evolving global society.
                </p>
              </TabsContent>
              <TabsContent value="vision" className="p-4 rounded-lg mt-2 bg-amber-100">
                <p className="text-gray-700">
                  To be recognized globally as a pioneering educational institution that 
                  bridges traditional learning with digital innovation, producing graduates 
                  who are agents of positive change.
                </p>
              </TabsContent>
              <TabsContent value="values" className="p-4 rounded-lg mt-2 bg-amber-100">
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Excellence in all endeavors</li>
                  <li>Innovation and creative thinking</li>
                  <li>Inclusivity and respect for diversity</li>
                  <li>Integrity and ethical responsibility</li>
                  <li>Collaboration and community engagement</li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="mt-8 bg-amber-300">
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80" alt="Campus grounds vintage" className="w-full h-full object-cover sepia" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 text-white rounded-lg shadow-lg max-w-xs bg-lime-700">
              <p className="font-playfair font-bold text-2xl mb-2">Est. 2000</p>
              <p className="text-sm">25 years of educational excellence and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;