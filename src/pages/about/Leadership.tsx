
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Star } from "lucide-react";

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">School Leadership</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our dedicated leadership team brings together decades of experience in education
              and administration to guide Witts College Namulada towards excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <User className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Dr. James Mutua</h3>
                  <p className="text-gray-600 mb-2">Principal</p>
                  <p className="text-sm text-gray-500">
                    Ph.D. in Educational Leadership
                    20+ years of experience in education
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Shield className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Mrs. Sarah Ochieng</h3>
                  <p className="text-gray-600 mb-2">Deputy Principal - Academics</p>
                  <p className="text-sm text-gray-500">
                    M.Ed in Curriculum Development
                    15+ years teaching experience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Star className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Mr. Daniel Wafula</h3>
                  <p className="text-gray-600 mb-2">Deputy Principal - Administration</p>
                  <p className="text-sm text-gray-500">
                    MBA in Educational Management
                    12+ years administrative experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
