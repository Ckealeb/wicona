
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  title: string;
  path: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  { title: "Home", path: "/" },
  { 
    title: "About Us", 
    path: "/about", 
    children: [
      { title: "Overview", path: "/about" },
      { title: "Leadership", path: "/about/leadership" },
      { title: "Virtual Tour", path: "/about/virtual-tour" },
      { title: "Media Gallery", path: "/about/gallery" },
    ]
  },
  { 
    title: "Academics", 
    path: "/academics",
    children: [
      { title: "Curriculum", path: "/academics/curriculum" },
      { title: "E-Learning Hub", path: "/academics/elearning" },
      { title: "Homework & Exams", path: "/academics/homework-exams" },
    ] 
  },
  { title: "Admissions", path: "/admissions" },
  { title: "Student Life", path: "/student-life" },
  { title: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement Bar */}
      <div className="announcement-bar text-center">
        <p className="text-sm font-medium">Registration open for 2025-2026 academic year! <a href="/admissions" className="underline font-bold">Apply now</a></p>
      </div>
      
      <nav className="campus-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-campus-blue flex items-center justify-center">
            <span className="text-white font-playfair font-bold text-xl">C</span>
          </div>
          <span className="text-campus-blue font-playfair font-bold text-xl hidden md:block">Campus Digital Sphere</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => link.children && toggleDropdown(link.title)}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-campus-blue transition-colors"
                >
                  {link.title}
                </Link>
                {link.children && (
                  <ChevronDown size={16} className="text-gray-500" />
                )}
              </div>
              
              {link.children && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {link.children.map((childLink) => (
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

        {/* Quick Access Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/portal" className="btn-secondary">Portal Login</Link>
          <Link to="/calendar" className="text-campus-blue hover:text-campus-teal transition-colors">Calendar</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-campus-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.title} className="py-2">
                <div 
                  className="flex items-center justify-between"
                  onClick={() => link.children && toggleDropdown(link.title)}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-800 font-medium"
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
                  <div className="mt-2 ml-4 space-y-2">
                    {link.children.map((childLink) => (
                      <Link
                        key={childLink.title}
                        to={childLink.path}
                        className="block py-1 text-gray-600 hover:text-campus-blue"
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
              <Link to="/portal" className="block btn-secondary text-center">
                Portal Login
              </Link>
              <Link to="/calendar" className="block text-center text-campus-blue">
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
