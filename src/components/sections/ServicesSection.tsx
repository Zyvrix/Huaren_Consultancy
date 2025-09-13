import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Calculator, 
  Building, 
  FileCheck, 
  Users, 
  PiggyBank,
  BarChart3,
  ArrowRight,
  Target,
  Globe,
  Shield,
  Briefcase,
  GraduationCap,
  DollarSign
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic financial and business guidance tailored to help your company achieve its goals.",
      features: ["Market Assessment & Expansion Support", "CFO Services", "Risk Management", "India Entry Strategies"]
    },
    {
      icon: Calculator,
      title: "Taxation",
      description: "Expert tax planning and compliance services designed to minimize liabilities and maximize savings.",
      features: ["Direct & Indirect Tax", "Expatriate Tax Services", "International Tax Planning", "Transfer Pricing"]
    },
    {
      icon: Building,
      title: "Corporate Support Services",
      description: "End-to-end support for company incorporation, regulatory compliance, and corporate governance.",
      features: ["Company Formation & Registration", "ROC Compliance", "Labour Law & POSH Act Compliance", "Virtual CFO & Payroll Services"]
    },
    {
      icon: FileCheck,
      title: "Transaction Advisory Services",
      description: "Comprehensive consulting for mergers, acquisitions, valuations, and due diligence.",
      features: ["Business Valuation", "Mergers & Acquisitions", "Joint Ventures", "Internal Audit"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Leverage data-driven insights to enhance business decisions and optimize operations.",
      features: ["Business Intelligence Reporting", "Market & Customer Analytics", "Predictive Modeling", "Performance Dashboards"]
    },
    {
      icon: GraduationCap,
      title: "Soft Skills & Training",
      description: "Professional development and training services to boost your team's capabilities and effectiveness.",
      features: ["Leadership Development", "Communication & Presentation Skills", "Team Building Workshops", "Customized Corporate Training"]
    },
    {
      icon: DollarSign,
      title: "Investing & Financial Management",
      description: "Investment advisory and portfolio management services for maximizing returns.",
      features: ["Wealth Management", "Portfolio Advisory", "Risk Analysis", "Financial Planning"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Consultancy Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From financial advisory and taxation to corporate compliance and cutting-edge technology solutions, 
            Verita offers a full spectrum of consultancy services to help your business grow and succeed in today's dynamic market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button variant="outline" size="sm" className="group/btn w-full">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create 
              a tailored financial solution that fits your needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;