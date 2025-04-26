
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="campus-container py-16">
          <h1 className="section-title">Contact Witts College Namulada</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Witts College Namulada</p>
                <p>Bungoma County, Kenya</p>
                <p>Postal Address: P.O. Box 123-50200</p>
                <p>Campus Location: Off Bungoma-Webuye Road</p>
              </address>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-600 mb-2">Email: info@wittscollege.edu</p>
              <p className="text-gray-600 mb-4">Admissions: admissions@wittscollege.edu</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
