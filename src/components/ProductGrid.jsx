import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { FilterSidebar } from "./FilterSidebar";

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: "$199",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    badge: "Trending"
  },
  {
    id: 3,
    name: "4K Action Camera",
    price: "$449",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 4,
    name: "IoT Temperature Sensor",
    price: "$89",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: "$179",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: "$59",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    badge: "Trending"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "$129",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 8,
    name: "Smart Watch Pro",
    price: "$399",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  }
];

export const ProductGrid = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Toggle Button */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="relative text-4xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-wide uppercase drop-shadow-[0_2px_24px_rgba(255,255,255,0.15)] inline-block transition-all duration-300 hover:drop-shadow-[0_4px_32px_rgba(255,255,255,0.35)] hover:scale-105 hover:-translate-y-1 cursor-pointer group">
              All Products <span className="text-white/50 font-normal text-2xl align-top">({products.length})</span>
              <span className="block h-1 w-20 bg-gradient-to-r from-white/80 to-white/10 rounded-full mt-3 mb-1 transition-all duration-300 group-hover:w-32 group-hover:bg-white/80" />
            </h2>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium lg:hidden"
          >
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 p-2 md:p-6 animate-fade-in-up items-stretch">
              {currentProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full border transition-all duration-300 font-medium ${
                      currentPage === page
                        ? 'bg-white text-black border-white'
                        : 'border-white/30 text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
