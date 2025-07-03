
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: string;
  name: string;
  description: string;
  specifications: Record<string, string>;
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
  }>;
}

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? 'text-black' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2">
            <TabsTrigger 
              value="description" 
              className="text-white font-medium rounded-full data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="text-white font-medium rounded-full data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="text-white font-medium rounded-full data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-12 animate-fade-in">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                Product Description
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  {product.description}
                </p>
                <p>
                  Our premium wireless headphones deliver exceptional audio quality with advanced noise cancellation technology. 
                  Perfect for professionals, audiophiles, and anyone who values superior sound quality.
                </p>
                <p>
                  Features include premium materials, ergonomic design for extended comfort, and intelligent adaptive sound 
                  that adjusts to your environment automatically.
                </p>
              </div>
              
              <button className="mt-8 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Download Datasheet
              </button>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-12 animate-fade-in">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300 font-medium">{key}</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-12 animate-fade-in">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                Customer Reviews
              </h3>
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{review.name}</h4>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Write a Review
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
