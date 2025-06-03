
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Media Gallery</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Explore moments and memories from our vibrant campus life through our photo gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
