
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Star } from "lucide-react";

const ELearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">E-Learning Hub</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our E-Learning platform provides students with access to digital resources,
              online courses, and interactive learning materials to enhance their educational experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Library</h3>
                <p className="text-gray-600">
                  Access to e-books, journals, and research materials
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Virtual Classrooms</h3>
                <p className="text-gray-600">
                  Interactive online sessions and discussions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Online Resources</h3>
                <p className="text-gray-600">
                  Study materials, practice tests, and video tutorials
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Platform Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Access</h4>
                    <p className="text-gray-600">Learn at your own pace, anytime, anywhere</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interactive Content</h4>
                    <p className="text-gray-600">Engage with multimedia learning materials</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Progress Tracking</h4>
                    <p className="text-gray-600">Monitor your learning journey</p>
                  </div>
                </li>
              </ul>
            </div>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Getting Started</h3>
                <ol className="space-y-4 text-gray-600 list-decimal pl-4">
                  <li>Request your student login credentials from the IT department</li>
                  <li>Log in to the e-learning platform using your student ID</li>
                  <li>Complete the platform orientation course</li>
                  <li>Access your enrolled courses and start learning!</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ELearning;
