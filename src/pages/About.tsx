import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Eye, Award } from "lucide-react";
import teamSohan from "@/assets/team-sohan.jpg";
import teamSahil from "@/assets/team-sahil.jpg";
import teamDeepak from "@/assets/team-deepak.jpg";
import teamRupesh from "@/assets/team-rupesh.jpg";
import teamRajdhar from "@/assets/team-rajdhar.jpg";
import teamAniket from "@/assets/team-aniket.jpg";
import teamVirat from "@/assets/team-virat.jpg";
import teamMannu from "@/assets/team-mannu.jpg";
import teamYash from "@/assets/team-yash.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sohan Kharidaar",
      position: "Manager",
      specialization: "Senior Consultant",
      photo: teamSohan
    },
    {
      name: "Sahil Panghal",
      position: "Partner – Taxation",
      specialization: "Direct & Indirect Taxation",
      photo: teamSahil
    },
    {
      name: "Deepak",
      position: "Chief Customer Officer (CCO)",
      specialization: "Operational Consultant",
      photo: teamDeepak
    },
    {
      name: "Rupesh",
      position: "Tech Partner",
      specialization: "Software Engineer",
      photo: teamRupesh
    },
    {
      name: "Rajdhar",
      position: "Partner",
      specialization: "Operational",
      photo: teamRajdhar
    },
    {
      name: "Aniket",
      position: "Partner",
      specialization: "Operational",
      photo: teamAniket
    },
    {
      name: "Virat",
      position: "Partner",
      specialization: "Social Media Manager",
      photo: teamVirat
    },
    {
      name: "Mannu Chauhan",
      position: "Partner",
      specialization: "CTO",
      photo: teamMannu
    },
    {
      name: "Yash",
      position: "Partner",
      specialization: "Consultant",
      photo: teamYash
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">Who We Are</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto px-4">
            At Huaren, we believe in bringing clarity, trust, and innovation to every partnership.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Founded in 2025, Huaren is a modern consultancy firm dedicated to guiding businesses 
                  through every challenge with integrity and expertise.
                </p>
                <p>
                  Our team may be young, but we are passionate problem-solvers with a clear vision: to 
                  deliver measurable results while building long-lasting client relationships.
                </p>
                <p>
                  We combine strategic thinking, innovative solutions, and personalized support to help 
                  our clients achieve sustainable growth. At Huaren, your success is our mission, and 
                  your trust is our foundation.
                </p>
                <div className="pt-3 sm:pt-4">
                  <p className="text-base sm:text-lg font-semibold text-foreground">
                    Let's build the future together.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2025</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Year Established</div>
              </div>
              <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                To provide exceptional financial services that empower our clients to achieve 
                their business goals while maintaining the highest standards of professional integrity.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-gold-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                To be the most trusted and innovative financial advisory firm, recognized for our 
                expertise, integrity, and commitment to client success.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Our Values</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Integrity, Excellence, Innovation, and Client-centricity form the cornerstone of 
                our practice and guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Meet Our Expert Team
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Our team of professionals is committed to delivering trusted consultancy services with integrity and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <div className="text-sm sm:text-base text-gold font-medium mb-2">{member.position}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{member.specialization}</div>
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