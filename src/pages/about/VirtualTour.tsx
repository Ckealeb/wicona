
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Library } from "lucide-react";

const VirtualTour = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Virtual Campus Tour</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Experience the beauty and facilities of Witts College Namulada through our virtual tour.
              Explore our modern campus and see what makes our institution special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    alt="Academic Block"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Academic Block
                </h3>
                <p className="text-gray-600">
                  State-of-the-art classrooms equipped with modern learning technology
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                    alt="Library"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <Library className="w-5 h-5" />
                  Library Complex
                </h3>
                <p className="text-gray-600">
                  Extensive collection of books and digital resources for research
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VirtualTour;
