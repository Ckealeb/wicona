
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Library, Users, BookOpen } from "lucide-react";

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
                    src="/lovable-uploads/fcaa4ddf-b28f-4fa0-b4d1-56afa4652aa3.png"
                    alt="Main Academic Block"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Main Academic Block
                </h3>
                <p className="text-gray-600">
                  Our impressive three-story main academic building houses modern classrooms and administrative offices
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/63f2fbf1-b6f1-46f1-8dd4-f0c1c55c4c80.png"
                    alt="Campus Courtyard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Campus Courtyard
                </h3>
                <p className="text-gray-600">
                  Beautiful courtyard with modern architecture and well-maintained green spaces for student activities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/402322b0-1227-48a8-a7a7-84c09f48b77f.png"
                    alt="Classroom Buildings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Classroom Complex
                </h3>
                <p className="text-gray-600">
                  Spacious classroom buildings designed for optimal learning environments with natural lighting
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/e651f520-619d-4e92-b054-326fe98d8f5c.png"
                    alt="Administration Block"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  <Library className="w-5 h-5" />
                  Administration Block
                </h3>
                <p className="text-gray-600">
                  Modern administration building with covered walkways and landscaped grounds
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
