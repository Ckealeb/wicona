
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 bg-lime-600 relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/2113b2de-a57a-48a0-9f96-393b1fd91b21.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="campus-container text-center relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white mb-4 sm:mb-6">
            Join Our Campus Community
          </h2>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            Be part of a vibrant, inclusive learning environment where students come together to grow, learn, and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              to="/admissions" 
              className="btn-accent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto text-center"
            >
              Apply for Admission
            </Link>
            <Link 
              to="/about/virtual-tour" 
              className="bg-white text-campus-teal px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Take a Virtual Tour
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-lime-600/70" />
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/2113b2de-a57a-48a0-9f96-393b1fd91b21.png" 
          alt="Wits College Community" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </section>
  );
};

export default CallToAction;
