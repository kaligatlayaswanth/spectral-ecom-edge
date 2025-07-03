
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
