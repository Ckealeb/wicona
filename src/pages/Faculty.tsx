
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Award, BookOpen, Users } from "lucide-react";

const Faculty = () => {
  const departments = [
    {
      name: "Computer Science",
      head: "Dr. Sarah Johnson",
      email: "s.johnson@witscollege.edu",
      staff: ["Prof. Michael Chen", "Dr. Emily Rodriguez", "Mr. David Kim"]
    },
    {
      name: "Mathematics",
      head: "Prof. Robert Wilson",
      email: "r.wilson@witscollege.edu", 
      staff: ["Dr. Lisa Thompson", "Ms. Anna Martinez", "Mr. James Brown"]
    },
    {
      name: "Sciences",
      head: "Dr. Maria Garcia",
      email: "m.garcia@witscollege.edu",
      staff: ["Prof. John Davis", "Dr. Rachel Green", "Ms. Sophie Clark"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Faculty & Staff</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Meet our dedicated team of educators and staff committed to student excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Award className="mr-3 text-emerald-400" size={24} />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Our experienced leadership guides the institution towards excellence.
                </p>
                <button className="btn-primary">Meet Leadership</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <BookOpen className="mr-3 text-emerald-400" size={24} />
                  Academic Faculty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Qualified professors and lecturers across all academic departments.
                </p>
                <button className="btn-secondary">View Faculty</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Users className="mr-3 text-emerald-400" size={24} />
                  Support Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Administrative and support staff ensuring smooth operations.
                </p>
                <button className="btn-accent">Contact Staff</button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-100 font-orbitron mb-6">Academic Departments</h2>
            
            {departments.map((dept, index) => (
              <Card key={index} className="glass-effect border-emerald-400/30">
                <CardHeader>
                  <CardTitle className="text-emerald-100 font-orbitron">{dept.name} Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-200 mb-2 font-orbitron">Department Head</h4>
                      <p className="text-emerald-100 font-orbitron">{dept.head}</p>
                      <div className="flex items-center mt-2 text-emerald-200">
                        <Mail className="mr-2 text-emerald-400" size={16} />
                        <span className="font-orbitron">{dept.email}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-200 mb-2 font-orbitron">Faculty Members</h4>
                      <ul className="space-y-1">
                        {dept.staff.map((member, idx) => (
                          <li key={idx} className="text-emerald-100 font-orbitron">{member}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faculty;
