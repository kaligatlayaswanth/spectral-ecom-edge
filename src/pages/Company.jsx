import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Award, Users, Globe, Target, ArrowRight, Star, Trophy, Heart, Shield, Zap } from "lucide-react";

const Company = () => {
  // Handle hash navigation
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add offset for navbar height
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Scroll on initial load
    scrollToSection();

    // Listen for hash changes
    const handleHashChange = () => {
      scrollToSection();
    };

    // Listen for popstate (back/forward buttons)
    const handlePopState = () => {
      setTimeout(scrollToSection, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Function to scroll to section (for dropdown links)
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add click handlers for dropdown links
  useEffect(() => {
    const handleDropdownClick = (e) => {
      const link = e.target.closest('a[href*="#"]');
      if (link && link.href.includes('/company#')) {
        e.preventDefault();
        const hash = link.href.split('#')[1];
        scrollToSection(`#${hash}`);
      }
    };

    document.addEventListener('click', handleDropdownClick);
    return () => document.removeEventListener('click', handleDropdownClick);
  }, []);

  const brands = [
    {
      id: 1,
      name: "Spectral Core",
      description: "Our flagship platform powering digital transformation across industries.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "Platform"
    },
    {
      id: 2,
      name: "EcoFlow",
      description: "Sustainable technology solutions for a greener future.",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Sustainability"
    },
    {
      id: 3,
      name: "HealthSync",
      description: "Revolutionary healthcare technology connecting patients and providers.",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Healthcare"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best Innovation Award 2024",
      organization: "Tech Excellence",
      year: "2024",
      icon: Trophy,
      description: "Recognized for breakthrough technology in digital transformation."
    },
    {
      id: 2,
      title: "Sustainability Champion",
      organization: "Green Business Awards",
      year: "2023",
      icon: Heart,
      description: "Leading the way in sustainable business practices and green technology."
    },
    {
      id: 3,
      title: "Customer Excellence",
      organization: "Service Quality Institute",
      year: "2023",
      icon: Star,
      description: "Outstanding customer service and user experience excellence."
    },
    {
      id: 4,
      title: "Security Innovation",
      organization: "Cyber Security Awards",
      year: "2024",
      icon: Shield,
      description: "Advanced security protocols and data protection leadership."
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Team Members" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Target, value: "1000+", label: "Projects Delivered" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary text-primary-foreground pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4">
              About Our Company
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Building the Future
            <br />
            <span className="text-secondary">Together</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-foreground"
          >
            We're a global team of innovators, creators, and problem-solvers dedicated to transforming businesses through cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 font-semibold">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
              Join Our Team
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Us
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-foreground">
              Founded with a vision to democratize technology and empower businesses worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Our Team"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg text-secondary-foreground">
                We believe that technology should be accessible, powerful, and transformative. Our mission is to create innovative solutions that solve real-world problems and drive meaningful change across industries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Innovation First</h4>
                    <p className="text-secondary-foreground">Pushing boundaries with cutting-edge technology and creative solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Customer Focused</h4>
                    <p className="text-secondary-foreground">Every solution we create is designed with our customers' success in mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Global Impact</h4>
                    <p className="text-secondary-foreground">Making a difference across 50+ countries and counting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section id="our-brands" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Brands
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              A portfolio of innovative solutions designed to transform industries and empower businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border bg-card text-card-foreground overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        {brand.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 flex-shrink-0">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {brand.name}
                    </CardTitle>
                    <CardDescription>
                      {brand.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Awards Section */}
      <section id="impact-awards" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Impact Awards
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-foreground">
              Recognition of our commitment to excellence, innovation, and positive impact in the industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border bg-card text-card-foreground p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <award.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-primary">{award.title}</h3>
                        <Badge variant="secondary">{award.year}</Badge>
                      </div>
                      <p className="text-secondary-foreground font-medium mb-2">{award.organization}</p>
                      <p className="text-secondary-foreground">{award.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary-foreground">
              Be part of a team that's shaping the future of technology and making a real impact in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 font-semibold">
                View Careers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Company; 