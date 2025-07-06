import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-white/30 transition-all duration-500 hover:scale-105 hover:border-white/40 h-[520px] w-full flex flex-col cursor-pointer"
      onClick={handleProductClick}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/80 text-black text-xs font-semibold rounded-full shadow-lg border border-white/40 tracking-wide">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="flex items-center justify-center bg-gradient-to-br from-white/10 to-black/10 h-72 p-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4 flex flex-col justify-end flex-1">
        <h3 className="text-xl font-bold font-poppins text-white group-hover:text-gray-200 transition-colors duration-300 truncate">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white drop-shadow">
            {product.price}
          </span>
        </div>
        <button 
          className="w-full group/btn px-6 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm bg-white/5 hover:scale-105 transform shadow hover:shadow-white/30 mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart functionality here
            console.log(`Added ${product.name} to cart`);
          }}
        >
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
