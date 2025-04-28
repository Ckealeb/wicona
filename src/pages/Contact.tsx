import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LocationMap from "@/components/map/LocationMap";
import { MapPin, Phone, Mail } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Contact Witts College Namulada</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="p-6 rounded-lg shadow-sm border border-green-100 bg-lime-200">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Location</h2>
                <address className="not-italic text-gray-600 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 text-green-600" size={18} />
                    <div>
                      <p>Witts College Namulada</p>
                      <p>Wakiso, Uganda</p>
                      <p>Postal Address: P.O. Box </p>
                      <p>Campus Location: Along Entebbe Road</p>
                    </div>
                  </div>
                </address>
              </div>
              
              <div className="p-6 rounded-lg shadow-sm border border-green-100 bg-lime-200">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Contact Information</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-600" size={18} />
                    <p>Phone: (123) 456-7890</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-green-600" size={18} />
                    <div>
                      <p>Email: info@wittscollege.edu</p>
                      <p>Admissions: admissions@wittscollege.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 rounded-lg shadow-sm border border-green-100 bg-lime-200">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Find Us on the Map</h2>
                <LocationMap />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;