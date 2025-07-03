
import { Navbar } from "@/components/Navbar";
import { ShopHero } from "@/components/ShopHero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden">
      <Navbar />
      <ShopHero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Shop;
