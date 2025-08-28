import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Calculator,
  Calendar,
  BookOpen,
  ExternalLink,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resourceCategories = [
    {
      title: "Tax Calculators",
      icon: Calculator,
      description: "Calculate your tax liabilities with our easy-to-use tools",
      resources: [
        { name: "Income Tax Calculator 2024-25", type: "Tool", link: "#" },
        { name: "GST Calculator", type: "Tool", link: "#" },
        { name: "TDS Calculator", type: "Tool", link: "#" },
        { name: "Capital Gains Calculator", type: "Tool", link: "#" }
      ]
    },
    {
      title: "Compliance Calendar",
      icon: Calendar,
      description: "Never miss important compliance deadlines",
      resources: [
        { name: "GST Compliance Calendar 2024-25", type: "PDF", link: "#" },
        { name: "Income Tax Due Dates", type: "PDF", link: "#" },
        { name: "ROC Filing Calendar", type: "PDF", link: "#" },
        { name: "Annual Compliance Checklist", type: "PDF", link: "#" }
      ]
    },
    {
      title: "Forms & Templates",
      icon: FileText,
      description: "Download essential forms and templates",
      resources: [
        { name: "Company Incorporation Forms", type: "ZIP", link: "#" },
        { name: "Audit Report Templates", type: "DOC", link: "#" },
        { name: "GST Registration Forms", type: "PDF", link: "#" },
        { name: "Board Resolution Templates", type: "DOC", link: "#" }
      ]
    },
    {
      title: "Guides & Manuals",
      icon: BookOpen,
      description: "Comprehensive guides for various compliance requirements",
      resources: [
        { name: "GST Implementation Guide", type: "PDF", link: "#" },
        { name: "Startup Compliance Manual", type: "PDF", link: "#" },
        { name: "Audit Preparation Checklist", type: "PDF", link: "#" },
        { name: "Transfer Pricing Guide", type: "PDF", link: "#" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Income Tax Department", url: "https://www.incometax.gov.in", description: "Official Income Tax portal" },
    { name: "GST Portal", url: "https://www.gst.gov.in", description: "Goods & Services Tax portal" },
    { name: "MCA Portal", url: "https://www.mca.gov.in", description: "Ministry of Corporate Affairs" },
    { name: "ICAI", url: "https://www.icai.org", description: "Institute of Chartered Accountants of India" },
    { name: "CBDT", url: "https://www.incometaxindia.gov.in", description: "Central Board of Direct Taxes" },
    { name: "CBIC", url: "https://www.cbic.gov.in", description: "Central Board of Indirect Taxes and Customs" }
  ];

  const latestUpdates = [
    {
      title: "Budget 2024: Key Tax Changes",
      date: "2024-03-15",
      description: "Summary of important tax changes announced in Budget 2024",
      type: "Update"
    },
    {
      title: "New GST Return Forms",
      date: "2024-03-10",
      description: "Updated GST return forms and filing procedures",
      type: "Notification"
    },
    {
      title: "ROC Fee Structure Revised",
      date: "2024-03-05",
      description: "New fee structure for ROC filings effective from April 2024",
      type: "Circular"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Access our comprehensive collection of tools, guides, and resources to help 
            you stay compliant and make informed financial decisions.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search resources, tools, and guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-muted-foreground mr-3" />
                        <span className="text-foreground">{resource.name}</span>
                        <span className="ml-2 px-2 py-1 bg-gold/10 text-gold text-xs rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Important Government Portals</h2>
            <p className="text-lg text-muted-foreground">
              Quick access to essential government websites and portals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Updates & Notifications</h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest regulatory updates and changes
            </p>
          </div>

          <div className="space-y-6">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white border-l-4 border-gold p-6 rounded-r-lg shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full mr-3">
                        {update.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{update.title}</h3>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Finding Something?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Can't find the resource you're looking for? Our expert team is here to help 
            you with any questions or specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Request Custom Resource
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;