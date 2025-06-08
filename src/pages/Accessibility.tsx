
import React from "react";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Accessibility Statement</h1>
          
          <div className="prose max-w-none bg-white rounded-lg p-8 shadow-sm">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Our Commitment</h2>
              <p className="text-gray-700">
                Wits College Namulanda is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Accessibility Standards</h2>
              <p className="text-gray-700 mb-4">
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines help make web content more accessible to people with disabilities, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Visual impairments and blindness</li>
                <li>Hearing impairments and deafness</li>
                <li>Motor disabilities and physical impairments</li>
                <li>Cognitive disabilities and learning differences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Clear navigation structure and consistent layout</li>
                <li>Alternative text for images and graphics</li>
                <li>Keyboard navigation support</li>
                <li>High contrast color schemes</li>
                <li>Resizable text without loss of functionality</li>
                <li>Descriptive headings and labels</li>
                <li>Screen reader compatibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Campus Accessibility Services</h2>
              <p className="text-gray-700 mb-4">
                We provide comprehensive accessibility services for students with disabilities:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Academic accommodations and support services</li>
                <li>Assistive technology resources</li>
                <li>Accessible campus facilities and transportation</li>
                <li>Sign language interpretation services</li>
                <li>Alternative format materials (Braille, large print, digital)</li>
                <li>Testing accommodations</li>
                <li>Note-taking assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Physical Accessibility</h2>
              <p className="text-gray-700 mb-4">Our campus facilities include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Wheelchair accessible entrances and pathways</li>
                <li>Accessible restrooms and facilities</li>
                <li>Elevator access to all floors</li>
                <li>Accessible parking spaces</li>
                <li>Audio-visual equipment in classrooms</li>
                <li>Adjustable desks and seating options</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Requesting Accommodations</h2>
              <p className="text-gray-700 mb-4">
                Students who need accessibility accommodations should contact our Disability Services Office:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Disability Services Office</h4>
                <p className="text-gray-700">Location: Main Administration Building, Room 105</p>
                <p className="text-gray-700">Phone: (123) 456-7890 ext. 2050</p>
                <p className="text-gray-700">Email: disability.services@witscollege.edu</p>
                <p className="text-gray-700">Office Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Feedback and Support</h2>
              <p className="text-gray-700 mb-4">
                We welcome feedback on the accessibility of our website and services. If you encounter any barriers 
                or have suggestions for improvement, please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Email: accessibility@witscollege.edu</li>
                <li>Phone: (123) 456-7890</li>
                <li>Mail: Accessibility Coordinator, Wits College Namulanda, Wakiso, Uganda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700">
                We are continuously working to improve accessibility across all our digital platforms and physical spaces. 
                Regular accessibility audits are conducted, and we actively seek feedback from our community to identify 
                areas for enhancement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Alternative Access</h2>
              <p className="text-gray-700">
                If you cannot access certain content or features on our website, please contact us immediately. 
                We will work to provide you with the information or services you need in an alternative format.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accessibility;
