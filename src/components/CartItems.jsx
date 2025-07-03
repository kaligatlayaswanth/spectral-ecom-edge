import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CartItems = ({ items, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold font-poppins text-white">
          Cart Items ({items.length})
        </h2>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
            onClick={onClearCart}
          >
            Clear Cart
          </Button>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow space-y-2">
                <h3 className="text-xl font-bold text-white font-poppins">
                  {item.name}
                </h3>
                <p className="text-2xl font-bold text-white">
                  ${item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/10 rounded-full border border-white/20">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="px-4 py-2 text-white font-medium min-w-[3rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[6rem]">
                  <p className="text-lg font-bold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 hover:bg-red-500/20 rounded-full transition-colors duration-200 group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
