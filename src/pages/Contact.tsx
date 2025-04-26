
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="campus-container py-16">
          <h1 className="section-title">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is under construction. Check back soon for more information about contacting Campus Digital Sphere.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
