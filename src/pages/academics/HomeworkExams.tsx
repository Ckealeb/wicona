import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Download, Calendar, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface Assignment {
  title: string;
  subject: string;
  dueDate: string;
  description: string;
}

const HomeworkExams = () => {
  const [selectedClass, setSelectedClass] = useState("s1");

  const classLevels = [
    { id: "s1", name: "Senior 1" },
    { id: "s2", name: "Senior 2" },
    { id: "s3", name: "Senior 3" },
    { id: "s4", name: "Senior 4" },
    { id: "s5", name: "Senior 5" },
    { id: "s6", name: "Senior 6" },
  ];

  const assignments: Record<string, Assignment[]> = {
    s1: [
      {
        title: "Mathematics Assignment 1",
        subject: "Mathematics",
        dueDate: "June 10, 2025",
        description: "Complete exercises on linear equations from textbook pages 45-47. Show all working."
      },
      {
        title: "English Language Essay",
        subject: "English",
        dueDate: "June 12, 2025",
        description: "Write a descriptive essay of 500 words on 'My Favorite Place'. Include sensory details."
      },
      {
        title: "Science Experiment Report",
        subject: "Integrated Science",
        dueDate: "June 15, 2025",
        description: "Write a report on the plant growth experiment. Include observations and conclusions."
      }
    ],
    s2: [
      {
        title: "Algebra Practice Problems",
        subject: "Mathematics",
        dueDate: "June 10, 2025",
        description: "Complete the quadratic equations worksheet. Show all steps of your solutions."
      },
      {
        title: "History Research Assignment",
        subject: "History",
        dueDate: "June 14, 2025",
        description: "Research and write 3 pages on the pre-colonial history of East Africa."
      },
      {
        title: "Biology Cell Diagrams",
        subject: "Biology",
        dueDate: "June 11, 2025",
        description: "Draw and label plant and animal cell diagrams. Explain the functions of each organelle."
      }
    ],
    s3: [
      {
        title: "Chemistry Periodic Table Assignment",
        subject: "Chemistry",
        dueDate: "June 10, 2025",
        description: "Complete the worksheet on periodic trends. Study the first 20 elements in detail."
      },
      {
        title: "Geography Map Skills",
        subject: "Geography",
        dueDate: "June 13, 2025",
        description: "Complete the map reading exercises and answer questions on contour lines and scale."
      },
      {
        title: "Literature Analysis",
        subject: "Literature",
        dueDate: "June 12, 2025",
        description: "Write a character analysis of the main character in 'Things Fall Apart'."
      }
    ],
    s4: [
      {
        title: "UCE Physics Revision",
        subject: "Physics",
        dueDate: "June 9, 2025",
        description: "Complete the past paper questions on electricity and magnetism (2020-2023 papers)."
      },
      {
        title: "Mathematics Practice Paper",
        subject: "Mathematics",
        dueDate: "June 11, 2025",
        description: "Complete the full mathematics practice paper. Focus on topics from Paper 1."
      },
      {
        title: "Biology Revision Assignment",
        subject: "Biology",
        dueDate: "June 14, 2025",
        description: "Answer all questions in the revision booklet on genetics and inheritance."
      }
    ],
    s5: [
      {
        title: "A-Level Chemistry Practical Report",
        subject: "Chemistry",
        dueDate: "June 10, 2025",
        description: "Write up the full titration experiment including calculations and sources of error."
      },
      {
        title: "Economics Research Paper",
        subject: "Economics",
        dueDate: "June 15, 2025",
        description: "Research and write a 5-page paper on inflation and its effects on developing economies."
      },
      {
        title: "Mathematics Integration Problems",
        subject: "Mathematics",
        dueDate: "June 12, 2025",
        description: "Complete all integration exercises from the textbook chapter 7, numbers 1-20."
      }
    ],
    s6: [
      {
        title: "UACE Physics Practice Paper",
        subject: "Physics",
        dueDate: "June 11, 2025",
        description: "Complete the full physics practice paper. Focus on all main topics covered in the syllabus."
      },
      {
        title: "Literature Research Essay",
        subject: "Literature",
        dueDate: "June 14, 2025",
        description: "Write a comparative essay on themes in 'Hamlet' and 'The Great Gatsby' (2000 words)."
      },
      {
        title: "Biology Revision Assignment",
        subject: "Biology",
        dueDate: "June 13, 2025",
        description: "Complete the full revision booklet focusing on ecology and cellular processes."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-green-50">
      <main className="flex-grow">
        <div className="campus-container py-16">
          <h1 className="section-title">Homework & Examinations</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              At Witts College Namulada, we maintain rigorous academic standards with regular assignments,
              assessments, and examinations. This page provides resources and information for students and parents.
            </p>
          </div>

          <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-lime-800 flex items-center">
              <Calendar className="mr-2" /> Academic Calendar 2025-2026
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-lime-200 rounded p-4">
                <h3 className="font-semibold text-lime-700 mb-2">Term 1</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><span className="font-medium">Start:</span> February 3, 2025</li>
                  <li><span className="font-medium">Mid-term Break:</span> March 17-21, 2025</li>
                  <li><span className="font-medium">End:</span> May 9, 2025</li>
                  <li><span className="font-medium">Exams:</span> April 21 - May 2, 2025</li>
                </ul>
              </div>
              <div className="border border-lime-200 rounded p-4">
                <h3 className="font-semibold text-lime-700 mb-2">Term 2</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><span className="font-medium">Start:</span> May 26, 2025</li>
                  <li><span className="font-medium">Mid-term Break:</span> July 7-11, 2025</li>
                  <li><span className="font-medium">End:</span> August 29, 2025</li>
                  <li><span className="font-medium">Exams:</span> August 10-21, 2025</li>
                </ul>
              </div>
              <div className="border border-lime-200 rounded p-4">
                <h3 className="font-semibold text-lime-700 mb-2">Term 3</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><span className="font-medium">Start:</span> September 15, 2025</li>
                  <li><span className="font-medium">Mid-term Break:</span> October 27-31, 2025</li>
                  <li><span className="font-medium">End:</span> December 5, 2025</li>
                  <li><span className="font-medium">Final Exams:</span> November 17-28, 2025</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-lime-800">Class Assignments</h2>
          
          <div className="mb-8">
            <Tabs defaultValue={selectedClass}>
              <TabsList className="w-full flex flex-wrap">
                {classLevels.map(level => (
                  <TabsTrigger 
                    key={level.id} 
                    value={level.id}
                    className={selectedClass === level.id ? "bg-lime-600 text-white" : "bg-lime-50"} 
                    onClick={() => setSelectedClass(level.id)}
                  >
                    {level.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {classLevels.map(level => (
                <TabsContent key={level.id} value={level.id} className="hidden"></TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mb-12 bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-lime-800">Current Assignments for {classLevels.find(c => c.id === selectedClass)?.name}</h3>
              
              {assignments[selectedClass].map((assignment, index) => (
                <Card key={index} className="mb-4 border-lime-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-medium text-lime-900">{assignment.title}</h4>
                        <p className="text-gray-600">Subject: {assignment.subject}</p>
                        <p className="text-gray-600">Due: {assignment.dueDate}</p>
                      </div>
                      <Button className="mt-4 md:mt-0 bg-lime-600 hover:bg-lime-700">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                      <p className="text-gray-700">{assignment.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-lime-800">Examination Information</h2>
          
          <div className="mb-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Internal Examinations</AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-white rounded-md">
                    <p className="mb-4 text-gray-700">Our internal examinations follow these general guidelines:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Each term has mid-term examinations (30%) and end-of-term examinations (50%)</li>
                      <li>Continuous assessment tests (20%) are conducted throughout the term</li>
                      <li>All examinations are based on the NCDC curriculum and cover content taught during the term</li>
                      <li>Mock examinations are conducted for candidates (S4 and S6) in preparation for national examinations</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">National Examinations</AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-white rounded-md">
                    <p className="mb-4 text-gray-700">Our students sit for these national examinations:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li><span className="font-medium">Uganda Certificate of Education (UCE)</span>: Taken by Senior 4 students, typically in October-November</li>
                      <li><span className="font-medium">Uganda Advanced Certificate of Education (UACE)</span>: Taken by Senior 6 students, typically in November-December</li>
                      <li>Registration for national examinations is done through the school in the first term of the examination year</li>
                      <li>The school provides intensive revision sessions and practice papers for candidates</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Study Resources</AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-white rounded-md">
                    <p className="mb-4 text-gray-700">We provide the following study resources to support examination preparation:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Past papers for both internal and national examinations</li>
                      <li>Revision guides and notes for all subjects</li>
                      <li>After-school revision classes for examination candidates</li>
                      <li>Online resources through our e-learning portal</li>
                      <li>Weekend consultations with subject teachers</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Study Tips</h3>
                <p className="text-gray-600">Create a regular study schedule and break down large topics into manageable portions.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Submission Guidelines</h3>
                <p className="text-gray-600">All assignments must be submitted on time with proper formatting and citations.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Academic Honesty</h3>
                <p className="text-gray-600">We maintain strict policies against plagiarism and examination malpractice.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeworkExams;
