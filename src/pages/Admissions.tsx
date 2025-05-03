import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Award, Star } from "lucide-react";
const Admissions = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Admissions</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Join Witts College Namulada and embark on a journey of academic excellence and personal growth. 
              We welcome students who are eager to learn, grow, and contribute to our vibrant community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Admission Requirements</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 mt-1 text-green-600" />
                    <span>Completed primary education with KCPE results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 mt-1 text-green-600" />
                    <span>School leaving certificate from previous institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 mt-1 text-green-600" />
                    <span>Birth certificate and immunization records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 mt-1 text-green-600" />
                    <span>Two passport-sized photographs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Application Process</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-600">1</div>
                    <span>Complete the online application form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-600">2</div>
                    <span>Submit required documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-600">3</div>
                    <span>Pay application fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-600">4</div>
                    <span className="text-base">Attend interview (if required)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-green-800">Key Dates</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">Term 1 Intake</h4>
                <p className="text-gray-600">Applications: Dec - Jan</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">Term 2 Intake</h4>
                <p className="text-gray-600">Applications: Apr - May</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">Term 3 Intake</h4>
                <p className="text-gray-600">Applications: Aug - Sep</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700">
              Start Your Application
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Admissions;