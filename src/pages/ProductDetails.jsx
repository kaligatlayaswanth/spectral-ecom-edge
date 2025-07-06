
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProductTabs } from "@/components/ProductTabs";
import { RecommendedProducts } from "@/components/RecommendedProducts";
import { Footer } from "@/components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data - in real app this would come from API
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$349",
      description: "Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation and 30-hour battery life.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      badge: "New",
      specifications: {
        "Battery Life": "30 hours",
        "Connectivity": "Bluetooth 5.0",
        "Noise Cancellation": "Active",
        "Weight": "250g",
        "Drivers": "40mm Dynamic",
        "Frequency Response": "20Hz - 20kHz"
      },
      reviews: [
        {
          name: "Alex Chen",
          rating: 5,
          comment: "Exceptional sound quality and comfort. Perfect for long listening sessions."
        },
        {
          name: "Sarah Johnson",
          rating: 4,
          comment: "Great noise cancellation, though the bass could be slightly stronger."
        }
      ]
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: "$199",
      originalPrice: "$249",
      description: "Track your fitness goals with our advanced smart fitness tracker featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
      badge: "Trending",
      specifications: {
        "Battery Life": "7 days",
        "Connectivity": "Bluetooth 5.0",
        "Water Resistance": "5ATM",
        "Weight": "25g",
        "Display": "1.4 inch AMOLED",
        "Sensors": "Heart Rate, GPS, Accelerometer"
      },
      reviews: [
        {
          name: "Mike Wilson",
          rating: 5,
          comment: "Excellent tracking accuracy and the battery life is impressive."
        },
        {
          name: "Emma Davis",
          rating: 4,
          comment: "Great features, but the app could be more intuitive."
        }
      ]
    },
    {
      id: 3,
      name: "4K Action Camera",
      price: "$449",
      originalPrice: "$499",
      description: "Capture your adventures in stunning 4K resolution with our rugged action camera featuring image stabilization and waterproof design.",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
      badge: "",
      specifications: {
        "Resolution": "4K at 30fps",
        "Waterproof": "Up to 30m",
        "Battery Life": "2 hours",
        "Weight": "120g",
        "Stabilization": "Electronic Image Stabilization",
        "Storage": "MicroSD up to 128GB"
      },
      reviews: [
        {
          name: "David Chen",
          rating: 5,
          comment: "Amazing video quality and the stabilization is incredible."
        },
        {
          name: "Lisa Park",
          rating: 4,
          comment: "Great camera, but battery life could be longer."
        }
      ]
    },
    {
      id: 4,
      name: "IoT Temperature Sensor",
      price: "$89",
      originalPrice: "$119",
      description: "Monitor temperature and humidity with our smart IoT sensor featuring wireless connectivity and long battery life.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
      badge: "New",
      specifications: {
        "Temperature Range": "-40°C to 125°C",
        "Accuracy": "±0.5°C",
        "Battery Life": "1 year",
        "Connectivity": "WiFi + Bluetooth",
        "Range": "100m line of sight",
        "Humidity": "0-100% RH"
      },
      reviews: [
        {
          name: "Tom Anderson",
          rating: 4,
          comment: "Very accurate readings and easy to set up."
        },
        {
          name: "Rachel Green",
          rating: 5,
          comment: "Perfect for monitoring my greenhouse temperature."
        }
      ]
    },
    {
      id: 5,
      name: "Smart Home Hub",
      price: "$179",
      originalPrice: "$199",
      description: "Control all your smart home devices from one central hub with voice commands and mobile app integration.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      badge: "",
      specifications: {
        "Connectivity": "WiFi, Zigbee, Z-Wave",
        "Voice Control": "Yes",
        "Compatibility": "1000+ devices",
        "Range": "150m",
        "Power": "AC Adapter",
        "Dimensions": "120x120x30mm"
      },
      reviews: [
        {
          name: "John Smith",
          rating: 5,
          comment: "Seamlessly integrates with all my smart devices."
        },
        {
          name: "Maria Garcia",
          rating: 4,
          comment: "Great hub, but setup could be simpler."
        }
      ]
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      price: "$59",
      originalPrice: "$79",
      description: "Charge your devices wirelessly with our fast charging pad featuring LED indicators and safety protection.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      badge: "Trending",
      specifications: {
        "Output Power": "15W",
        "Compatibility": "Qi Standard",
        "Charging Speed": "Fast Charge 2.0",
        "LED Indicator": "Yes",
        "Safety": "Overcharge Protection",
        "Material": "Silicone + ABS"
      },
      reviews: [
        {
          name: "Kevin Lee",
          rating: 4,
          comment: "Fast charging and reliable, good value for money."
        },
        {
          name: "Sophie Brown",
          rating: 5,
          comment: "Works perfectly with my iPhone and Samsung."
        }
      ]
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: "$129",
      originalPrice: "$159",
      description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
      badge: "",
      specifications: {
        "Power Output": "20W",
        "Battery Life": "12 hours",
        "Waterproof": "IPX7",
        "Connectivity": "Bluetooth 5.0",
        "Range": "30m",
        "Weight": "500g"
      },
      reviews: [
        {
          name: "Alex Turner",
          rating: 5,
          comment: "Amazing sound quality and great battery life."
        },
        {
          name: "Emma Wilson",
          rating: 4,
          comment: "Perfect for outdoor parties, very durable."
        }
      ]
    },
    {
      id: 8,
      name: "Smart Watch Pro",
      price: "$399",
      originalPrice: "$449",
      description: "Advanced smartwatch with health monitoring, GPS tracking, and cellular connectivity for ultimate freedom.",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
      badge: "New",
      specifications: {
        "Display": "1.7 inch AMOLED",
        "Battery Life": "2 days",
        "Water Resistance": "5ATM",
        "Connectivity": "4G LTE + WiFi",
        "Sensors": "Heart Rate, ECG, Blood Oxygen",
        "Storage": "32GB"
      },
      reviews: [
        {
          name: "Sarah Connor",
          rating: 5,
          comment: "The health monitoring features are incredible."
        },
        {
          name: "Michael Johnson",
          rating: 4,
          comment: "Great watch, but battery life could be longer."
        }
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id)) || products[0];

  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden">
      <Navbar />
      <ProductShowcase product={product} />
      <ProductTabs product={product} />
      <RecommendedProducts />
      <Footer />
    </div>
  );
};

export default ProductDetails;
