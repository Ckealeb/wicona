
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Terms of Use</h1>
          
          <div className="prose max-w-none bg-white rounded-lg p-8 shadow-sm">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the Wits College Namulanda website and services, you accept and agree to be bound by 
                these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Use of Services</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Permitted Use</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access educational resources and information</li>
                <li>Submit applications and required documentation</li>
                <li>Communicate with faculty and staff</li>
                <li>Participate in online learning activities</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Use</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violating any laws or regulations</li>
                <li>Harassing, threatening, or intimidating others</li>
                <li>Sharing false or misleading information</li>
                <li>Attempting to gain unauthorized access to systems</li>
                <li>Using the services for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Student Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Maintain academic integrity and honesty</li>
                <li>Respect intellectual property rights</li>
                <li>Follow the student code of conduct</li>
                <li>Keep login credentials secure and confidential</li>
                <li>Report any suspicious or inappropriate activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                Wits College Namulanda or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p className="text-gray-700">
                Students retain ownership of their original work but grant the college permission to use student work 
                for educational and promotional purposes as outlined in the student handbook.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700">
                The services are provided "as is" without warranties of any kind. We do not guarantee that the services will be 
                uninterrupted, secure, or error-free. Use of the services is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                Wits College Namulanda shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of the services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Modifications</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with 
                an updated revision date. Continued use of the services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Use are governed by the laws of Uganda. Any disputes arising from these terms will be 
                resolved in the appropriate courts of Uganda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Use, please contact:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Wits College Namulanda</p>
                <p>Namulanda Campus, Wakiso, Uganda</p>
                <p>Email: legal@witscollege.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
