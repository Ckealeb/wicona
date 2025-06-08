
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-green-50">
        <div className="campus-container py-16">
          <h1 className="section-title">Privacy Policy</h1>
          
          <div className="prose max-w-none bg-white rounded-lg p-8 shadow-sm">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Wits College Namulanda ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how your personal information is collected, used, and disclosed by Wits College Namulanda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Academic records and transcripts</li>
                <li>Financial information for tuition and fees</li>
                <li>Emergency contact information</li>
                <li>Medical information when necessary for student services</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide educational services and support</li>
                <li>To process applications and enrollment</li>
                <li>To communicate important academic and administrative information</li>
                <li>To improve our services and website functionality</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To ensure campus safety and security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>When required by law or legal process</li>
                <li>To protect the rights, property, or safety of the college or others</li>
                <li>With service providers who assist in our operations</li>
                <li>With accrediting bodies and government agencies as required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-campus-blue mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Wits College Namulanda</p>
                <p>Namulanda Campus, Wakiso, Uganda</p>
                <p>Email: privacy@witscollege.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
