import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("chartered-accounting");

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const serviceCategories = [
    {
      id: "chartered-accounting",
      title: "Chartered Accounting",
      description: "Professional accounting and compliance support to ensure accuracy and transparency.",
      columns: [
        {
          title: "Bookkeeping & Audit",
          services: [
            "Bookkeeping Services",
            "Financial Statement Preparation",
            "Internal Audit",
            "Statutory Audit",
            "Tax Audit",
            "Stock Audit"
          ]
        },
        {
          title: "Tax Filing & Compliance",
          services: [
            "Income Tax Returns",
            "GST Filing & Returns",
            "TDS Returns",
            "Corporate Tax Filing",
            "Transfer Pricing Documentation",
            "International Taxation"
          ]
        },
        {
          title: "Compliance & Reporting",
          services: [
            "Payroll Management",
            "Statutory Reporting",
            "ROC Compliance",
            "Internal Control Review",
            "Risk & Compliance Advisory",
            "Regulatory Filings"
          ]
        }
      ]
    },
    {
      id: "financials",
      title: "Financials",
      description: "Strategic financial management solutions to strengthen decision-making and profitability.",
      columns: [
        {
          title: "Planning & Analysis",
          services: [
            "Financial Planning & Analysis",
            "Business Valuation Services",
            "Financial Modeling",
            "Budgeting & Forecasting",
            "Cash Flow Management",
            "Working Capital Optimization"
          ]
        },
        {
          title: "Advisory Services",
          services: [
            "Virtual CFO Services",
            "Investment Advisory",
            "Risk Management Advisory",
            "Business Restructuring",
            "Performance Improvement Consulting",
            "Strategic Planning"
          ]
        },
        {
          title: "Corporate Finance",
          services: [
            "Capital Raising Advisory",
            "Debt Restructuring",
            "M&A Advisory",
            "Due Diligence",
            "Financial Due Diligence",
            "Transaction Support"
          ]
        }
      ]
    },
    {
      id: "investing",
      title: "Investing",
      description: "Helping clients grow wealth with personalized, research-driven investment strategies.",
      columns: [
        {
          title: "Wealth Management",
          services: [
            "Portfolio Management",
            "Wealth & Succession Planning",
            "Retirement Planning Solutions",
            "Estate Planning",
            "Tax-Efficient Investing",
            "Family Office Services"
          ]
        },
        {
          title: "Investment Advisory",
          services: [
            "Equity & Market Research",
            "Mutual Fund Advisory",
            "Direct Equity Advisory",
            "Fixed Income Investments",
            "Portfolio Rebalancing",
            "Risk Assessment"
          ]
        },
        {
          title: "Alternative Investments",
          services: [
            "Private Equity Advisory",
            "Real Estate Investment",
            "Startup Investment Advisory",
            "Alternative Investment Funds",
            "Sustainable / ESG Investment Advisory",
            "Structured Products"
          ]
        }
      ]
    },
    {
      id: "tech-it",
      title: "Tech & IT Solutions",
      description: "Innovative technology services to accelerate digital transformation.",
      columns: [
        {
          title: "Strategy & Consulting",
          services: [
            "IT Strategy & Consulting",
            "Digital Transformation Advisory",
            "Technology Roadmap",
            "IT Governance",
            "Enterprise Architecture",
            "Change Management"
          ]
        },
        {
          title: "Implementation & Support",
          services: [
            "Cloud & ERP Implementation",
            "IT Infrastructure Support & Maintenance",
            "Custom Software & App Development",
            "System Integration",
            "Legacy System Modernization",
            "IT Project Management"
          ]
        },
        {
          title: "Security & Automation",
          services: [
            "Cybersecurity & Data Protection",
            "Business Process Automation (RPA & AI)",
            "Data Analytics & BI",
            "Cloud Migration",
            "Disaster Recovery Planning",
            "IT Compliance"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Huaren is a full-service accounting, tax, and business advisory firm. With our team of committed professionals, 
            uniquely positioned to produce outstanding results for clients with help of available resources, expertise and business insights.
          </p>
        </div>
      </section>

      {/* Sub-Navigation */}
      <section className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4 gap-2 md:gap-4 scrollbar-hide">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 md:px-6 py-2 whitespace-nowrap rounded-md font-medium transition-all flex-shrink-0 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Desktop View - Grid Layout */}
      <section className="py-16 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">{category.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.columns.map((column, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-gold">
                      {column.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {column.services.map((service, serviceIdx) => (
                        <li key={serviceIdx} className="flex items-start group cursor-pointer">
                          <span className="text-gold mr-3 mt-1.5 group-hover:scale-125 transition-transform">›</span>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View - Accordion Layout */}
      <section className="py-12 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <div className="space-y-6">
                    {category.columns.map((column, idx) => (
                      <div key={idx}>
                        <h4 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-gold">
                          {column.title}
                        </h4>
                        <ul className="space-y-2">
                          {column.services.map((service, serviceIdx) => (
                            <li key={serviceIdx} className="flex items-start">
                              <span className="text-gold mr-2 mt-1">›</span>
                              <span className="text-sm text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and create 
            a tailored solution that fits your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfXVs9J_OPBq1Z-fmZlVr_PzMY2eON3Yh0PKKOFxqrmNRyxsQ/viewform?usp=sf_link', '_blank')}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;