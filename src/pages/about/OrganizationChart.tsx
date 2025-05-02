
import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { School } from "lucide-react";

const OrganizationChart = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-lime-700 py-12 text-white">
          <div className="campus-container">
            <h1 className="text-4xl font-playfair font-bold mb-4">Organization Structure</h1>
            <p className="text-lg max-w-3xl">
              Our organizational structure is designed to provide clear leadership and support
              for our students, faculty, and staff, ensuring effective management and educational excellence.
            </p>
          </div>
        </section>

        {/* Organization Chart Content */}
        <section className="py-16 bg-white">
          <div className="campus-container">
            <div className="mb-10 text-center">
              <h2 className="section-title">School Leadership Structure</h2>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                Our organizational structure promotes effective communication, responsibility, and 
                accountability across all levels of our institution.
              </p>
            </div>

            {/* Org Chart Visualization */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                {/* Board of Directors */}
                <div className="p-4 bg-lime-100 rounded-lg shadow-md border border-lime-300 mb-8 w-72 text-center">
                  <h3 className="font-bold text-lime-800">BOARD OF DIRECTORS / PROPRIETOR</h3>
                </div>

                {/* Arrow down */}
                <div className="h-8 w-px bg-lime-800"></div>

                {/* Chairman */}
                <div className="p-4 bg-lime-100 rounded-lg shadow-md border border-lime-300 mb-8 w-72 text-center">
                  <h3 className="font-bold text-lime-800">CHAIRMAN (BOG)</h3>
                </div>

                {/* Arrow down */}
                <div className="h-8 w-px bg-lime-800"></div>

                {/* Headteacher */}
                <div className="p-4 bg-lime-200 rounded-lg shadow-md border border-lime-300 mb-8 w-72 text-center">
                  <h3 className="font-bold text-lime-800">Mr. KAMOGA TADEO</h3>
                  <p className="text-lime-900">HEADTEACHER</p>
                </div>

                {/* Arrow down */}
                <div className="h-8 w-px bg-lime-800"></div>

                {/* Deans and Bursar Level */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
                  <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center">
                    <h3 className="font-bold text-lime-800">Mr. MONDAY MOSES</h3>
                    <p className="text-lime-900">Dean Of Studies</p>
                    <p className="text-lime-900">(Lower School)</p>
                  </div>
                  <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center">
                    <h3 className="font-bold text-lime-800">Mr. YOMBE PHILP KAGGWA</h3>
                    <p className="text-lime-900">Dean Of Studies</p>
                    <p className="text-lime-900">(Middle School)</p>
                  </div>
                  <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center">
                    <h3 className="font-bold text-lime-800">Mr. BEGGUMA FABIAN</h3>
                    <p className="text-lime-900">Dean Of Studies</p>
                    <p className="text-lime-900">(Upper School)</p>
                  </div>
                  <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center">
                    <h3 className="font-bold text-lime-800">Mrs. IMELDAH</h3>
                    <p className="text-lime-900">School Bursar</p>
                    <p className="text-lime-900">Accountant</p>
                  </div>
                </div>

                {/* Arrow down to two branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-px bg-lime-800"></div>
                    <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center w-64">
                      <h3 className="font-bold text-lime-800">Heads of Departments (HODs)</h3>
                      <p className="text-lime-900">(Sciences, Arts, Languages, etc.)</p>
                    </div>
                    <div className="h-8 w-px bg-lime-800"></div>
                    <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center w-64">
                      <h3 className="font-bold text-lime-800">Class Teachers</h3>
                    </div>
                    <div className="h-8 w-px bg-lime-800"></div>
                    <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center w-64">
                      <h3 className="font-bold text-lime-800">Subject Teachers</h3>
                    </div>
                    <div className="h-8 w-px bg-lime-800"></div>
                    <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center w-64">
                      <h3 className="font-bold text-lime-800">Other Support Staff</h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-px bg-lime-800"></div>
                    <div className="p-4 bg-lime-50 rounded-lg shadow-sm border border-lime-200 text-center w-64">
                      <h3 className="font-bold text-lime-800">Finance Clerk</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-lime-800 mb-4 flex items-center">
                <School className="mr-2" />
                School Leadership
              </h3>
              <p className="text-gray-700 mb-6">
                Our school leadership team works collaboratively to provide the best educational
                experience for our students. The organizational structure ensures clear communication
                channels and well-defined responsibilities at every level.
              </p>
              <p className="text-gray-700">
                Each role in our organizational structure plays a vital part in contributing to
                our mission of delivering quality education and fostering a supportive learning environment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrganizationChart;
