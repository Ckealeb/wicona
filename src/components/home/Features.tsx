
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
      icon: <Video className="h-12 w-12 text-campus-blue" />,
      link: "/academics/live-classroom",
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Virtual Campus Tour",
      description: "Explore our state-of-the-art facilities and beautiful campus grounds through an immersive 360° virtual tour.",
      icon: <MapPin className="h-12 w-12 text-campus-teal" />,
      link: "/about/virtual-tour",
      color: "bg-teal-50",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Stay connected with your child's progress, school events, and important announcements through our mobile application.",
      icon: <Download className="h-12 w-12 text-campus-amber" />,
      link: "/resources/mobile-app",
      color: "bg-amber-50",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-campus-gray">
      <div className="campus-container">
        <h2 className="section-title text-center">Key Features</h2>
        <p className="section-subtitle text-center">
          Discover innovative tools and resources designed to enhance the educational experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <Card key={feature.id} className={`card-hover border-t-4 border-t-campus-blue shadow-md ${feature.color}`}>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl font-playfair">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  to={feature.link}
                  className="text-campus-blue hover:text-campus-teal font-medium transition-colors flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
