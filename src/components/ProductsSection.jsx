
const products = [
  {
    name: "SmartWatch Pro X",
    price: "$299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    category: "Wearables"
  },
  {
    name: "4K Action Camera",
    price: "$449",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
    category: "Cameras"
  },
  {
    name: "IoT Temperature Sensor",
    price: "$89",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    category: "IoT Devices"
  },
  {
    name: "Smart Hub Controller",
    price: "$199",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center",
    category: "Smart Home"
  },
  {
    name: "Wireless Headphones",
    price: "$329",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    category: "Audio"
  },
  {
    name: "Gaming Smartphone",
    price: "$899",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    category: "Mobile"
  }
];

export const ProductsSection = () => {
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
            {products.map((product, index) => (
              <div
                key={product.name}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-sm text-gray-400 font-medium">{product.category}</span>
                  <h3 className="text-xl font-semibold font-poppins text-white group-hover:text-gray-200 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white rounded-full transition-all duration-300 text-sm font-medium">
                      Add to Cart
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
