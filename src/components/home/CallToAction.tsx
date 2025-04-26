import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-16 bg-lime-600">
      <div className="campus-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Join Our Campus Community
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience education reimagined for the digital age. Apply now for the upcoming academic year or schedule a campus tour to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="btn-accent">
              Apply for Admission
            </Link>
            <Link to="/about/virtual-tour" className="bg-white text-campus-teal px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
              Take a Virtual Tour
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;