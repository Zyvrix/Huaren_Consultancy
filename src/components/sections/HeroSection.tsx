import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-ai-finance.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional chartered accountancy office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight fade-in">
            Empowering Business Growth Through 
            <span className="text-gold block mt-2">Finance, Tech &amp; Strategy</span>
          </h1>

          {/* Subheading */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold font-semibold mb-3 sm:mb-4 fade-in px-2">
            Chartered Accountancy | IT Solutions | Business Advisory
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed fade-in px-2">
            Your one-stop partner for finance, compliance, and digital transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 fade-in px-4">
            <Button variant="gold" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 hover-scale w-full sm:w-auto min-h-[48px]">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto min-h-[48px]">
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center fade-in px-2">
            <div className="flex flex-col items-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Multi-Domain Expertise</h3>
              <p className="text-white/80 text-sm">Finance, tech &amp; business under one roof</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Skilled Professionals</h3>
              <p className="text-white/80 text-sm">CAs, consultants &amp; engineers</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Future-Ready Solutions</h3>
              <p className="text-white/80 text-sm">Compliant. Scalable. Secure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;