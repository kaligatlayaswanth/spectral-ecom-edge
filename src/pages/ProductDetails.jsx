import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ChevronRight } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://backendec-g9oj.onrender.com/products/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product details");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white text-center py-10">Loading product details...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!product) return null;

  let imageUrl = product.image;
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = `https://backendec-g9oj.onrender.com${imageUrl}`;
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/shop" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Shop</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      {/* Main Product Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
            {imageUrl && (
              <img src={imageUrl} alt={product.name} className="w-full max-w-xs rounded-2xl shadow-xl object-contain bg-white/10" />
            )}
          </div>
          {/* Product Info */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-black mb-2">{product.name}</h1>
            <div className="text-cyan-700 text-lg font-semibold mb-2">{product.brand}</div>
            {product.categories && product.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {product.categories.map(cat => (
                  <span key={cat.id} className="px-2 py-1 bg-cyan-700 text-xs rounded-full text-white/80">{cat.name}</span>
                ))}
              </div>
            )}
            <div className="text-gray-700 text-lg mb-4">{product.description}</div>
            <button
              className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg"
              onClick={() => navigate('/book-now')}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
