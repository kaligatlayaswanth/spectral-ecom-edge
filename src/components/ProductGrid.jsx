
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { FilterSidebar } from "./FilterSidebar";

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299",
    image: "/placeholder.svg",
    badge: "New"
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: "$199",
    image: "/placeholder.svg",
    badge: "Trending"
  },
  {
    id: 3,
    name: "4K Action Camera",
    price: "$449",
    image: "/placeholder.svg",
    badge: ""
  },
  {
    id: 4,
    name: "IoT Temperature Sensor",
    price: "$89",
    image: "/placeholder.svg",
    badge: "New"
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: "$179",
    image: "/placeholder.svg",
    badge: ""
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: "$59",
    image: "/placeholder.svg",
    badge: "Trending"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "$129",
    image: "/placeholder.svg",
    badge: ""
  },
  {
    id: 8,
    name: "Smart Watch Pro",
    price: "$399",
    image: "/placeholder.svg",
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
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-poppins text-white">
            All Products ({products.length})
          </h2>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
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
