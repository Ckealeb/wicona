
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Calendar, Users, Phone, Mail } from "lucide-react";

const ParentResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Parent Resources</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Supporting parents and guardians with comprehensive resources for student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <FileText className="mr-3 text-emerald-400" size={24} />
                  Academic Handbook
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Complete guide to our academic programs, policies, and procedures.
                </p>
                <button className="btn-primary flex items-center">
                  <Download size={16} className="mr-2" />
                  Download PDF
                </button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Calendar className="mr-3 text-emerald-400" size={24} />
                  Parent Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Stay updated with important dates, events, and parent meetings.
                </p>
                <button className="btn-secondary">View Calendar</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Users className="mr-3 text-emerald-400" size={24} />
                  Parent Portal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Access your child's grades, attendance, and school communications.
                </p>
                <button className="btn-accent">Login to Portal</button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-effect border-emerald-400/30">
              <CardHeader>
                <CardTitle className="text-emerald-100 font-orbitron">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-emerald-200">
                  <Phone className="mr-3 text-emerald-400" size={20} />
                  <div className="font-orbitron">
                    <p className="font-semibold">Main Office</p>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center text-emerald-200">
                  <Mail className="mr-3 text-emerald-400" size={20} />
                  <div className="font-orbitron">
                    <p className="font-semibold">Parent Coordinator</p>
                    <p>parents@witscollege.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30">
              <CardHeader>
                <CardTitle className="text-emerald-100 font-orbitron">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="block text-emerald-200 hover:text-emerald-400 transition-colors font-orbitron">
                  • Student Progress Reports
                </a>
                <a href="#" className="block text-emerald-200 hover:text-emerald-400 transition-colors font-orbitron">
                  • Fee Payment Portal
                </a>
                <a href="#" className="block text-emerald-200 hover:text-emerald-400 transition-colors font-orbitron">
                  • Transportation Information
                </a>
                <a href="#" className="block text-emerald-200 hover:text-emerald-400 transition-colors font-orbitron">
                  • School Policies
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentResources;
