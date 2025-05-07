import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Laptop, BookOpen, Video, FileText, Download, Users, BookText } from "lucide-react";

const ELearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <main className="flex-grow">
        <div className="campus-container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 mb-10 border border-green-100 shadow-md">
              <h1 className="text-4xl font-bold text-green-800 mb-4 font-playfair">E-Learning Platform</h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our digital learning platform enhances traditional classroom instruction with modern
                  technology and engaging resources. Students can access educational materials anytime,
                  anywhere, making learning more flexible and personalized.
                </p>
              </div>
            </div>

            <Tabs defaultValue="features" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-green-600 text-white rounded-md p-1">
                <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-green-800">
                  Platform Features
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-white data-[state=active]:text-green-800">
                  Digital Resources
                </TabsTrigger>
                <TabsTrigger value="access" className="data-[state=active]:bg-white data-[state=active]:text-green-800">
                  How to Access
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-white hover:shadow-lg transition-shadow overflow-hidden border-none">
                    <div className="h-2 bg-green-600"></div>
                    <CardContent className="pt-6 bg-amber-50/70">
                      <div className="text-green-700 mb-4 bg-green-100/50 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                        <Laptop className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Interactive Lessons</h3>
                      <p className="text-gray-700">Engaging multimedia content that makes learning dynamic and enjoyable</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:shadow-lg transition-shadow overflow-hidden border-none">
                    <div className="h-2 bg-green-600"></div>
                    <CardContent className="pt-6 bg-amber-50/70">
                      <div className="text-green-700 mb-4 bg-green-100/50 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                        <FileText className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Online Assessments</h3>
                      <p className="text-gray-700">Regular quizzes and tests with immediate feedback</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:shadow-lg transition-shadow overflow-hidden border-none">
                    <div className="h-2 bg-green-600"></div>
                    <CardContent className="pt-6 bg-amber-50/70">
                      <div className="text-green-700 mb-4 bg-green-100/50 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                        <Video className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Virtual Classrooms</h3>
                      <p className="text-gray-700">Live sessions with teachers and collaborative activities</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-2 bg-green-600"></div>
                  <div className="p-6 bg-amber-50/70">
                    <div className="flex items-center mb-4">
                      <div className="text-green-700 mr-3 bg-green-100/50 p-2 rounded-full flex items-center justify-center">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">Available Digital Resources</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>E-books and digital textbooks</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>Video tutorials for all subjects</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>Interactive simulations for science concepts</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>Practice exercises and past papers</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>Supplementary reading materials</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-700 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block"></span>
                        <span>Study guides and revision notes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="access" className="space-y-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-2 bg-green-600"></div>
                  <div className="p-6 bg-green-50/70">
                    <div className="flex items-center mb-4">
                      <div className="text-green-700 mr-3 bg-green-100/50 p-2 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">Accessing the E-Learning Platform</h3>
                    </div>
                    
                    <ol className="space-y-4">
                      <li className="flex">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        <div className="text-gray-700">
                          <p className="font-medium">Log in using your student credentials</p>
                          <p className="text-sm text-gray-600">Visit elearning.wittscollege.ac.ug and enter your student ID and password</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        <div className="text-gray-700">
                          <p className="font-medium">Navigate to your enrolled courses dashboard</p>
                          <p className="text-sm text-gray-600">All your current courses will be displayed on your homepage</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                        <div className="text-gray-700">
                          <p className="font-medium">Click on any course to access its materials</p>
                          <p className="text-sm text-gray-600">Each course includes lessons, assignments, and resources</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                        <div className="text-gray-700">
                          <p className="font-medium">Download resources for offline use if needed</p>
                          <p className="text-sm text-gray-600">Many materials can be saved for access without internet</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                        <div className="text-gray-700">
                          <p className="font-medium">Contact IT support for any technical issues</p>
                          <p className="text-sm text-gray-600">Email: itsupport@wittscollege.ac.ug or call: 0800-123-456</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-white p-8 rounded-lg bg-gradient-to-br from-green-600 to-lime-500 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3 font-playfair">Ready to experience digital learning?</h2>
                  <p className="mb-4 text-green-50">Our E-Learning platform is available to all enrolled students and staff members.</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 rounded-md font-medium transition-colors bg-amber-500 hover:bg-amber-600 text-green-900 flex items-center space-x-2">
                    <BookText className="h-5 w-5" />
                    <span>Log in to Portal</span>
                  </button>
                  <button className="px-6 py-3 rounded-md font-medium transition-colors bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Guide</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ELearning;
