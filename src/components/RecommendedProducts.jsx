import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const RecommendedProducts = () => {
  const [recommended, setRecommended] = useState([]);
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
        setRecommended(data);
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
    <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            You Might Also Like
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover more innovative electronics that complement your selection
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {recommended.map((rec, index) => (
              <div
                key={rec.id}
                className="flex-shrink-0 w-80 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/product/${rec.product.id}`)}
              >
                <ProductCard product={rec.product} />
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
