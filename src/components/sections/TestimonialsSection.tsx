import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, Tech Innovations Pvt Ltd",
      company: "Technology Sector",
      content: "Professional CA Firm has been instrumental in our company's financial growth. Their expert tax planning saved us over ₹2 lakhs annually, and their audit services ensure we're always compliant.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Founder, Green Earth Solutions",
      company: "Environmental Services",
      content: "The team's expertise in GST compliance and business advisory helped us navigate complex regulations effortlessly. Their responsive support and transparent communication is exceptional.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      position: "Director, Patel Industries",
      company: "Manufacturing",
      content: "We've been working with them for over 5 years. Their comprehensive approach to accounting and audit services has helped us maintain perfect compliance while focusing on business growth.",
      rating: 5,
      avatar: "AP"
    },
    {
      name: "Dr. Sunita Jain",
      position: "Managing Partner, HealthCare Plus",
      company: "Healthcare",
      content: "From company registration to ongoing compliance, they've been our trusted partner. Their proactive approach and attention to detail gives us complete peace of mind.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wide">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about our professional services and commitment to excellence.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/20" />
            
            {/* Current Testimonial */}
            <div className="min-h-[300px] flex flex-col justify-center">
              <div className="mb-6">
                {/* Stars */}
                <div className="flex items-center justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gold fill-current opacity-50" />
                </div>
                
                {/* Content */}
                <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8">
                  "{testimonials[currentSlide].content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentSlide].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gold' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.5/5</span>
            <span className="text-muted-foreground">• Based on 150+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;