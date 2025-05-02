
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Users, Award, Bookmark, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Academic Programs</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              At Witts College Namulada, we offer a comprehensive curriculum that follows the Uganda National 
              Curriculum Development Centre (NCDC) guidelines. Our programs are designed to foster critical 
              thinking, creativity, and practical skills for success in national examinations and beyond.
            </p>
          </div>

          <Tabs defaultValue="secondary" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="secondary">Secondary Education</TabsTrigger>
              <TabsTrigger value="technical">Co-Curricular</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="secondary" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Uganda National Curriculum</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our education program follows the NCDC framework with:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>O-Level Program (S1-S4): Comprehensive coverage of core and elective subjects leading to UCE</li>
                      <li>A-Level Program (S5-S6): Specialized subject combinations (Science/Arts) leading to UACE</li>
                      <li>Computer Studies and ICT Integration across all levels</li>
                      <li>Career Guidance and Counseling services</li>
                    </ul>
                    <div className="mt-4">
                      <Link to="/academics/curriculum" className="text-lime-700 font-medium hover:text-lime-900 hover:underline">
                        View Complete Curriculum Details →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technical" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Co-Curricular Activities</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">We offer comprehensive development through:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Sports Teams (Football, Basketball, Netball, Athletics)</li>
                      <li>Music, Dance and Drama</li>
                      <li>Debate and Public Speaking</li>
                      <li>Science and Innovation Clubs</li>
                      <li>Environmental Conservation Club</li>
                      <li>Agricultural Club</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assessment" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Academic Assessment</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our comprehensive assessment framework includes:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Continuous Assessment Tests (CATs)</li>
                      <li>Mid-term Examinations</li>
                      <li>End-of-term Examinations</li>
                      <li>Practical Projects and Presentations</li>
                      <li>National Examinations Preparation</li>
                    </ul>
                    <div className="mt-4">
                      <Link to="/academics/homework-exams" className="text-lime-700 font-medium hover:text-lime-900 hover:underline">
                        View Homework & Examination Details →
                      </Link>
                    </div>
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
                <p className="text-gray-600">Qualified and experienced educators with specialized subject expertise</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Modern Resources</h3>
                <p className="text-gray-600">Up-to-date learning materials and digital resources</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Small Classes</h3>
                <p className="text-gray-600">Personalized attention with manageable class sizes</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Consistently strong performance in national exams</p>
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
