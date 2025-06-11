
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, Book, Download } from "lucide-react";

const Policies = () => {
  const policyCategories = [
    {
      title: "Academic Policies",
      icon: <Book className="text-emerald-400" size={24} />,
      policies: [
        "Grading and Assessment Policy",
        "Academic Integrity Policy", 
        "Attendance Requirements",
        "Course Registration Guidelines",
        "Academic Probation Policy"
      ]
    },
    {
      title: "Student Conduct",
      icon: <Users className="text-emerald-400" size={24} />,
      policies: [
        "Student Code of Conduct",
        "Disciplinary Procedures",
        "Anti-Bullying Policy",
        "Dress Code Guidelines",
        "Social Media Policy"
      ]
    },
    {
      title: "Safety & Security",
      icon: <Shield className="text-emerald-400" size={24} />,
      policies: [
        "Campus Safety Procedures",
        "Emergency Response Plan",
        "Visitor Access Policy",
        "Health and Safety Guidelines",
        "Data Protection Policy"
      ]
    },
    {
      title: "Administrative",
      icon: <FileText className="text-emerald-400" size={24} />,
      policies: [
        "Admission Requirements",
        "Fee Payment Policy",
        "Refund Policy",
        "Transfer Credit Policy",
        "Graduation Requirements"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Policies & Guidelines</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Important policies and guidelines that govern our academic community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {policyCategories.map((category, index) => (
              <Card key={index} className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                    {category.icon}
                    <span className="ml-3">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.policies.map((policy, idx) => (
                      <li key={idx} className="flex items-center justify-between text-emerald-200 hover:text-emerald-400 transition-colors">
                        <span className="font-orbitron">{policy}</span>
                        <button className="text-emerald-400 hover:text-emerald-300">
                          <Download size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-effect border-emerald-400/30">
              <CardHeader>
                <CardTitle className="text-emerald-100 font-orbitron">Student Handbook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Comprehensive guide containing all essential policies, procedures, and guidelines for students.
                </p>
                <button className="btn-primary flex items-center">
                  <Download size={16} className="mr-2" />
                  Download Handbook
                </button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30">
              <CardHeader>
                <CardTitle className="text-emerald-100 font-orbitron">Faculty Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Professional standards and guidelines for faculty members and staff.
                </p>
                <button className="btn-secondary flex items-center">
                  <Download size={16} className="mr-2" />
                  Download Guidelines
                </button>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect border-emerald-400/30">
            <CardHeader>
              <CardTitle className="text-emerald-100 font-orbitron">Policy Updates & Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-200 mb-4 font-orbitron">
                Stay informed about policy changes and updates. All community members will be notified of any modifications to existing policies.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-900/20 rounded border border-emerald-400/30">
                  <p className="text-emerald-200 font-orbitron">
                    <strong>Latest Update:</strong> Revised Academic Integrity Policy - Effective January 2025
                  </p>
                </div>
                <div className="p-3 bg-emerald-900/20 rounded border border-emerald-400/30">
                  <p className="text-emerald-200 font-orbitron">
                    <strong>New Policy:</strong> Remote Learning Guidelines - Added December 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Policies;
