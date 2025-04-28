import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Users, Award, Star } from "lucide-react";
const StudentLife = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Student Life</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              At Witts College Namulada, we believe in nurturing well-rounded individuals through a 
              rich blend of academic and extra-curricular activities. Our vibrant campus life offers 
              numerous opportunities for personal growth and development.
            </p>
          </div>

          <Tabs defaultValue="activities" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-lime-400">
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="clubs">Clubs</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activities" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Cultural Events</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Annual Cultural Festival</li>
                      <li>Music and Drama Performances</li>
                      <li>Art Exhibitions</li>
                      <li>Traditional Dance Competitions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Academic Activities</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Science Fair</li>
                      <li>Debate Competitions</li>
                      <li>Math Olympiad</li>
                      <li>Literary Week</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="clubs" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Academic Clubs</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Science Club</li>
                      <li>Literature Club</li>
                      <li>Mathematics Club</li>
                      <li>Computer Club</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Social Clubs</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Environmental Club</li>
                      <li>Red Cross Club</li>
                      <li>Debate Club</li>
                      <li>Music Club</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sports" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Team Sports</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Football</li>
                      <li>Basketball</li>
                      <li>Volleyball</li>
                      <li>Rugby</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-100">
                  <CardContent className="pt-6 bg-lime-200">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">Individual Sports</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Athletics</li>
                      <li>Swimming</li>
                      <li>Table Tennis</li>
                      <li>Chess</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="p-8 rounded-lg shadow-sm border border-green-100 bg-lime-200">
            <h3 className="text-2xl font-semibold mb-6 text-green-800">Student Support Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-green-50 border-green-100">
                <CardContent className="pt-6">
                  <div className="text-green-600 mb-4">
                    <Book className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Academic Counseling</h4>
                  <p className="text-gray-600">Guidance for academic excellence</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-100">
                <CardContent className="pt-6">
                  <div className="text-green-600 mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Mentorship</h4>
                  <p className="text-gray-600">Personal development support</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-100">
                <CardContent className="pt-6">
                  <div className="text-green-600 mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Career Guidance</h4>
                  <p className="text-gray-600">Future career planning</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default StudentLife;