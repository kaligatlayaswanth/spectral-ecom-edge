import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Star, TrendingUp, Users, Award, ArrowRight, Play, Quote } from "lucide-react";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      company: "TechFlow Solutions",
      industry: "SaaS",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "300% Revenue Growth in 12 Months",
      description: "How TechFlow transformed their business operations and achieved unprecedented growth through our platform.",
      metrics: {
        revenue: "300%",
        users: "50K+",
        time: "12 months"
      },
      testimonial: "The transformation has been incredible. Our team productivity increased by 200% and customer satisfaction is at an all-time high.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Solutions"
    },
    {
      id: 2,
      company: "GreenEco Retail",
      industry: "E-commerce",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "From Startup to Market Leader",
      description: "GreenEco's journey from a small startup to becoming the leading sustainable retail platform.",
      metrics: {
        revenue: "500%",
        users: "100K+",
        time: "18 months"
      },
      testimonial: "We've revolutionized how people shop sustainably. Our platform now serves over 100,000 customers worldwide.",
      author: "Marcus Rodriguez",
      role: "Founder, GreenEco Retail"
    },
    {
      id: 3,
      company: "HealthSync Pro",
      industry: "Healthcare",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      title: "Digital Healthcare Revolution",
      description: "How HealthSync Pro is making healthcare accessible to millions through innovative technology.",
      metrics: {
        revenue: "400%",
        users: "200K+",
        time: "24 months"
      },
      testimonial: "We're not just building software, we're saving lives. Our platform has connected over 200,000 patients with healthcare providers.",
      author: "Dr. Emily Watson",
      role: "CTO, HealthSync Pro"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Success Stories" },
    { icon: Users, value: "1M+", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Industry Awards" },
    { icon: Star, value: "99%", label: "Satisfaction Rate" }
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
              Success Stories
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Real Success
            <br />
            <span className="text-secondary">Real Impact</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-foreground"
          >
            Discover how our platform has transformed businesses and created lasting impact across industries worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Success Stories
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
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

      {/* Success Stories Grid */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Featured Success Stories
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-foreground">
              Real businesses, real results. See how our platform has empowered companies to achieve extraordinary growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border bg-card text-card-foreground overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.logo} 
                      alt={story.company}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        {story.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 flex-shrink-0">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                    <CardDescription>
                      {story.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{story.metrics.revenue}</div>
                        <div className="text-sm">Revenue Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">{story.metrics.users}</div>
                        <div className="text-sm">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">{story.metrics.time}</div>
                        <div className="text-sm">Time Frame</div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary flex-grow">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="italic mb-2">"{story.testimonial}"</p>
                          <div>
                            <div className="font-semibold text-primary">{story.author}</div>
                            <div className="text-sm">{story.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 mt-auto">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary-foreground">
              Join thousands of businesses that have transformed their operations and achieved remarkable growth with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 font-semibold">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessStories; 