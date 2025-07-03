
import { ProductCard } from "./ProductCard";

const recommendedProducts = [
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: "$199",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    badge: "Trending"
  },
  {
    id: 3,
    name: "4K Action Camera",
    price: "$449",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
    badge: ""
  },
  {
    id: 4,
    name: "IoT Temperature Sensor",
    price: "$89",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    badge: "New"
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: "$179",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center",
    badge: ""
  }
];

export const RecommendedProducts = () => {
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
            {recommendedProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
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
