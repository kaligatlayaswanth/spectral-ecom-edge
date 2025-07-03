
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
  const product = {
    id: id || "1",
    name: "Premium Wireless Headphones",
    price: "$299",
    originalPrice: "$349",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center",
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
  };

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
