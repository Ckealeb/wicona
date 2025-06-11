
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Clock, MapPin, Send } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Computer Science Teacher",
      department: "Academic Department",
      type: "Full-time",
      location: "Namulanda Campus",
      description: "Seeking experienced educator to teach programming and computer science concepts."
    },
    {
      title: "Mathematics Lecturer",
      department: "Academic Department", 
      type: "Full-time",
      location: "Namulanda Campus",
      description: "Join our mathematics department to inspire the next generation of problem solvers."
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time", 
      location: "Namulanda Campus",
      description: "Support daily operations and provide excellent service to students and staff."
    },
    {
      title: "IT Support Specialist",
      department: "Information Technology",
      type: "Part-time",
      location: "Namulanda Campus", 
      description: "Maintain and support campus technology infrastructure and user support."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Career Opportunities</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Join our team of dedicated professionals shaping the future of education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Users className="mr-3 text-emerald-400" size={24} />
                  Why Work With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-emerald-200 font-orbitron">
                  <li>• Competitive compensation</li>
                  <li>• Professional development</li>
                  <li>• Collaborative environment</li>
                  <li>• Modern facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Briefcase className="mr-3 text-emerald-400" size={24} />
                  Benefits Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-emerald-200 font-orbitron">
                  <li>• Health insurance</li>
                  <li>• Retirement savings</li>
                  <li>• Paid time off</li>
                  <li>• Training opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Send className="mr-3 text-emerald-400" size={24} />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Submit your application online with resume and cover letter.
                </p>
                <button className="btn-accent">Apply Now</button>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-100 font-orbitron mb-6">Current Openings</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="glass-effect border-emerald-400/30">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-emerald-100 font-orbitron">{position.title}</CardTitle>
                        <p className="text-emerald-300 font-orbitron">{position.department}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-emerald-200 mb-1">
                          <Clock className="mr-1 text-emerald-400" size={16} />
                          <span className="font-orbitron">{position.type}</span>
                        </div>
                        <div className="flex items-center text-emerald-200">
                          <MapPin className="mr-1 text-emerald-400" size={16} />
                          <span className="font-orbitron">{position.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-emerald-200 mb-4 font-orbitron">{position.description}</p>
                    <div className="flex gap-3">
                      <button className="btn-primary">View Details</button>
                      <button className="btn-secondary">Apply Now</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-effect border-emerald-400/30">
            <CardHeader>
              <CardTitle className="text-emerald-100 font-orbitron">Don't See Your Perfect Role?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-200 mb-4 font-orbitron">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="btn-accent">Submit General Application</button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Careers;
