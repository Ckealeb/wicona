import React from "react";
import { Link } from "react-router-dom";
import { Video, MapPin, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const Features = () => {
  const features = [{
    id: 1,
    title: "Live Classroom",
    description: "Experience our interactive digital classrooms with real-time collaboration tools and multimedia learning resources.",
    icon: <Video className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-400" />,
    link: "/academics/live-classroom",
    gradient: "from-emerald-500/20 to-teal-500/20"
  }, {
    id: 2,
    title: "Virtual Campus Tour",
    description: "Explore our state-of-the-art facilities and beautiful campus grounds through an immersive 360° virtual tour.",
    icon: <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-300" />,
    link: "/about/virtual-tour",
    gradient: "from-emerald-400/20 to-green-500/20"
  }, {
    id: 3,
    title: "Mobile App",
    description: "Stay connected with your child's progress, school events, and important announcements through our mobile application.",
    icon: <Download className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-amber-400" />,
    link: "/resources/mobile-app",
    gradient: "from-amber-400/20 to-yellow-500/20"
  }];
  return <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-800 via-emerald-900/50 to-slate-800">
      <div className="campus-container">
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-bold text-center mb-4 sm:mb-6 neon-text">
            Key Features
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-xl text-emerald-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Discover innovative tools and resources designed to enhance the educational experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map(feature => <Card key={feature.id} className={`card-hover glass-effect border border-emerald-400/30 h-full flex flex-col group transition-all duration-500 hover:border-emerald-400/60 hover:shadow-neon`}>
                <CardHeader className={`bg-gradient-to-r ${feature.gradient} text-center sm:text-left backdrop-blur-sm rounded-t-lg`}>
                  <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start group-hover:animate-float">{feature.icon}</div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-orbitron text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-lime-900">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Link to={feature.link} className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center text-sm sm:text-base font-orbitron group-hover:animate-pulse">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Features;