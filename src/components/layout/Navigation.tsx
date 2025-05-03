
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

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
      }
    ]
  },
  {
    title: "Admissions",
    path: "/admissions"
  },
  {
    title: "Student Life",
    path: "/student-life"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-campus-light shadow-sm">
      <div className="bg-campus-accent/20 text-campus-primary text-center py-2">
        <p className="text-sm font-medium">
          Registration open for 2025-2026 academic year! 
          <a href="/admissions" className="underline font-bold ml-1">Apply now</a>
        </p>
      </div>
      
      <nav className="campus-container flex items-center justify-between py-4 bg-lime-400">
        <Link to="/" className="group border-4 border-double border-campus-primary rounded-lg p-1">
          <div className="relative flex items-center">
            <img src="/lovable-uploads/01e3fda9-2cca-4e09-a3b8-fb1ac5e86e7b.png" alt="Witts College Namulada" className="w-16 h-16 object-contain transition-transform group-hover:scale-105" />
            <div className="ml-3 flex flex-col items-start">
              <span className="font-times tracking-wide text-lg font-extrabold text-lime-950">WITS COLLEGE</span>
              <span className="tracking-widest text-lg font-semibold text-lime-700">NAMULANDA</span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8 bg-lime-400">
          {navLinks.map(link => (
            <div key={link.title} className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer" onClick={() => link.children && toggleDropdown(link.title)}>
                <Link to={link.path} className="text-gray-700 hover:text-campus-blue transition-colors">
                  {link.title}
                </Link>
                {link.children && <ChevronDown size={16} className="text-gray-500" />}
              </div>
              
              {link.children && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {link.children.map(childLink => (
                      <Link 
                        key={childLink.title} 
                        to={childLink.path} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-campus-teal hover:text-white"
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

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/portal" className="bg-campus-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-campus-dark transition-colors">
            Portal Login
          </Link>
          <Link to="/calendar" className="text-campus-primary hover:text-campus-secondary transition-colors">
            Calendar
          </Link>
        </div>

        <button className="lg:hidden text-campus-blue" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg fixed right-0 top-[104px] h-screen w-1/4 overflow-y-auto">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map(link => (
              <div key={link.title} className="py-2">
                <div 
                  className="flex items-center justify-between hover:bg-lime-100 p-2 rounded-md transition-colors" 
                  onClick={() => link.children && toggleDropdown(link.title)}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-800 font-medium w-full" 
                    onClick={() => !link.children && setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.children && (
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform ${activeDropdown === link.title ? 'rotate-180' : ''}`} 
                    />
                  )}
                </div>
                
                {link.children && activeDropdown === link.title && (
                  <div className="mt-2 ml-4 space-y-2 bg-lime-50 rounded-md p-2">
                    {link.children.map(childLink => (
                      <Link 
                        key={childLink.title} 
                        to={childLink.path} 
                        className="block py-1 text-gray-600 hover:text-campus-blue hover:bg-lime-100 p-2 rounded-md transition-colors" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {childLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 space-y-4 border-t border-gray-200">
              <Link to="/portal" className="block btn-secondary text-center p-2 hover:bg-lime-100 rounded-md transition-colors">
                Portal Login
              </Link>
              <Link to="/calendar" className="block text-center text-campus-primary p-2 hover:bg-lime-100 rounded-md transition-colors">
                Calendar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
