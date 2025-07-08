import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/recommended-products/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recommended products");
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

  if (loading) return <div className="text-white text-center py-10">Loading recommended products...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-white mb-6">
            Recommended Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hand-picked electronics for the modern innovator
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {products.map((rec, index) => (
              <div
                key={rec.id}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/product/${rec.product.id}`)}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={rec.product.image && !rec.product.image.startsWith('http') ? `http://127.0.0.1:8000${rec.product.image}` : rec.product.image}
                    alt={rec.product.name}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm text-gray-400 font-medium">{rec.product.brand}</span>
                  <h3 className="text-xl font-semibold font-poppins text-white group-hover:text-gray-200 transition-colors duration-300">
                    {rec.product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    {/* You can add price or other info here if available */}
                    <button className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white rounded-full transition-all duration-300 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
