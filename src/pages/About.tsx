import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sohan Kharidaar",
      position: "Manager",
      experience: "4+ Years",
      specialization: "Audit & Corporate Finance",
      photo: "/src/assets/team-sohan.jpg"
    },
    {
      name: "Sahil Panghal",
      position: "Partner – Taxation",
      experience: "3+ Years",
      specialization: "Direct & Indirect Taxation",
      photo: "/src/assets/team-sahil.jpg"
    },
    {
      name: "Suraj",
      position: "Tech Lead",
      experience: "3+ Years",
      specialization: "Software Developer",
      photo: "/src/assets/team-suraj.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            At Veritas, we believe in bringing clarity, trust, and innovation to every partnership.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2025, Veritas is a modern consultancy firm dedicated to guiding businesses 
                  through every challenge with integrity and expertise.
                </p>
                <p>
                  Our team may be young, but we are passionate problem-solvers with a clear vision: to 
                  deliver measurable results while building long-lasting client relationships.
                </p>
                <p>
                  We combine strategic thinking, innovative solutions, and personalized support to help 
                  our clients achieve sustainable growth. At Veritas, your success is our mission, and 
                  your trust is our foundation.
                </p>
                <div className="pt-4">
                  <p className="text-lg font-semibold text-foreground">
                    Let's build the future together.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <div className="text-muted-foreground">Year Established</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional financial services that empower our clients to achieve 
                their business goals while maintaining the highest standards of professional integrity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative financial advisory firm, recognized for our 
                expertise, integrity, and commitment to client success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, Excellence, Innovation, and Client-centricity form the cornerstone of 
                our practice and guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of professionals is committed to delivering trusted consultancy services with integrity and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <div className="text-gold font-medium mb-2">{member.position}</div>
                <div className="text-sm text-primary font-medium mb-3">{member.experience}</div>
                <div className="text-sm text-muted-foreground">{member.specialization}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;