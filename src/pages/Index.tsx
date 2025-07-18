
import React from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import Stats from "@/components/home/Stats";
import NewsEvents from "@/components/home/NewsEvents";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <AboutSection />
      <Stats />
      <Testimonials />
      <NewsEvents />
      <CallToAction />
    </div>
  );
};

export default Index;
