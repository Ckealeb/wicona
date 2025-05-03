
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import Stats from "@/components/home/Stats";
import NewsEvents from "@/components/home/NewsEvents";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutSection />
        <Stats />
        <Testimonials />
        <NewsEvents />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
