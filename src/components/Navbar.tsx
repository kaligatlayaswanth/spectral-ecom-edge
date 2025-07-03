
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-poppins text-white">
            <a href="/">ElectroLux</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`transition-colors duration-200 font-medium ${
                location.pathname === "/" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="/shop"
              className={`transition-colors duration-200 font-medium ${
                location.pathname === "/shop" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Shop
            </a>
            <a
              href="#categories"
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Categories
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          <button className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};
