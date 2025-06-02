
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Building, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <main className="flex-grow">
        <div className="campus-container py-8 sm:py-12 lg:py-16 bg-zinc-50">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-campus-primary mb-4 sm:mb-6 text-center lg:text-left">
            About Wits College Namulada
          </h1>
          
          <div className="prose max-w-none mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Founded in 2000, Wits College Namulada has been a beacon of academic excellence in Wakiso District, Uganda. Our institution is committed to nurturing well-rounded individuals through a blend of rigorous academics, character development, and practical skills training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-800">Our Mission</h2>
              <p className="font-bold text-zinc-950 text-sm sm:text-base leading-relaxed">
                To foster students with: Highest academic standards. Great analytical minds. Compassionate and sensitive hearts. Safe and nurturing school environment that supports and encourages lifelong learning, positive self-esteem and understanding. Teachers who are professionally proficient and passionate educators. Resources and opportunities that enhance learning. Recognize and respect the multicultural and international diversity of our school community
              </p>
              
              <h2 className="text-xl sm:text-2xl pt-2 sm:pt-4 font-extrabold text-lime-700">Our Vision</h2>
              <p className="text-gray-600 text-sm sm:text-base font-bold leading-relaxed">
                To build value-centered, future-ready, global youth who will possess the virtues of compassion, intelligence and integrity to serve society for a better tomorrow.
              </p>
            </div>
            
            <div className="relative order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Campus Building" 
                className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 lg:h-full" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-green-100 bg-amber-800">
              <CardContent className="pt-4 sm:pt-6 bg-yellow-200">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Expert Faculty</h3>
                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                  Dedicated educators with extensive experience in their fields
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-amber-800">
              <CardContent className="pt-4 sm:pt-6 bg-yellow-200">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">CBC Curriculum</h3>
                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                  Innovative programs aligned with international standards
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-4 sm:pt-6 bg-yellow-200">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">State-of-art Facilities</h3>
                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                  Well-equipped laboratories and modern learning spaces
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-amber-800">
              <CardContent className="pt-4 sm:pt-6 bg-yellow-200">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Student Success</h3>
                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                  Proven track record of academic and extracurricular achievements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
