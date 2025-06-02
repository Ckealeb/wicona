
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToTop } from "@/utils/scrollUtils";

interface NavLink {
  title: string;
  path: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About Us",
    path: "/about",
    children: [
      {
        title: "Overview",
        path: "/about"
      },
      {
        title: "Leadership",
        path: "/about/leadership"
      },
      {
        title: "Virtual Tour",
        path: "/about/virtual-tour"
      },
      {
        title: "Media Gallery",
        path: "/about/gallery"
      },
      {
        title: "Student Life",
        path: "/student-life"
      }
    ]
  },
  {
    title: "Academics",
    path: "/academics",
    children: [
      {
        title: "Curriculum",
        path: "/academics/curriculum"
      },
      {
        title: "E-Learning Hub",
        path: "/academics/elearning"
      },
      {
        title: "Homework & Exams",
        path: "/academics/homework-exams"
      },
      {
        title: "Calendar",
        path: "/calendar"
      }
    ]
  },
  {
    title: "Admissions",
    path: "/admissions"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    scrollToTop();
  };
  
  return (
    <header className="sticky top-0 z-50 bg-campus-light shadow-sm transition-colors duration-300">
      <div className="bg-campus-accent/20 text-campus-primary text-center py-1 sm:py-2 transition-colors duration-300">
        <p className="text-xs sm:text-sm font-medium px-2">
          Registration open for 2025 academic year! 
          <Link to="/admissions" className="underline font-bold ml-1" onClick={handleNavigation}>
            Apply now
          </Link>
        </p>
      </div>
      
      <nav className="campus-container flex items-center justify-between py-2 sm:py-4 bg-lime-400 transition-colors duration-300">
        <Link 
          to="/" 
          className="group border-2 sm:border-4 border-double border-campus-primary rounded-lg p-1 sm:p-1" 
          onClick={handleNavigation}
        >
          <div className="relative flex items-center">
            <img 
              src="/lovable-uploads/01e3fda9-2cca-4e09-a3b8-fb1ac5e86e7b.png" 
              alt="Witts College Namulada" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain transition-transform group-hover:scale-105" 
            />
            <div className="ml-2 sm:ml-3 flex flex-col items-start">
              <span className="font-times tracking-wide text-sm sm:text-base lg:text-lg font-extrabold text-lime-950">
                WITS COLLEGE
              </span>
              <span className="tracking-widest text-xs sm:text-sm lg:text-lg font-semibold text-lime-700">
                NAMULANDA
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 bg-lime-400 transition-colors duration-300">
          {navLinks.map(link => (
            <div key={link.title} className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-campus-blue transition-colors text-sm xl:text-base" 
                  onClick={handleNavigation}
                >
                  {link.title}
                </Link>
                {link.children && (
                  <ChevronDown size={16} className="text-gray-500 transition-transform group-hover:rotate-180" />
                )}
              </div>
              
              {link.children && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.children.map(childLink => (
                      <Link 
                        key={childLink.title} 
                        to={childLink.path} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-campus-teal hover:text-white" 
                        onClick={handleNavigation}
                      >
                        {childLink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile Navigation Button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-campus-primary h-8 w-8 sm:h-10 sm:w-10">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-campus-primary" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] p-0 bg-gray-900 text-white border-gray-800">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg sm:text-xl text-lime-500">Menu</span>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto p-4">
                  <ul className="space-y-4">
                    {navLinks.map((link, index) => (
                      <li key={index} className="pb-2">
                        <Link 
                          to={link.path} 
                          className="text-base sm:text-lg font-medium text-lime-300 hover:text-lime-100"
                          onClick={handleNavigation}
                        >
                          {link.title}
                        </Link>
                        {link.children && (
                          <ul className="mt-2 ml-4 space-y-1 border-l-2 border-gray-700 pl-4">
                            {link.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link 
                                  to={child.path} 
                                  className="text-sm text-gray-300 hover:text-lime-300 block py-1"
                                  onClick={handleNavigation}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t border-gray-800">
                  <Link 
                    to="/portal" 
                    className="block w-full py-2 px-4 bg-lime-700 hover:bg-lime-600 text-white font-medium rounded text-center text-sm sm:text-base" 
                    onClick={handleNavigation}
                  >
                    Portal Login
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div>
            <Link 
              to="/portal" 
              className="bg-campus-primary text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-campus-dark transition-colors hover:scale-105 transform duration-200 text-xs sm:text-sm lg:text-base hidden sm:block" 
              onClick={handleNavigation}
            >
              Portal Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
