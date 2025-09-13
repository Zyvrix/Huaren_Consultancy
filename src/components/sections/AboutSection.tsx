import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Member of Institute of Chartered Accountants of India (ICAI)",
    "Serving clients across multiple industries",
    "Transparent pricing with no hidden costs"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wide">About Our Firm</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Your Trusted Business &amp; Technology Partner Since 2020
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional CA Firm has been a reliable partner for businesses and individuals for over five years. 
              What started as a Chartered Accountancy firm has now evolved into a multi-disciplinary service 
              provider — offering financial advisory, tax solutions, business consulting, and cutting-edge technology services.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of qualified Chartered Accountants, consultants, and tech professionals is committed to 
              delivering personalized, growth-oriented solutions that ensure compliance, drive innovation, and optimize 
              overall performance.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-shadow">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-shadow">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Expert Team</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;