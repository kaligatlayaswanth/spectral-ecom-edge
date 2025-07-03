export const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-gradient-to-b from-neutral-900 to-black rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold font-poppins text-white group-hover:text-gray-200 transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {product.price}
          </span>
        </div>

        <button className="w-full group/btn px-6 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm bg-white/5 hover:scale-105 transform">
          <span className="flex items-center justify-center gap-2">
            Add to Cart
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5H16M16 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m12 0a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
