import { 
  Users, 
  Target, 
  Heart, 
  Clock,
  Shield,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Young & Dynamic Team",
      description: "Our team of qualified CAs brings fresh perspectives and innovative solutions to financial services.",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "Transparent Process",
      description: "Clear communication, transparent pricing, and detailed reporting throughout our engagement.",
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "We prioritize your business needs and provide personalized solutions for sustainable growth.",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "On-time Delivery",
      description: "Committed to meeting deadlines and ensuring all compliance requirements are met promptly.",
      color: "text-purple-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "ICAI Member Firm",
      description: "Recognized by Institute of Chartered Accountants"
    },
    {
      icon: TrendingUp,
      title: "100+ Projects",
      description: "Proven track record of client satisfaction"
    },
    {
      icon: CheckCircle,
      title: "100% Compliance Rate",
      description: "Perfect compliance record maintained"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Your Success is Our Priority
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            With innovative approaches and a commitment to excellence, we provide the financial 
            expertise your business needs to thrive in today's competitive market.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <reason.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="opacity-90 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Achievements & Certifications
            </h3>
            <p className="text-lg opacity-90">
              Recognition and certifications that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm opacity-80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100+</div>
            <div className="text-sm opacity-80">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</div>
            <div className="text-sm opacity-80">Core Services</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15</div>
            <div className="text-sm opacity-80">Expert Team Members</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-sm opacity-80">Compliance Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;