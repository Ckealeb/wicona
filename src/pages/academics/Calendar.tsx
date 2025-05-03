
import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { CalendarCheck, CalendarClock, Info, BookOpen } from "lucide-react";

const SchoolCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  // Term dates for Uganda's school calendar (2025)
  const schoolTerms = {
    "2025": [
      {
        term: "Term 1",
        startDate: "February 3, 2025",
        endDate: "May 9, 2025",
        holidays: [
          { name: "Women's Day", date: "March 8, 2025" },
          { name: "Easter Holiday", date: "April 18-21, 2025" },
          { name: "Labor Day", date: "May 1, 2025" }
        ],
        events: [
          { name: "School Opening Day", date: "February 3, 2025" },
          { name: "Mid-Term Break", date: "March 17-21, 2025" },
          { name: "Inter-House Sports Competition", date: "April 10, 2025" },
          { name: "End of Term 1 Exams", date: "April 28 - May 9, 2025" }
        ]
      },
      {
        term: "Term 2",
        startDate: "May 26, 2025",
        endDate: "August 29, 2025",
        holidays: [
          { name: "Martyrs' Day", date: "June 3, 2025" },
          { name: "Heroes' Day", date: "June 9, 2025" },
          { name: "Eid al-Adha*", date: "June 16, 2025" }
        ],
        events: [
          { name: "School Opening Day", date: "May 26, 2025" },
          { name: "Mid-Term Break", date: "July 7-11, 2025" },
          { name: "National Schools Music Festival", date: "July 24-25, 2025" },
          { name: "End of Term 2 Exams", date: "August 18-29, 2025" }
        ]
      },
      {
        term: "Term 3",
        startDate: "September 15, 2025",
        endDate: "December 5, 2025",
        holidays: [
          { name: "Independence Day", date: "October 9, 2025" },
          { name: "Christmas Holiday", date: "December 25, 2025" }
        ],
        events: [
          { name: "School Opening Day", date: "September 15, 2025" },
          { name: "Mid-Term Break", date: "October 27-31, 2025" },
          { name: "National Secondary Schools Championships", date: "November 10-14, 2025" },
          { name: "End of Year Exams", date: "November 24 - December 5, 2025" },
          { name: "S4 & S6 Candidates' Final Exams", date: "October-November, 2025" },
          { name: "Graduation Ceremony", date: "December 4, 2025" }
        ]
      }
    ],
    "2026": [
      {
        term: "Term 1",
        startDate: "February 2, 2026",
        endDate: "May 8, 2026",
        holidays: [
          { name: "Women's Day", date: "March 8, 2026" },
          { name: "Easter Holiday", date: "April 3-6, 2026" },
          { name: "Labor Day", date: "May 1, 2026" }
        ],
        events: [
          { name: "School Opening Day", date: "February 2, 2026" },
          { name: "Mid-Term Break", date: "March 16-20, 2026" },
          { name: "Inter-House Sports Competition", date: "April 9, 2026" },
          { name: "End of Term 1 Exams", date: "April 27 - May 8, 2026" }
        ]
      },
      // Additional terms would be added here
    ]
  };

  // Function to find events for selected date
  const getEventsForSelectedDate = () => {
    if (!date) return [];
    
    const selectedDate = format(date, "MMMM d, yyyy");
    let events = [];
    
    for (const term of schoolTerms[selectedYear as keyof typeof schoolTerms] || []) {
      // Check term events
      for (const event of term.events) {
        if (event.date.includes(selectedDate) || selectedDate === event.date) {
          events.push({ ...event, type: 'event' });
        }
      }
      
      // Check holidays
      for (const holiday of term.holidays) {
        if (holiday.date.includes(selectedDate) || selectedDate === holiday.date) {
          events.push({ ...holiday, type: 'holiday' });
        }
      }
      
      // Check term start and end dates
      if (selectedDate === term.startDate) {
        events.push({ name: `${term.term} Start`, type: 'term' });
      }
      if (selectedDate === term.endDate) {
        events.push({ name: `${term.term} End`, type: 'term' });
      }
    }
    
    return events;
  };

  // Get the selected events
  const selectedDateEvents = getEventsForSelectedDate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-campus-light py-16">
        <div className="campus-container">
          <h1 className="section-title mb-8">Academic Calendar</h1>
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">
              The academic calendar at Wits College Namulanda follows the guidelines set by the 
              Uganda Ministry of Education and Sports. Our school year is divided into three terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-campus-primary">Select Date</CardTitle>
                  <CardDescription>
                    Browse the calendar to view school events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="mb-4">
                      <select 
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="2025">2025 Academic Year</option>
                        <option value="2026">2026 Academic Year</option>
                      </select>
                    </div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border bg-white p-3 pointer-events-auto"
                    />
                    <div className="flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">School Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm">Holidays</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm">Special Events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Term Start/End</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-campus-primary">
                    {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
                  </CardTitle>
                  <CardDescription>
                    {selectedDateEvents.length > 0 
                      ? `${selectedDateEvents.length} event(s) on this date` 
                      : 'No events on this date'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDateEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateEvents.map((event, index) => (
                        <div 
                          key={index} 
                          className={`p-4 rounded-md flex items-start gap-3 ${
                            event.type === 'holiday' ? 'bg-red-50 border-l-4 border-red-500' : 
                            event.type === 'event' ? 'bg-amber-50 border-l-4 border-amber-500' :
                            'bg-blue-50 border-l-4 border-blue-500'
                          }`}
                        >
                          {event.type === 'holiday' ? (
                            <CalendarClock className="h-5 w-5 text-red-500" />
                          ) : event.type === 'event' ? (
                            <CalendarCheck className="h-5 w-5 text-amber-500" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-blue-500" />
                          )}
                          <div>
                            <h3 className="font-medium">{event.name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <Info className="mx-auto h-12 w-12 text-gray-300" />
                      <h3 className="mt-2 text-gray-500">No events scheduled for this date</h3>
                      <p className="text-sm text-gray-400">Select another date or check term schedules below</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Term Schedules ({selectedYear})</h2>
                <Tabs defaultValue="term1">
                  <TabsList className="grid w-full grid-cols-3 bg-lime-400">
                    <TabsTrigger value="term1">Term 1</TabsTrigger>
                    <TabsTrigger value="term2">Term 2</TabsTrigger>
                    <TabsTrigger value="term3">Term 3</TabsTrigger>
                  </TabsList>
                  
                  {schoolTerms[selectedYear as keyof typeof schoolTerms]?.map((term, index) => (
                    <TabsContent key={index} value={`term${index + 1}`}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{term.term}</CardTitle>
                          <CardDescription>
                            {term.startDate} - {term.endDate}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-semibold text-campus-primary mb-3">Key Dates & Events</h3>
                              <ul className="space-y-2">
                                {term.events.map((event, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CalendarCheck className="h-5 w-5 text-green-600 mt-0.5" />
                                    <div>
                                      <span className="block font-medium">{event.name}</span>
                                      <span className="text-sm text-gray-500">{event.date}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-campus-primary mb-3">Holidays</h3>
                              <ul className="space-y-2">
                                {term.holidays.map((holiday, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CalendarClock className="h-5 w-5 text-red-500 mt-0.5" />
                                    <div>
                                      <span className="block font-medium">{holiday.name}</span>
                                      <span className="text-sm text-gray-500">{holiday.date}</span>
                                      {holiday.name.includes('*') && (
                                        <span className="text-xs block text-gray-500">*Date may vary based on lunar calendar</span>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
          
          <Card className="mt-8 bg-lime-100">
            <CardHeader>
              <CardTitle className="text-campus-primary">Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The school calendar is subject to change due to government directives or unforeseen circumstances. 
                Parents and students will be notified of any changes via official school communication channels.
              </p>
              <p className="text-gray-700 mt-4">
                For any questions regarding the academic calendar, please contact the school administration 
                office at <span className="font-semibold text-campus-primary">admin@wittscollegenamulanda.ac.ug</span> or 
                call <span className="font-semibold text-campus-primary">+256 (0) 414 123456</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolCalendar;
