import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
  }]
}, {
  title: "Admissions",
  path: "/admissions"
}, {
  title: "Student Life",
  path: "/student-life"
}, {
  title: "Contact",
  path: "/contact"
}];
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };
  return <header className="sticky top-0 z-50 bg-campus-light shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-campus-accent/20 text-campus-primary text-center py-2">
        <p className="text-sm font-medium">
          Registration open for 2025-2026 academic year! 
          <a href="/admissions" className="underline font-bold ml-1">Apply now</a>
        </p>
      </div>
      
      <nav className="campus-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="futuristic-logo">
          <img src="/lovable-uploads/01e3fda9-2cca-4e09-a3b8-fb1ac5e86e7b.png" alt="Witts College Namulada" className="w-12 h-12 object-contain" />
          <span className="futuristic-text ml-2 text-xl hidden md:block">
            Witts College Namulada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 bg-lime-50">
          {navLinks.map(link => <div key={link.title} className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer" onClick={() => link.children && toggleDropdown(link.title)}>
                <Link to={link.path} className="text-gray-700 hover:text-campus-blue transition-colors">
                  {link.title}
                </Link>
                {link.children && <ChevronDown size={16} className="text-gray-500" />}
              </div>
              
              {link.children && <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {link.children.map(childLink => <Link key={childLink.title} to={childLink.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-campus-teal hover:text-white">
                        {childLink.title}
                      </Link>)}
                  </div>
                </div>}
            </div>)}
        </div>

        {/* Quick Access Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/portal" className="bg-campus-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-campus-dark transition-colors">
            Portal Login
          </Link>
          <Link to="/calendar" className="text-campus-primary hover:text-campus-secondary transition-colors">
            Calendar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-campus-blue" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="lg:hidden bg-white shadow-lg">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map(link => <div key={link.title} className="py-2">
                <div className="flex items-center justify-between" onClick={() => link.children && toggleDropdown(link.title)}>
                  <Link to={link.path} className="text-gray-800 font-medium" onClick={() => !link.children && setMobileMenuOpen(false)}>
                    {link.title}
                  </Link>
                  {link.children && <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.title ? 'rotate-180' : ''}`} />}
                </div>
                
                {link.children && activeDropdown === link.title && <div className="mt-2 ml-4 space-y-2">
                    {link.children.map(childLink => <Link key={childLink.title} to={childLink.path} className="block py-1 text-gray-600 hover:text-campus-blue" onClick={() => setMobileMenuOpen(false)}>
                        {childLink.title}
                      </Link>)}
                  </div>}
              </div>)}

            <div className="pt-4 space-y-4 border-t border-gray-200">
              <Link to="/portal" className="block btn-secondary text-center">
                Portal Login
              </Link>
              <Link to="/calendar" className="block text-center text-campus-primary">
                Calendar
              </Link>
            </div>
          </div>
        </div>}
    </header>;
};
export default Navigation;