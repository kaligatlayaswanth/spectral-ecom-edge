
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmptyCart = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. 
            Discover our amazing electronics collection.
          </p>
        </div>

        <Button
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-medium"
          onClick={() => window.location.href = '/shop'}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
};
