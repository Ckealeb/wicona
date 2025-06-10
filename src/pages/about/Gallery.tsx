
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Media Gallery</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Explore moments and memories from our vibrant campus life through our photo gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/lovable-uploads/fcaa4ddf-b28f-4fa0-b4d1-56afa4652aa3.png",
                title: "Main Academic Block",
                description: "Our impressive three-story main academic building with modern facilities"
              },
              {
                image: "/lovable-uploads/63f2fbf1-b6f1-46f1-8dd4-f0c1c55c4c80.png",
                title: "Campus Courtyard",
                description: "Beautiful modern architecture with landscaped courtyards for student gatherings"
              },
              {
                image: "/lovable-uploads/402322b0-1227-48a8-a7a7-84c09f48b77f.png",
                title: "Classroom Complex",
                description: "Spacious classroom buildings with natural lighting and green surroundings"
              },
              {
                image: "/lovable-uploads/e651f520-619d-4e92-b054-326fe98d8f5c.png",
                title: "Administration Block",
                description: "Modern administration building with covered walkways and palm trees"
              },
              {
                image: "/lovable-uploads/10c21ebf-bf0d-4831-8ee0-3c60a75b5087.png",
                title: "Student Assembly",
                description: "Our students in their uniforms during a campus gathering"
              },
              {
                image: "/lovable-uploads/3c412ee4-beb9-4c5f-b328-6f312075e3fb.png",
                title: "Leadership Address",
                description: "School leadership addressing students and community"
              },
              {
                image: "/lovable-uploads/a58d3f31-0dae-4c74-965e-86c5f215e22c.png",
                title: "Cultural Celebration",
                description: "Students showcasing traditional attire during cultural events"
              },
              {
                image: "/lovable-uploads/be97c79a-604e-460e-a33e-e7546ef1f45b.png",
                title: "Graduation Ceremony",
                description: "Special moments from our graduation celebrations"
              },
              {
                image: "/lovable-uploads/35b1dfeb-33d3-49df-9bff-171d1e510de3.png",
                title: "Campus Events",
                description: "Students participating in campus activities and sports"
              },
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                title: "Technology Lab",
                description: "Students working on programming projects"
              },
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                title: "Computer Science Lab",
                description: "Advanced programming sessions"
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
                <div className="aspect-video relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1 text-emerald-100 font-orbitron">{item.title}</h3>
                  <p className="text-emerald-200 text-sm font-orbitron">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
