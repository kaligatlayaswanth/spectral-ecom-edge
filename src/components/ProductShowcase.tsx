
import { useState } from "react";
import { Heart, ZoomIn, Minus, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  badge?: string;
}

interface ProductShowcaseProps {
  product: Product;
}

export const ProductShowcase = ({ product }: ProductShowcaseProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white via-gray-100 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Product Image */}
          <div className="relative group animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20">
              {product.badge && (
                <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/80 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                  {product.badge}
                </div>
              )}
              
              <div
                className={`relative aspect-square p-12 cursor-zoom-in transition-transform duration-500 ${
                  isZoomed ? 'scale-125' : 'group-hover:scale-105'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter grayscale transition-all duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/30">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-black leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-black">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-lg font-medium text-black">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-6 py-3 text-lg font-medium text-black min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="flex-1 group px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                <span className="flex items-center justify-center gap-2">
                  Add to Cart
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border-2 rounded-full transition-all duration-300 hover:scale-105 transform ${
                  isWishlisted
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
                }`}
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
