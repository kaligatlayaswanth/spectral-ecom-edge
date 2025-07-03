
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const OrderSummary = ({ subtotal, shipping, tax, total }: OrderSummaryProps) => {
  return (
    <div className="sticky top-24">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 animate-fade-in">
        <h3 className="text-2xl font-bold font-poppins text-white mb-6">
          Order Summary
        </h3>

        <div className="space-y-4 mb-6">
          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Subtotal</span>
            <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Shipping</span>
            <span className="text-white font-medium">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          
          {shipping === 0 && (
            <p className="text-xs text-green-400 text-right">
              Free shipping on orders over $500
            </p>
          )}

          {/* Tax */}
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Tax</span>
            <span className="text-white font-medium">${tax.toFixed(2)}</span>
          </div>

          {/* Separator */}
          <div className="border-t border-white/20 my-4"></div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white">Total</span>
            <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 py-4 text-lg font-medium group">
          <Lock className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Proceed to Checkout
        </Button>

        {/* Security Note */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Secure SSL encryption • Your data is protected
        </p>
      </div>
    </div>
  );
};
