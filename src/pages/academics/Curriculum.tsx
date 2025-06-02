import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, GraduationCap, Star, Award, Bookmark } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Curriculum = () => {
  return (
    <div className="w-full bg-green-50">
      <Navigation />
      <main className="flex-grow">
        <div className="campus-container py-16">
          <h1 className="section-title">Our Curriculum</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our comprehensive curriculum follows the guidelines set by Uganda's National Curriculum Development Centre (NCDC),
              designed to prepare students for success in their O-Level and A-Level examinations,
              as well as their future academic and professional journeys.
            </p>
          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-lime-400">
              <TabsTrigger value="overview">Curriculum Overview</TabsTrigger>
              <TabsTrigger value="olevel">O-Level (S1-S4)</TabsTrigger>
              <TabsTrigger value="alevel">A-Level (S5-S6)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="p-6 rounded-lg shadow-sm bg-lime-100">
                <h2 className="text-xl font-semibold mb-4 text-lime-800">Uganda National Curriculum</h2>
                <p className="text-gray-700 mb-4">
                  Our school follows the curriculum as prescribed by Uganda's National Curriculum Development Centre (NCDC),
                  which aims to develop students' knowledge, skills, values, and attitudes through a balanced educational program.
                </p>
                <p className="text-gray-700 mb-4">
                  The curriculum is designed to:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Promote critical thinking and problem solving skills</li>
                  <li>Develop communication skills in English and Kiswahili</li>
                  <li>Foster creativity and innovation</li>
                  <li>Build scientific and technological knowledge</li>
                  <li>Develop life skills and moral values</li>
                  <li>Prepare students for higher education and employment</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="olevel" className="space-y-6">
              <div className="p-6 rounded-lg shadow-sm bg-lime-100">
                <h2 className="text-xl font-semibold mb-4 text-lime-800">O-Level Curriculum (S1-S4)</h2>
                <p className="text-gray-700 mb-4">
                  The O-Level curriculum spans four years (Senior 1 to Senior 4) and culminates in the Uganda Certificate of Education (UCE) examinations.
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-lime-700">Compulsory Subjects:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Mathematics</li>
                  <li>English Language</li>
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                  <li>Geography</li>
                  <li>History</li>
                  <li>Religious Education (CRE/IRE)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-lime-700">Optional Subjects:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Agriculture</li>
                  <li>Computer Studies</li>
                  <li>Fine Art</li>
                  <li>Technology and design</li>
                  <li>Kiswahili</li>
                  <li>Litereture</li>
                  <li>Entrepreneurship</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="alevel" className="space-y-6">
              <div className="p-6 rounded-lg shadow-sm bg-lime-100">
                <h2 className="text-xl font-semibold mb-4 text-lime-800">A-Level Curriculum (S5-S6)</h2>
                <p className="text-gray-700 mb-4">
                  The A-Level curriculum spans two years (Senior 5 to Senior 6) and culminates in the Uganda Advanced Certificate of Education (UACE) examinations.
                  Students select a combination of three principal subjects plus General Paper.
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-lime-700">Science Subjects:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>Agriculture</li>
                  <li>Technical Drawing</li>
                </ul>

                <h4 className="text-md font-semibold mb-2 text-lime-600">Popular Science Combinations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li><strong>PCM:</strong> Physics, Chemistry, Mathematics</li>
                  <li><strong>PCB:</strong> Physics, Chemistry, Biology</li>
                  <li><strong>BCM:</strong> Biology, Chemistry, Mathematics</li>
                  <li><strong>PMTD:</strong> Physics, Mathematics, Technical Drawing</li>
                  <li><strong>BAM:</strong> Biology, Agriculture, Mathematics</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-lime-700">Arts Subjects:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>History</li>
                  <li>Economics</li>
                  <li>Geography</li>
                  <li>Literature in English</li>
                  <li>Divinity (CRE)</li>
                  <li>Islamic Religious Education (IRE)</li>
                  <li>Art & Design</li>
                  <li>Entrepreneurship</li>
                  <li>Kiswahili</li>
                </ul>

                <h4 className="text-md font-semibold mb-2 text-lime-600">Popular Arts Combinations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li><strong>HEG:</strong> History, Economics, Geography</li>
                  <li><strong>DEG:</strong> Divinity, Economics, Geography</li>
                  <li><strong>HEL:</strong> History, Economics, Literature</li>
                  <li><strong>GEA:</strong> Geography, Economics, Art</li>
                  <li><strong>HGK:</strong> History, Geography, Kiswahili</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-lime-700">Compulsory Subjects:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>General Paper</li>
                  <li>Computer Studies (Subsidiary)/ Subsidiary Math</li>
                </ul>

                <p className="text-gray-700 mt-4 border-t pt-4 border-lime-300">
                  <strong>Note:</strong> Our school offers career guidance to help students select appropriate subject combinations
                  aligned with their career aspirations, abilities, and interests. Contact our academic counselors for personalized advice.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="pt-6 bg-lime-100">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Core Academic Subjects</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Mathematics</li>
                  <li>English Language</li>
                  <li>Sciences (Biology, Physics, Chemistry)</li>
                  <li className="bg-lime-100">Humanities (History, Geography)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-lime-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Subjects</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Computer Studies</li>
                  <li>Agriculture</li>
                  <li>Fine Art</li>
                  <li>Entrepreneurship Education</li>
                  <li>Technical Drawing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-lime-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Values Education</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Religious Education</li>
                  <li>Patriotisim</li>
                  <li>Life Skills</li>
                  <li>Physical Education</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 p-6 rounded-lg shadow-sm bg-lime-100">
            <h2 className="text-xl font-semibold mb-6 text-lime-800 flex items-center">
              <Bookmark className="mr-2" /> Assessment Framework
            </h2>
            <p className="text-gray-700 mb-4">
              Our assessment framework follows the NCDC guidelines, incorporating both formative and summative assessments:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Continuous Assessment Tests (CATs)</li>
              <li>Mid-term Examinations</li>
              <li>End-of-term Examinations</li>
              <li>Practical Assessments and Projects</li>
              <li>National Examinations (UCE at S4 and UACE at S6)</li>
            </ul>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-amber-400 hover:bg-amber-300">Senior 1 (S1) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Mathematics, English, Kiswahili, Integrated Science, Social Studies, Religious Education, Agriculture, Physical Education, Art and Craft</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-amber-400 hover:bg-amber-300">Senior 2 (S2) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Mathematics, English, Kiswahili, Biology, Chemistry, Physics, Geography, History, Religious Education, Agriculture, Computer Studies</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-amber-400 hover:bg-amber-300">Senior 3 (S3) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Mathematics, English, Biology, Chemistry, Physics, Geography, History, Religious Education, plus electives (Computer Studies, Fine Art, Agriculture, Entrepreneurship)</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-amber-400 hover:bg-amber-300">Senior 4 (S4) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">UCE examination preparation: Mathematics, English, Sciences, Humanities, plus chosen electives. Focus on revision and past papers.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-amber-600 hover:bg-amber-500 text-zinc-50">Senior 5 (S5) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Three principal subjects (science or arts combination), General Paper, and Subsidiary ICT/Computer Studies.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="bg-amber-600 hover:bg-amber-500 text-zinc-50">Senior 6 (S6) Subjects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">Continuation of A-Level subjects with UACE examination preparation, specialized research projects, and career guidance.</p>
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
