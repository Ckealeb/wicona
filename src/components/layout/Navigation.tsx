import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, MoreVertical, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToTop } from "@/utils/scrollUtils";
interface NavLink {
  title: string;
  path: string;
  children?: NavLink[];
}
const navLinks: NavLink[] = [{
  title: "Home",
  path: "/"
}, {
  title: "About Us",
  path: "/about",
  children: [{
    title: "Overview",
    path: "/about"
  }, {
    title: "Leadership",
    path: "/about/leadership"
  }, {
    title: "Virtual Tour",
    path: "/about/virtual-tour"
  }, {
    title: "Media Gallery",
    path: "/about/gallery"
  }, {
    title: "Student Life",
    path: "/student-life"
  }]
}, {
  title: "Academics",
  path: "/academics",
  children: [{
    title: "Curriculum",
    path: "/academics/curriculum"
  }, {
    title: "E-Learning Hub",
    path: "/academics/elearning"
  }, {
    title: "Homework & Exams",
    path: "/academics/homework-exams"
  }, {
    title: "Calendar",
    path: "/calendar"
  }]
}, {
  title: "Admissions",
  path: "/admissions"
}, {
  title: "Contact",
  path: "/contact"
}];
const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    scrollToTop();
    setActiveDropdown(null); // Close dropdown after navigation
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Function to handle back navigation
  const handleBackNavigation = () => {
    navigate(-1);
    scrollToTop();
  };

  // Handle scroll events for dynamic color change
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);
  return <header className="sticky top-0 z-50 header-glass shadow-neon transition-colors duration-300 w-full">
      <div className="bg-emerald-400/20 text-emerald-900 text-center py-1 sm:py-2 transition-colors duration-300 w-full backdrop-blur-sm">
        <p className="text-xs font-medium px-2 font-orbitron text-gray-50 sm:text-sm">
          Registration open for 2025 academic year! 
          <Link to="/admissions" className="underline font-bold ml-1 hover:text-emerald-700 transition-colors" onClick={handleNavigation}>
            Apply now
          </Link>
        </p>
      </div>
      
      <nav className="w-full px-4 md:px-6 lg:px-8 xl:px-12 flex items-center justify-between py-2 sm:py-4 transition-colors duration-300">
        <div className="flex items-center space-x-3">
          {/* Back Navigation Button */}
          <Button onClick={handleBackNavigation} variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-transparent border-none hover:bg-white/10 p-0 transition-colors">
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            <span className="sr-only">Go Back</span>
          </Button>

          {/* School Logo and Name */}
          <Link to="/" className="group transition-all duration-300" onClick={handleNavigation}>
            <div className="relative flex items-center">
              <img src="/lovable-uploads/9eedf15d-5ada-4d69-9fdf-f24c232b197c.png" alt="Wits College Namulanda" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain transition-transform group-hover:scale-105" />
              <div className="ml-2 sm:ml-3 flex flex-col items-start">
                <span className="font-times tracking-wide text-sm sm:text-base lg:text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-emerald-200">
                  WITS COLLEGE
                </span>
                <span className="tracking-widest text-xs sm:text-sm lg:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
                  NAMULANDA
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div ref={dropdownRef} className="hidden lg:flex items-center space-x-6 xl:space-x-8 transition-colors duration-300">
          {navLinks.map(link => <div key={link.title} className="relative">
              <div className="flex items-center space-x-1">
                <Link to={link.path} className="text-white hover:text-emerald-200 transition-colors text-sm xl:text-base font-orbitron font-medium" onClick={handleNavigation}>
                  {link.title}
                </Link>
                {link.children && <button onClick={() => toggleDropdown(link.title)} className="p-1 text-white hover:text-emerald-200 transition-colors">
                    <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === link.title ? 'rotate-180' : ''}`} />
                  </button>}
              </div>
              
              {link.children && activeDropdown === link.title && <div className="absolute left-0 mt-2 w-48 glass-effect rounded-md shadow-neon border border-emerald-400/30 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                  <div className="py-1">
                    {link.children.map(childLink => <Link key={childLink.title} to={childLink.path} className="block px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-500/20 hover:text-emerald-100 transition-colors font-orbitron" onClick={handleNavigation}>
                        {childLink.title}
                      </Link>)}
                  </div>
                </div>}
            </div>)}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile Navigation Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-transparent border-none hover:bg-transparent p-0">
                <MoreVertical className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] p-0 bg-slate-900/90 text-white border-emerald-400/30 backdrop-blur-md">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src="/lovable-uploads/9eedf15d-5ada-4d69-9fdf-f24c232b197c.png" alt="Wits College Namulanda" className="w-8 h-8 object-contain" />
                      <span className="font-bold text-lg sm:text-xl text-lime-500">WITS COLLEGE</span>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto p-4">
                  <ul className="space-y-4">
                    {navLinks.map((link, index) => <li key={index} className="pb-2">
                        <Link to={link.path} className="text-base sm:text-lg font-medium text-lime-300 hover:text-lime-100" onClick={handleNavigation}>
                          {link.title}
                        </Link>
                        {link.children && <ul className="mt-2 ml-4 space-y-1 border-l-2 border-gray-700 pl-4">
                            {link.children.map((child, childIndex) => <li key={childIndex}>
                                <Link to={child.path} className="text-sm text-gray-300 hover:text-lime-300 block py-1" onClick={handleNavigation}>
                                  {child.title}
                                </Link>
                              </li>)}
                          </ul>}
                      </li>)}
                  </ul>
                </nav>
                <div className="p-4 border-t border-gray-800">
                  <Link to="/portal" className="block w-full py-2 px-4 bg-lime-700 hover:bg-lime-600 text-white font-medium rounded text-center text-sm sm:text-base" onClick={handleNavigation}>
                    Portal Login
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div>
            <Link to="/portal" className="bg-emerald-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-emerald-500 transition-all hover:scale-105 transform duration-200 text-xs sm:text-sm lg:text-base hidden sm:block font-orbitron shadow-neon" onClick={handleNavigation}>
              Portal Login
            </Link>
          </div>
        </div>
      </nav>
    </header>;
};
export default Navigation;