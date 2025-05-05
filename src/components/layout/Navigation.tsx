
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

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
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };
  
  return <header className="sticky top-0 z-50 bg-campus-light shadow-sm dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="bg-campus-accent/20 text-campus-primary text-center py-2 dark:bg-gray-800 dark:text-lime-300 transition-colors duration-300">
        <p className="text-sm font-medium">
          Registration open for 2025 academic year! 
          <Link to="/admissions" className="underline font-bold ml-1">Apply now</Link>
        </p>
      </div>
      
      <nav className="campus-container flex items-center justify-between py-4 bg-lime-400 dark:bg-gray-900 transition-colors duration-300">
        <Link to="/" className="group border-4 border-double border-campus-primary rounded-lg p-1 dark:border-lime-500">
          <div className="relative flex items-center">
            <img src="/lovable-uploads/01e3fda9-2cca-4e09-a3b8-fb1ac5e86e7b.png" alt="Witts College Namulada" className="w-16 h-16 object-contain transition-transform group-hover:scale-105" />
            <div className="ml-3 flex flex-col items-start">
              <span className="font-times tracking-wide text-lg font-extrabold text-lime-950 dark:text-lime-300">WITS COLLEGE</span>
              <span className="tracking-widest text-lg font-semibold text-lime-700 dark:text-lime-500">NAMULANDA</span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8 bg-lime-400 dark:bg-gray-900 transition-colors duration-300">
          {navLinks.map(link => <div key={link.title} className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link to={link.path} className="text-gray-700 hover:text-campus-blue transition-colors dark:text-gray-200 dark:hover:text-lime-300" onClick={() => link.children && toggleDropdown(link.title)}>
                  {link.title}
                </Link>
                {link.children && <ChevronDown size={16} className="text-gray-500 transition-transform group-hover:rotate-180 dark:text-gray-300" />}
              </div>
              
              {link.children && <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 dark:bg-gray-800">
                  <div className="py-1">
                    {link.children.map(childLink => <Link key={childLink.title} to={childLink.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-campus-teal hover:text-white dark:text-gray-200 dark:hover:bg-lime-700">
                        {childLink.title}
                      </Link>)}
                  </div>
                </div>}
            </div>)}
        </div>

        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Toggle 
            pressed={theme === "dark"} 
            onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
            className="bg-transparent hover:bg-transparent border-0"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </Toggle>

          <div className="hidden lg:block">
            <Link to="/portal" className="bg-campus-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-campus-dark transition-colors hover:scale-105 transform duration-200 dark:bg-lime-700 dark:hover:bg-lime-600">
              Portal Login
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <Link to="/portal" className="bg-campus-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-campus-dark transition-colors text-sm dark:bg-lime-700 dark:hover:bg-lime-600">
              Portal Login
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-campus-blue dark:text-lime-400">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[50%] dark:bg-gray-900 dark:text-white">
                <div className="py-4 space-y-4">
                  {navLinks.map(link => <div key={link.title} className="py-2">
                      <div 
                        className="flex items-center justify-between hover:bg-lime-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors cursor-pointer"
                        onClick={() => link.children && toggleDropdown(link.title)}
                      >
                        <Link to={link.path} className="text-gray-800 font-medium w-full dark:text-gray-200">
                          {link.title}
                        </Link>
                        {link.children && <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.title ? 'rotate-180' : ''} dark:text-gray-400`} />}
                      </div>
                      
                      {link.children && activeDropdown === link.title && <div className="mt-2 ml-4 space-y-2 bg-lime-50 dark:bg-gray-800 rounded-md p-2">
                          {link.children.map(childLink => <Link key={childLink.title} to={childLink.path} className="block py-1 text-gray-600 hover:text-campus-blue hover:bg-lime-100 dark:text-gray-300 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
                              {childLink.title}
                            </Link>)}
                        </div>}
                    </div>)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>;
};

export default Navigation;
