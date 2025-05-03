
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/about/Leadership";
import VirtualTour from "./pages/about/VirtualTour";
import Gallery from "./pages/about/Gallery";
import Academics from "./pages/Academics";
import Curriculum from "./pages/academics/Curriculum";
import ELearning from "./pages/academics/ELearning";
import HomeworkExams from "./pages/academics/HomeworkExams";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/academics/Calendar";

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
