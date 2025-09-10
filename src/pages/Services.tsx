import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Calculator, 
  Building, 
  FileCheck, 
  Users, 
  PiggyBank,
  BarChart3,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic financial guidance and business consulting to help organizations optimize performance and achieve growth objectives.",
      features: [
        "Financial Planning & Analysis",
        "Business Valuation Services",
        "Risk Management Advisory",
        "Virtual CFO Services",
        "Investment Advisory",
        "Business Restructuring"
      ],
      benefits: [
        "Strategic decision support",
        "Improved profitability",
        "Risk mitigation strategies",
        "Access to expert CFO services"
      ]
    },
    {
      icon: Calculator,
      title: "Taxation",
      description: "Expert tax planning and compliance services designed to minimize tax liabilities while ensuring full compliance with regulations.",
      features: [
        "Income Tax Planning & Filing",
        "Corporate Tax Advisory",
        "International Tax Consulting", 
        "Tax Appeal & Litigation Support",
        "Transfer Pricing Documentation",
        "Advance Ruling Applications"
      ],
      benefits: [
        "Significant tax savings",
        "Reduced compliance burden",
        "Expert representation before authorities",
        "Strategic tax planning"
      ]
    },
    {
      icon: Building,
      title: "Corporate Support Services",
      description: "End-to-end support for business incorporation, regulatory compliance, and strategic guidance for corporate entities.",
      features: [
        "Company Incorporation Services",
        "Director Identification Number",
        "ROC Compliance Management",
        "Corporate Governance Advisory",
        "Board Meeting Support",
        "Annual Compliance Management"
      ],
      benefits: [
        "Fast incorporation process",
        "Complete legal compliance",
        "Strategic business guidance",
        "Regulatory peace of mind"
      ]
    },
    {
      icon: FileCheck,
      title: "Transaction Advisory Services",
      description: "Comprehensive advisory services for mergers, acquisitions, and complex business transactions with detailed analysis.",
      features: [
        "Due Diligence Services",
        "Business Valuation & Modeling",
        "M&A Advisory Support",
        "Financial Restructuring",
        "Investment Advisory",
        "Transaction Documentation"
      ],
      benefits: [
        "Informed decision making",
        "Risk mitigation in deals",
        "Optimized transaction value",
        "Expert negotiation support"
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Professional development and training services to enhance business capabilities and leadership effectiveness.",
      features: [
        "Leadership Development Programs",
        "Communication Skills Training",
        "Team Building Workshops",
        "Professional Development Coaching",
        "Presentation Skills Enhancement",
        "Negotiation Skills Training"
      ],
      benefits: [
        "Enhanced leadership capabilities",
        "Improved team performance",
        "Better communication outcomes",
        "Increased professional confidence"
      ]
    },
    {
      icon: PiggyBank,
      title: "Investing",
      description: "Investment advisory and portfolio management services designed to optimize returns while managing risk effectively.",
      features: [
        "Portfolio Management Services",
        "Investment Strategy Planning",
        "Risk Assessment & Management",
        "Market Analysis & Research",
        "Wealth Management Advisory",
        "Retirement Planning Services"
      ],
      benefits: [
        "Optimized investment returns",
        "Diversified risk management",
        "Professional market insights",
        "Long-term wealth creation"
      ]
    },
    {
      icon: BarChart3,
      title: "Statistics",
      description: "Data analysis and statistical services for informed business decision making and performance optimization.",
      features: [
        "Business Intelligence Analytics",
        "Performance Metrics Development",
        "Market Research & Analysis",
        "Financial Data Modeling",
        "Predictive Analytics Services",
        "Statistical Report Generation"
      ],
      benefits: [
        "Data-driven decision making",
        "Enhanced business insights",
        "Predictive market intelligence",
        "Improved operational efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive financial and business solutions designed to support your growth, 
            ensure compliance, and optimize your financial performance.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">What We Offer</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-gold mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button variant="outline" className="group">
                      Learn More About This Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} flex justify-center`}>
                  <div className="w-80 h-80 bg-secondary/30 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific requirements and learn how our 
            expert team can help your business achieve its financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              Request Service Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;