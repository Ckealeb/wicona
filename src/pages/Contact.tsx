
import React from "react";
import LocationMap from "@/components/map/LocationMap";
import { MapPin, Phone, Mail, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <main className="flex-grow">
        <div className="campus-container py-16">
          <h1 className="section-title">Contact Wits College Namulada</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="p-6 rounded-lg shadow-sm border border-green-100 bg-lime-200">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Location</h2>
                <address className="not-italic text-gray-600 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 text-green-600" size={18} />
                    <div>
                      <p>Wits College Namulada</p>
                      <p>Wakiso, Uganda</p>
                      <p>Postal Address: P.O. Box </p>
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
              
              <div className="p-6 rounded-lg shadow-sm border border-green-100 bg-lime-200">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Connect With Us</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="https://twitter.com/wittscollege" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-campus-blue text-white rounded-lg hover:bg-opacity-90 transition-all">
                    <Twitter size={20} />
                    <span>X (Twitter)</span>
                  </a>
                  <a href="https://instagram.com/wittscollege" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:bg-opacity-90 transition-all">
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                  <a href="https://tiktok.com/@wittscollege" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-lg hover:bg-opacity-90 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
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
    </div>
  );
};

export default Contact;
