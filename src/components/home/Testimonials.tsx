
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { MessageCircle, MessageSquare } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  platform: "Twitter" | "Facebook" | "Instagram" | "LinkedIn";
  avatarUrl?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "My daughter has thrived at Wits College Namulanda. The teachers truly care about each student's success and provide individualized attention that has helped her excel academically.",
    name: "Sarah Namakula",
    role: "Parent",
    platform: "Facebook",
    avatarUrl: "/lovable-uploads/2113b2de-a57a-48a0-9f96-393b1fd91b21.png"
  }, 
  {
    quote: "As an OG of this prestigious institution, I can confidently say that the values and education I received at Wits College Namulanda prepared me exceptionally well for university and beyond.",
    name: "Robert Mukasa",
    role: "OG, Class of 2010",
    platform: "LinkedIn"
  }, 
  {
    quote: "The e-learning facilities at Wits College are unmatched. During the pandemic, my son's education continued seamlessly thanks to their advanced digital infrastructure.",
    name: "Timothy Ssekandi",
    role: "Parent",
    platform: "Twitter"
  }, 
  {
    quote: "Looking back at my time at Wits College Namulanda, I'm grateful for the lifelong friendships and the holistic education that shaped who I am today. It's not just a school, it's a family.",
    name: "Joyce Nakimuli",
    role: "OB, Class of 2008",
    platform: "Instagram"
  }, 
  {
    quote: "The dedication to academic excellence combined with character development makes Wits College Namulanda stand out among other schools. My two children have benefited immensely from this balanced approach.",
    name: "Peter Ochieng",
    role: "Parent",
    platform: "Facebook"
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "Twitter":
      return <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />;
    case "Facebook":
      return <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />;
    case "Instagram":
      return <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500" />;
    case "LinkedIn":
      return <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-blue-700" />;
    default:
      return <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />;
  }
};

const getInitials = (name: string) => {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <Card className="border border-gray-200 h-full shadow-sm hover:shadow-md transition-all bg-white">
    <CardContent className="p-4 sm:p-6 flex flex-col h-full bg-amber-200">
      <div className="flex items-start mb-3 sm:mb-4">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 flex-shrink-0">
          {testimonial.avatarUrl ? (
            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
          ) : (
            <AvatarFallback className="bg-campus-primary text-white text-xs sm:text-sm">
              {getInitials(testimonial.name)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
          <div className="flex items-center text-xs sm:text-sm text-gray-500 flex-wrap">
            <span className="truncate">{testimonial.role}</span>
            <span className="mx-1 sm:mx-2">•</span>
            <div className="flex items-center flex-shrink-0">
              {getPlatformIcon(testimonial.platform)}
              <span className="ml-1">{testimonial.platform}</span>
            </div>
          </div>
        </div>
      </div>
      <blockquote className="flex-1 italic text-gray-700 text-sm sm:text-base leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-yellow-500">
      <div className="campus-container bg-yellow-500">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-campus-primary mb-6 sm:mb-8 text-center">
          What People Are Saying
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
          Read what our community shares about their experience with Wits College Namulanda
        </p>

        <div className="w-full max-w-5xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 sm:mt-6">
              <CarouselPrevious className="relative static translate-y-0 mr-2 text-zinc-950 bg-sky-400 hover:bg-sky-300 h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="relative static translate-y-0 ml-2 text-cyan-950 bg-sky-500 hover:bg-sky-400 h-8 w-8 sm:h-10 sm:w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
