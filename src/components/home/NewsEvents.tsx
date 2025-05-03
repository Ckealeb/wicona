import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const NewsEvents = () => {
  const newsItems = [{
    id: 1,
    title: "Campus Digital Sphere Wins Innovation Award",
    excerpt: "Our school has been recognized for its pioneering approach to digital education, winning the prestigious Educational Innovation Award 2025.",
    date: "April 15, 2025",
    link: "/news/innovation-award",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
  }, {
    id: 2,
    title: "New STEM Lab Opening Next Month",
    excerpt: "We're excited to announce the grand opening of our state-of-the-art STEM laboratory, equipped with the latest technology for hands-on learning.",
    date: "April 10, 2025",
    link: "/news/stem-lab-opening",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  }, {
    id: 3,
    title: "Annual Science Fair Winners Announced",
    excerpt: "Congratulations to all participants and winners of this year's Science Fair! The creativity and innovation displayed were truly impressive.",
    date: "April 5, 2025",
    link: "/news/science-fair-winners",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
  }];
  const events = [{
    id: 1,
    title: "Parent-Teacher Conference",
    date: "May 5, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "Main Campus",
    link: "/events/parent-teacher-conference"
  }, {
    id: 2,
    title: "Annual Sports Day",
    date: "May 12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Sports Complex",
    link: "/events/sports-day"
  }, {
    id: 3,
    title: "Virtual University Fair",
    date: "May 18, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Online (Zoom)",
    link: "/events/university-fair"
  }, {
    id: 4,
    title: "Summer Camp Registration",
    date: "May 25, 2025",
    time: "All Day",
    location: "Online Portal",
    link: "/events/summer-camp"
  }];
  return <section className="py-16 bg-yellow-200">
      <div className="campus-container">
        <h2 className="section-title text-center">Stay Connected</h2>
        <p className="section-subtitle text-center">
          Keep up with the latest news, events, and happenings at Campus Digital Sphere
        </p>

        <Tabs defaultValue="news" className="mt-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-lime-400">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map(item => <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-campus-amber text-campus-blue text-sm font-medium py-1 px-2 rounded">
                      {item.date}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      {item.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={item.link} className="text-campus-blue hover:text-campus-teal font-medium transition-colors">
                      Read more →
                    </Link>
                  </CardFooter>
                </Card>)}
            </div>
            <div className="text-center mt-8">
              <Link to="/news" className="btn-secondary">
                View All News
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {events.map((event, index) => <div key={event.id} className={`p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${index !== events.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-campus-blue">
                      {event.title}
                    </h3>
                    <div className="mt-2 text-gray-600 space-y-1">
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {event.date}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {event.time}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <Link to={event.link} className="btn-accent">
                    View Details
                  </Link>
                </div>)}
            </div>
            <div className="text-center mt-8">
              <Link to="/events" className="btn-secondary">
                View All Events
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};
export default NewsEvents;