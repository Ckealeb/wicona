
import React from "react";
import { Link } from "react-router-dom";
import { Video, MapPin, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Live Classroom",
      description: "Experience our interactive digital classrooms with real-time collaboration tools and multimedia learning resources.",
      icon: <Video className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-campus-blue" />,
      link: "/academics/live-classroom",
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Virtual Campus Tour",
      description: "Explore our state-of-the-art facilities and beautiful campus grounds through an immersive 360° virtual tour.",
      icon: <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-campus-teal" />,
      link: "/about/virtual-tour",
      color: "bg-teal-50"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Stay connected with your child's progress, school events, and important announcements through our mobile application.",
      icon: <Download className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-campus-amber bg-lime-400 rounded p-1" />,
      link: "/resources/mobile-app",
      color: "bg-amber-50"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-campus-gray bg-amber-950">
      <div className="campus-container bg-yellow-200 rounded-lg">
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-campus-primary text-center mb-4 sm:mb-6">
            Key Features
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Discover innovative tools and resources designed to enhance the educational experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map(feature => (
              <Card key={feature.id} className={`card-hover border-t-4 border-t-campus-blue shadow-md ${feature.color} h-full flex flex-col`}>
                <CardHeader className="bg-lime-400 text-center sm:text-left">
                  <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">{feature.icon}</div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-playfair">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6">
                  <CardDescription className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Link 
                    to={feature.link} 
                    className="text-campus-blue hover:text-campus-teal font-medium transition-colors flex items-center text-sm sm:text-base"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
