import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  // Handle image URL (prepend backend host if needed)
  let imageUrl = product.image;
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = `http://127.0.0.1:8000${imageUrl}`;
  }
  // Fallback image
  const fallbackImage = "/placeholder.svg";
  const [imgSrc, setImgSrc] = useState(imageUrl || fallbackImage);
  const navigate = useNavigate();

  return (
    <div
      className="group flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-white/30 transition-all duration-500 hover:scale-105 hover:border-white/40 min-h-[420px] max-w-md mx-auto cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/80 text-black text-xs font-semibold rounded-full shadow-lg border border-white/40 tracking-wide">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="flex items-center justify-center bg-gradient-to-br from-white/10 to-black/10 h-56 p-6">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl bg-white"
          onError={() => setImgSrc(fallbackImage)}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="text-xl font-bold font-poppins text-white group-hover:text-gray-200 transition-colors duration-300 break-words whitespace-normal">
          {product.name}
        </h3>
        <div className="text-cyan-300 text-base font-semibold break-words whitespace-normal">{product.brand}</div>
        {product.categories && product.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {product.categories.map(cat => (
              <span key={cat.id} className="px-2 py-1 bg-cyan-700 text-xs rounded-full text-white/80">{cat.name}</span>
            ))}
          </div>
        )}
        <div className="flex-1" /> {/* Spacer to push button to bottom */}
        <button
          className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 w-full"
          onClick={e => { e.stopPropagation(); navigate('/book-now'); }}
        >
          Book it
        </button>
      </div>
    </div>
  );
};
