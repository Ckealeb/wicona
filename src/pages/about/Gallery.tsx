
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
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
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                title: "Technology Lab",
                description: "Students working on programming projects"
              },
              {
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                title: "Campus Events",
                description: "Annual cultural celebration"
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
      <Footer />
    </div>
  );
};

export default Gallery;
