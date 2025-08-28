import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  Building,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring accuracy, compliance, and transparency in your financial reporting with detailed risk assessment.",
      features: [
        "Statutory Audits as per Companies Act",
        "Internal Audit & Risk Assessment", 
        "Tax Audit & Compliance Review",
        "Due Diligence for M&A",
        "Management Audit Services",
        "Forensic Audit & Investigation"
      ],
      benefits: [
        "Enhanced financial credibility",
        "Regulatory compliance assurance", 
        "Risk identification & mitigation",
        "Improved internal controls"
      ]
    },
    {
      icon: Calculator,
      title: "Taxation Services",
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
      icon: BookOpen,
      title: "Accounting & Bookkeeping", 
      description: "Professional accounting services to maintain accurate financial records, generate insights, and support informed decision-making.",
      features: [
        "Monthly Bookkeeping & Reconciliation",
        "Financial Statement Preparation",
        "Management Information Systems",
        "Payroll Processing & Compliance",
        "Inventory Management Systems",
        "Cash Flow Management"
      ],
      benefits: [
        "Accurate financial records",
        "Real-time business insights",
        "Streamlined operations",
        "Improved cash flow management"
      ]
    },
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
      icon: FileText,
      title: "GST & Compliance",
      description: "Complete GST registration, filing, and compliance management with regular updates on changing regulations.",
      features: [
        "GST Registration & Migration",
        "Monthly & Annual Return Filing",
        "GST Audit & Assessment Support",
        "Input Tax Credit Optimization",
        "GST Refund Processing",
        "Compliance Calendar Management"
      ],
      benefits: [
        "100% compliance assurance",
        "Optimized tax credits",
        "Reduced penalty risks",
        "Streamlined filing process"
      ]
    },
    {
      icon: Building,
      title: "Company Registration & Startup Advisory",
      description: "End-to-end support for business incorporation, regulatory compliance, and strategic guidance for startups and new ventures.",
      features: [
        "Company Incorporation Services",
        "Director Identification Number",
        "ROC Compliance Management",
        "Startup Advisory & Mentoring",
        "Intellectual Property Advisory",
        "Funding & Investment Support"
      ],
      benefits: [
        "Fast incorporation process",
        "Complete legal compliance",
        "Strategic business guidance",
        "Investor readiness support"
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