import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BookOpen, MessageCircle, Mail, FileText, ArrowRight, Calendar, User, Eye, Clock, Tag, Search, Download, Share2, Bookmark, Star } from "lucide-react";

const Resources = () => {
  // Handle hash navigation
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    scrollToSection();
    
    const handleHashChange = () => {
      scrollToSection();
    };

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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of IoT: Trends to Watch in 2024",
      excerpt: "Discover the latest innovations and emerging trends that will shape the Internet of Things landscape this year.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      views: "2.5K",
      featured: true
    },
    {
      id: 2,
      title: "Smart Cities: Building Sustainable Urban Infrastructure",
      excerpt: "How IoT technology is revolutionizing urban planning and creating more sustainable, efficient cities.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Smart Cities",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
      views: "1.8K"
    },
    {
      id: 3,
      title: "Healthcare IoT: Transforming Patient Care",
      excerpt: "Exploring how connected devices are improving healthcare outcomes and patient experiences.",
      author: "Dr. Emily Watson",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      views: "3.2K"
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Quick setup guides and tutorials for new users",
      articles: 12,
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      articles: 25,
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Complete API reference and examples",
      articles: 18,
      color: "bg-purple-500"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Software, drivers, and tools",
      articles: 8,
      color: "bg-orange-500"
    }
  ];

  const documentationSections = [
    {
      title: "Quick Start Guide",
      description: "Get up and running in minutes",
      icon: BookOpen,
      difficulty: "Beginner",
      time: "10 min"
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: FileText,
      difficulty: "Advanced",
      time: "45 min"
    },
    {
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      icon: Share2,
      difficulty: "Intermediate",
      time: "30 min"
    },
    {
      title: "Best Practices",
      description: "Recommended patterns and guidelines",
      icon: Star,
      difficulty: "All Levels",
      time: "20 min"
    }
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
              Resources Hub
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Knowledge
            <br />
            <span className="text-secondary">Empowers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-foreground"
          >
            Discover insights, get help, and stay updated with our comprehensive resource library.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 font-semibold">
              <Search className="w-5 h-5 mr-2" />
              Explore Resources
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
              <Mail className="w-5 h-5 mr-2" />
              Subscribe to Newsletter
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <a href="#blog" className="group">
              <div className="bg-card text-card-foreground p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Blog</h3>
                <p className="text-sm text-secondary-foreground">Latest insights</p>
              </div>
            </a>
            <a href="#help-center" className="group">
              <div className="bg-card text-card-foreground p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Help Center</h3>
                <p className="text-sm text-secondary-foreground">Get support</p>
              </div>
            </a>
            <a href="#newsletter" className="group">
              <div className="bg-card text-card-foreground p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Newsletter</h3>
                <p className="text-sm text-secondary-foreground">Stay updated</p>
              </div>
            </a>
            <a href="#documentation" className="group">
              <div className="bg-card text-card-foreground p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <FileText className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Documentation</h3>
                <p className="text-sm text-secondary-foreground">Technical guides</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Latest from Our Blog
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary-foreground">
              Stay informed with the latest insights, trends, and innovations in IoT technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border bg-card text-card-foreground overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-secondary-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center Section */}
      <section id="help-center" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Help Center
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to your questions and get the support you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border bg-card text-card-foreground p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">{category.title}</CardTitle>
                  <CardDescription className="mb-4">{category.description}</CardDescription>
                  <div className="text-sm text-secondary-foreground">
                    {category.articles} articles
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground">
              Get the latest insights, product updates, and industry news delivered to your inbox.
            </p>
            
            <div className="bg-secondary p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-secondary-foreground mt-4">
                Join 10,000+ professionals who trust our insights
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Documentation
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive guides and technical documentation to help you succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border bg-card text-card-foreground p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl font-bold mb-2">{section.title}</CardTitle>
                      <CardDescription className="mb-4">{section.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary">{section.difficulty}</Badge>
                        <span className="text-secondary-foreground">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {section.time}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Resources; 