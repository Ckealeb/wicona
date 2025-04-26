
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Users, Star } from "lucide-react";

const Academics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Academic Programs</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              At Witts College Namulada, we offer a comprehensive curriculum that prepares students 
              for success in their academic and professional journeys. Our programs are designed to 
              foster critical thinking, creativity, and practical skills.
            </p>
          </div>

          <Tabs defaultValue="secondary" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="secondary">Secondary Education</TabsTrigger>
              <TabsTrigger value="technical">Technical Programs</TabsTrigger>
              <TabsTrigger value="extra">Extra-Curricular</TabsTrigger>
            </TabsList>
            
            <TabsContent value="secondary" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Secondary School Curriculum</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our secondary education program follows the 8-4-4 system with additional enrichment activities:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Core Subjects (Mathematics, Languages, Sciences)</li>
                      <li>Humanities and Social Sciences</li>
                      <li>Computer Studies and ICT Integration</li>
                      <li>Physical Education and Sports</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technical" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Technical and Vocational Training</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">We offer practical skills training in:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Computer Programming and IT</li>
                      <li>Agricultural Technology</li>
                      <li>Business Studies</li>
                      <li>Creative Arts and Design</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="extra" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Extra-Curricular Activities</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Comprehensive development through:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Sports Teams and Athletics</li>
                      <li>Music and Drama Clubs</li>
                      <li>Science and Innovation Club</li>
                      <li>Environmental Conservation Club</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert Teachers</h3>
                <p className="text-gray-600">Qualified and experienced educators</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Modern Resources</h3>
                <p className="text-gray-600">Up-to-date learning materials</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Small Classes</h3>
                <p className="text-gray-600">Personalized attention</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Proven academic success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
