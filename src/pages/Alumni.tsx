
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Network, Calendar, Award, Users, Mail } from "lucide-react";

const Alumni = () => {
  const featuredAlumni = [
    {
      name: "John Mukasa",
      year: "2018",
      position: "Software Engineer at Microsoft",
      achievement: "Led development of innovative cloud solutions"
    },
    {
      name: "Sarah Namata",
      year: "2019", 
      position: "Data Scientist at Google",
      achievement: "Published research on AI applications"
    },
    {
      name: "David Ssemakula",
      year: "2020",
      position: "Entrepreneur & Tech Startup Founder",
      achievement: "Founded successful fintech company"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow section-bg">
        <div className="campus-container py-16">
          <h1 className="section-title">Alumni Network</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-emerald-200 font-orbitron text-center">
              Connect with our global community of successful graduates making impact worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Users className="mr-3 text-emerald-400" size={24} />
                  Join Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Connect with fellow graduates and expand your professional network.
                </p>
                <button className="btn-primary">Join Now</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Calendar className="mr-3 text-emerald-400" size={24} />
                  Alumni Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Attend reunions, networking events, and professional workshops.
                </p>
                <button className="btn-secondary">View Events</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <Award className="mr-3 text-emerald-400" size={24} />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Read inspiring stories of our graduates' achievements and career paths.
                </p>
                <button className="btn-accent">Read Stories</button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-emerald-400/30 hover:shadow-neon transition-all duration-500 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-100 font-orbitron">
                  <GraduationCap className="mr-3 text-emerald-400" size={24} />
                  Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-200 mb-4 font-orbitron">
                  Give back by mentoring current students or receive guidance from experienced alumni.
                </p>
                <button className="btn-primary">Get Involved</button>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-100 font-orbitron mb-6">Featured Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredAlumni.map((alumni, index) => (
                <Card key={index} className="glass-effect border-emerald-400/30">
                  <CardHeader>
                    <CardTitle className="text-emerald-100 font-orbitron">{alumni.name}</CardTitle>
                    <p className="text-emerald-300 font-orbitron">Class of {alumni.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-emerald-200 font-semibold mb-2 font-orbitron">{alumni.position}</p>
                    <p className="text-emerald-200 font-orbitron">{alumni.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-effect border-emerald-400/30">
            <CardHeader>
              <CardTitle className="text-emerald-100 font-orbitron">Stay Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-200 mb-3 font-orbitron">Alumni Relations Office</h4>
                  <div className="flex items-center mb-2 text-emerald-200">
                    <Mail className="mr-2 text-emerald-400" size={16} />
                    <span className="font-orbitron">alumni@witscollege.edu</span>
                  </div>
                  <p className="text-emerald-200 font-orbitron">
                    Contact us to update your information, share your achievements, or get involved with alumni activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-200 mb-3 font-orbitron">Alumni Directory</h4>
                  <p className="text-emerald-200 mb-4 font-orbitron">
                    Search for classmates and connect with fellow graduates in your field or location.
                  </p>
                  <button className="btn-secondary">Access Directory</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Alumni;
