
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const Curriculum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Our Curriculum</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our comprehensive curriculum is designed to prepare students for success in their academic
              and professional journeys. We follow the 8-4-4 system while incorporating modern
              teaching methods and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Core Subjects</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Mathematics</li>
                  <li>English Language</li>
                  <li>Sciences</li>
                  <li>Social Studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Electives</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Computer Studies</li>
                  <li>Business Studies</li>
                  <li>Agriculture</li>
                  <li>Music</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Extra-Curricular</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Sports</li>
                  <li>Drama Club</li>
                  <li>Debate Club</li>
                  <li>Environmental Club</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Form 1 Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Mathematics, English, Kiswahili, Sciences, Social Studies, Religious Education</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Form 2 Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Core subjects continue with introduction to electives like Computer Studies</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Form 3 Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Specialized subjects begin, students choose between sciences and humanities</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Form 4 Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Final year preparation with focus on KCSE subjects and career guidance</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
