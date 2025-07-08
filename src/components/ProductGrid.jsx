import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { FilterSidebar } from "./FilterSidebar";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const query = useQuery();
  const categoryId = query.get("category");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter products by category if categoryId is present
  const filteredProducts = categoryId
    ? products.filter((product) =>
        product.categories && product.categories.some((cat) => String(cat.id) === String(categoryId))
      )
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) return <div className="text-white text-center py-10">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Toggle Button */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="relative text-4xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-wide uppercase drop-shadow-[0_2px_24px_rgba(255,255,255,0.15)] inline-block transition-all duration-300 hover:drop-shadow-[0_4px_32px_rgba(255,255,255,0.35)] hover:scale-105 hover:-translate-y-1 cursor-pointer group">
              All Products <span className="text-white/50 font-normal text-2xl align-top">({filteredProducts.length})</span>
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
              {currentProducts.map((product) => (
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
