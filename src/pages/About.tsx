
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Building, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <main className="flex-grow">
        <div className="campus-container py-16 bg-yellow-200">
          <h1 className="section-title">About Wits College Namulada</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-8">Founded in 2000, Wits College Namulada has been a beacon of academic excellence in Wakiso District, Uganda. Our institution is committed to nurturing well-rounded individuals through a blend of rigorous academics, character development, and practical skills training.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-800">Our Mission</h2>
              <p className="text-gray-600">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary for success in a rapidly evolving global society.
              </p>
              
              <h2 className="text-2xl font-semibold text-green-800 pt-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading institution in academic excellence and character formation in East Africa, 
                producing graduates who are catalysts for positive change in their communities.
              </p>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Campus Building" className="rounded-lg shadow-lg object-cover h-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-green-100">
              <CardContent className="pt-6 bg-lime-50">
                <div className="text-green-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Dedicated educators with extensive experience in their fields</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6 bg-lime-50">
                <div className="text-green-600 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CBC Curriculum</h3>
                <p className="text-gray-600">Innovative programs aligned with international standards</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6 bg-lime-50">
                <div className="text-green-600 mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">State-of-art Facilities</h3>
                <p className="text-gray-600">Well-equipped laboratories and modern learning spaces</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6 bg-lime-50">
                <div className="text-green-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Success</h3>
                <p className="text-gray-600">Proven track record of academic and extracurricular achievements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
