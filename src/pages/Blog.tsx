import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar,
  User,
  ArrowRight,
  Filter
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Taxation", "GST", "Audit", "Business Advisory", "Compliance", "Updates"];

  const blogPosts = [
    {
      id: 1,
      title: "GST Return Filing: Important Deadlines for FY 2024-25",
      excerpt: "Stay updated with the latest GST return filing deadlines and avoid penalties. Complete guide to GSTR-1, GSTR-3B, and annual returns.",
      category: "GST",
      author: "CA Priya Menon",
      date: "2024-03-15",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "New Tax Benefits for Startups in Budget 2024",
      excerpt: "Explore the enhanced tax benefits and incentives announced for startups and new businesses in the latest union budget.",
      category: "Taxation",
      author: "CA Rajesh Gupta",
      date: "2024-03-12",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Internal Audit Best Practices for SMEs",
      excerpt: "Essential internal audit practices that small and medium enterprises should implement for better financial control and compliance.",
      category: "Audit",
      author: "CA Vikram Singh",
      date: "2024-03-10",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Digital Transformation in Accounting: Trends to Watch",
      excerpt: "How digital technologies are reshaping the accounting landscape and what businesses need to know about the transition.",
      category: "Business Advisory",
      author: "CA Anjali Sharma",
      date: "2024-03-08",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "ROC Compliance Checklist for Private Limited Companies",
      excerpt: "Complete checklist of ROC compliances that private limited companies must fulfill to avoid penalties and maintain good standing.",
      category: "Compliance",
      author: "CA Priya Menon",
      date: "2024-03-05",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Transfer Pricing Documentation: What You Need to Know",
      excerpt: "Understanding transfer pricing regulations, documentation requirements, and compliance strategies for multinational businesses.",
      category: "Taxation",
      author: "CA Rajesh Gupta",
      date: "2024-03-02",
      readTime: "9 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed with the latest insights, updates, and expert advice on 
            taxation, compliance, and financial management.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Article Image */}
                  <div className="h-48 bg-secondary/30 flex items-center justify-center">
                    <div className="text-muted-foreground">Article Image</div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full mb-3">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More Button */}
                    <Button variant="outline" size="sm" className="group w-full">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Tax & Compliance News
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter and get the latest updates on taxation, 
            GST, and compliance directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-foreground"
            />
            <Button variant="gold" size="lg">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-4">
            No spam. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;