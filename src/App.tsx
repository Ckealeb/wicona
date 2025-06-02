
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import StudentLife from "@/pages/StudentLife";
import NotFound from "@/pages/NotFound";

import Leadership from "@/pages/about/Leadership";
import VirtualTour from "@/pages/about/VirtualTour";
import Gallery from "@/pages/about/Gallery";

import Curriculum from "@/pages/academics/Curriculum";
import ELearning from "@/pages/academics/ELearning";
import HomeworkExams from "@/pages/academics/HomeworkExams";
import Calendar from "@/pages/academics/Calendar";
import { scrollToTop } from "@/utils/scrollUtils";

import "./App.css";

const queryClient = new QueryClient();

// This component handles scrolling to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    // Always scroll to top on new navigation
    scrollToTop();
  }, [pathname, navigationType]);
  
  return null;
};

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/virtual-tour" element={<VirtualTour />} />
          <Route path="/about/gallery" element={<Gallery />} />
          
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/elearning" element={<ELearning />} />
          <Route path="/academics/homework-exams" element={<HomeworkExams />} />
          <Route path="/calendar" element={<Calendar />} />
          
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-life" element={<StudentLife />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen w-full">
          <AppRoutes />
        </div>
        <Toaster />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
