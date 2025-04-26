import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}
const slides: Slide[] = [{
  id: 1,
  title: "Empowering Tomorrow's Leaders",
  subtitle: "Discover our innovative approach to education that prepares students for the digital age",
  ctaText: "Explore Programs",
  ctaLink: "/academics",
  imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
}, {
  id: 2,
  title: "Learn Through Innovation",
  subtitle: "State-of-the-art facilities and cutting-edge technology enhance the learning experience",
  ctaText: "Take a Tour",
  ctaLink: "/about/virtual-tour",
  imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
}, {
  id: 3,
  title: "Join Our Community",
  subtitle: "Be part of a diverse and inclusive environment that fosters growth and collaboration",
  ctaText: "Apply Now",
  ctaLink: "/admissions",
  imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
}];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <div className="relative overflow-hidden h-[600px] md:h-[700px]">
      {/* Slides */}
      {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.imageUrl})`
      }} />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white campus-container">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-4xl animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-2xl animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
              {slide.subtitle}
            </p>
            <Link to={slide.ctaLink} className="mt-8 btn-accent inline-flex items-center animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
              {slide.ctaText}
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>)}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-campus-amber" : "bg-white bg-opacity-50"}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
      
      {/* Quick Access buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 py-4 px-4 md:px-8 flex flex-wrap justify-center md:justify-around items-center gap-4 z-20 bg-lime-500">
        <Link to="/admissions" className="text-white hover:text-campus-amber transition-colors flex items-center">
          <span className="font-semibold">Admissions</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
        <Link to="/calendar" className="text-white hover:text-campus-amber transition-colors flex items-center">
          <span className="font-semibold">Calendar</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
        <Link to="/portal" className="text-white hover:text-campus-amber transition-colors flex items-center">
          <span className="font-semibold">Portal Login</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>;
};
export default Hero;