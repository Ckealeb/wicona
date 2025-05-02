
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Laptop, BookOpen, Video, FileText } from "lucide-react";

const ELearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">E-Learning Platform</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our digital learning platform enhances traditional classroom instruction with modern
              technology and engaging resources. Students can access educational materials anytime,
              anywhere, making learning more flexible and personalized.
            </p>
          </div>

          <Tabs defaultValue="features" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features">Platform Features</TabsTrigger>
              <TabsTrigger value="resources">Digital Resources</TabsTrigger>
              <TabsTrigger value="access">How to Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-green-600 mb-4">
                      <Laptop className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
                    <p className="text-gray-600">Engaging multimedia content that makes learning dynamic and enjoyable</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-green-600 mb-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Online Assessments</h3>
                    <p className="text-gray-600">Regular quizzes and tests with immediate feedback</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-green-600 mb-4">
                      <Video className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Virtual Classrooms</h3>
                    <p className="text-gray-600">Live sessions with teachers and collaborative activities</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Available Digital Resources</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>E-books and digital textbooks</li>
                    <li>Video tutorials for all subjects</li>
                    <li>Interactive simulations for science concepts</li>
                    <li>Practice exercises and past papers</li>
                    <li>Supplementary reading materials</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="access" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Accessing the E-Learning Platform</h3>
                  <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                    <li>Log in using your student credentials at elearning.wittscollege.ac.ke</li>
                    <li>Navigate to your enrolled courses dashboard</li>
                    <li>Click on any course to access its materials</li>
                    <li>Download resources for offline use if needed</li>
                    <li>Contact IT support for any technical issues</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to experience digital learning?</h2>
            <p className="mb-6">Our E-Learning platform is available to all enrolled students and staff members.</p>
            <button className="bg-white text-green-700 px-6 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              Log in to E-Learning Portal
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ELearning;
