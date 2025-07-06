import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Star, ShoppingCart, ArrowLeft, Share2, Shield, Truck, RotateCcw, Eye, ChevronRight } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data - in real app this would come from API
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$349",
      description: "Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation and 30-hour battery life.",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "New",
      rating: 4.8,
      reviewCount: 127,
      inStock: true,
      specifications: {
        "Battery Life": "30 hours",
        "Connectivity": "Bluetooth 5.0",
        "Noise Cancellation": "Active",
        "Weight": "250g",
        "Drivers": "40mm Dynamic",
        "Frequency Response": "20Hz - 20kHz"
      },
      reviews: [
        {
          name: "Alex Chen",
          rating: 5,
          date: "2 days ago",
          comment: "Exceptional sound quality and comfort. Perfect for long listening sessions."
        },
        {
          name: "Sarah Johnson",
          rating: 4,
          date: "1 week ago",
          comment: "Great noise cancellation, though the bass could be slightly stronger."
        },
        {
          name: "Mike Wilson",
          rating: 5,
          date: "2 weeks ago",
          comment: "Amazing build quality and the battery life is incredible!"
        }
      ]
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: "$199",
      originalPrice: "$249",
      description: "Track your fitness goals with our advanced smart fitness tracker featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
      images: [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "Trending",
      rating: 4.6,
      reviewCount: 89,
      inStock: true,
      specifications: {
        "Battery Life": "7 days",
        "Connectivity": "Bluetooth 5.0",
        "Water Resistance": "5ATM",
        "Weight": "25g",
        "Display": "1.4 inch AMOLED",
        "Sensors": "Heart Rate, GPS, Accelerometer"
      },
      reviews: [
        {
          name: "Mike Wilson",
          rating: 5,
          date: "3 days ago",
          comment: "Excellent tracking accuracy and the battery life is impressive."
        },
        {
          name: "Emma Davis",
          rating: 4,
          date: "1 week ago",
          comment: "Great features, but the app could be more intuitive."
        },
        {
          name: "David Chen",
          rating: 5,
          date: "2 weeks ago",
          comment: "Perfect for my daily workouts and sleep tracking!"
        }
      ]
    },
    {
      id: 3,
      name: "4K Action Camera",
      price: "$449",
      originalPrice: "$499",
      description: "Capture your adventures in stunning 4K resolution with our rugged action camera featuring image stabilization and waterproof design.",
      images: [
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1510127034890-4a4c9e1955b9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "Best Seller",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      specifications: {
        "Resolution": "4K at 30fps",
        "Waterproof": "Up to 30m",
        "Battery Life": "2 hours",
        "Weight": "120g",
        "Stabilization": "Electronic Image Stabilization",
        "Storage": "MicroSD up to 128GB"
      },
      reviews: [
        {
          name: "David Chen",
          rating: 5,
          date: "1 day ago",
          comment: "Amazing video quality and the stabilization is incredible."
        },
        {
          name: "Lisa Park",
          rating: 4,
          date: "1 week ago",
          comment: "Great camera, but battery life could be longer."
        },
        {
          name: "Tom Anderson",
          rating: 5,
          date: "2 weeks ago",
          comment: "Perfect for my surfing adventures!"
        }
      ]
    },
    {
      id: 4,
      name: "IoT Temperature Sensor",
      price: "$89",
      originalPrice: "$119",
      description: "Monitor temperature and humidity with our smart IoT sensor featuring wireless connectivity and long battery life.",
      images: [
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "New",
      rating: 4.7,
      reviewCount: 56,
      inStock: true,
      specifications: {
        "Temperature Range": "-40°C to 125°C",
        "Accuracy": "±0.5°C",
        "Battery Life": "1 year",
        "Connectivity": "WiFi + Bluetooth",
        "Range": "100m line of sight",
        "Humidity": "0-100% RH"
      },
      reviews: [
        {
          name: "Tom Anderson",
          rating: 4,
          date: "4 days ago",
          comment: "Very accurate readings and easy to set up."
        },
        {
          name: "Rachel Green",
          rating: 5,
          date: "1 week ago",
          comment: "Perfect for monitoring my greenhouse temperature."
        },
        {
          name: "Sarah Johnson",
          rating: 5,
          date: "2 weeks ago",
          comment: "Great for home automation projects!"
        }
      ]
    },
    {
      id: 5,
      name: "Smart Home Hub",
      price: "$179",
      originalPrice: "$199",
      description: "Control all your smart home devices from one central hub with voice commands and mobile app integration.",
      images: [
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "Popular",
      rating: 4.5,
      reviewCount: 78,
      inStock: true,
      specifications: {
        "Connectivity": "WiFi, Zigbee, Z-Wave",
        "Voice Control": "Yes",
        "Compatibility": "1000+ devices",
        "Range": "150m",
        "Power": "AC Adapter",
        "Dimensions": "120x120x30mm"
      },
      reviews: [
        {
          name: "John Smith",
          rating: 5,
          date: "2 days ago",
          comment: "Seamlessly integrates with all my smart devices."
        },
        {
          name: "Maria Garcia",
          rating: 4,
          date: "1 week ago",
          comment: "Great hub, but setup could be simpler."
        },
        {
          name: "Alex Chen",
          rating: 5,
          date: "2 weeks ago",
          comment: "Perfect for my smart home setup!"
        }
      ]
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      price: "$59",
      originalPrice: "$79",
      description: "Charge your devices wirelessly with our fast charging pad featuring LED indicators and safety protection.",
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "Trending",
      rating: 4.4,
      reviewCount: 92,
      inStock: true,
      specifications: {
        "Output Power": "15W",
        "Compatibility": "Qi Standard",
        "Charging Speed": "Fast Charge 2.0",
        "LED Indicator": "Yes",
        "Safety": "Overcharge Protection",
        "Material": "Silicone + ABS"
      },
      reviews: [
        {
          name: "Kevin Lee",
          rating: 4,
          date: "3 days ago",
          comment: "Fast charging and reliable, good value for money."
        },
        {
          name: "Sophie Brown",
          rating: 5,
          date: "1 week ago",
          comment: "Works perfectly with my iPhone and Samsung."
        },
        {
          name: "Mike Wilson",
          rating: 4,
          date: "2 weeks ago",
          comment: "Great charging pad for the price!"
        }
      ]
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: "$129",
      originalPrice: "$159",
      description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life.",
      images: [
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "Best Value",
      rating: 4.6,
      reviewCount: 145,
      inStock: true,
      specifications: {
        "Power Output": "20W",
        "Battery Life": "12 hours",
        "Waterproof": "IPX7",
        "Connectivity": "Bluetooth 5.0",
        "Range": "30m",
        "Weight": "500g"
      },
      reviews: [
        {
          name: "Alex Turner",
          rating: 5,
          date: "1 day ago",
          comment: "Amazing sound quality and great battery life."
        },
        {
          name: "Emma Wilson",
          rating: 4,
          date: "1 week ago",
          comment: "Perfect for outdoor parties, very durable."
        },
        {
          name: "David Chen",
          rating: 5,
          date: "2 weeks ago",
          comment: "Great portable speaker for the beach!"
        }
      ]
    },
    {
      id: 8,
      name: "Smart Watch Pro",
      price: "$399",
      originalPrice: "$449",
      description: "Advanced smartwatch with health monitoring, GPS tracking, and cellular connectivity for ultimate freedom.",
      images: [
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
      ],
      badge: "New",
      rating: 4.8,
      reviewCount: 167,
      inStock: true,
      specifications: {
        "Display": "1.7 inch AMOLED",
        "Battery Life": "2 days",
        "Water Resistance": "5ATM",
        "Connectivity": "4G LTE + WiFi",
        "Sensors": "Heart Rate, ECG, Blood Oxygen",
        "Storage": "32GB"
      },
      reviews: [
        {
          name: "Sarah Connor",
          rating: 5,
          date: "2 days ago",
          comment: "The health monitoring features are incredible."
        },
        {
          name: "Michael Johnson",
          rating: 4,
          date: "1 week ago",
          comment: "Great watch, but battery life could be longer."
        },
        {
          name: "Lisa Park",
          rating: 5,
          date: "2 weeks ago",
          comment: "Perfect for tracking my fitness goals!"
        }
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Left Arrow */}
                  {product.images.length > 1 && (
                    <button
                      onClick={() => setSelectedImage((prev) => Math.max(0, prev - 1))}
                      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full border border-gray-200 hover:bg-white transition-all duration-200 ${selectedImage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={selectedImage === 0}
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                  )}
                  {/* Right Arrow */}
                  {product.images.length > 1 && (
                    <button
                      onClick={() => setSelectedImage((prev) => Math.min(product.images.length - 1, prev + 1))}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full border border-gray-200 hover:bg-white transition-all duration-200 ${selectedImage === product.images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={selectedImage === product.images.length - 1}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  )}
                </div>
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {product.badge}
                  </div>
                )}
                
                {/* Zoom Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white transition-all duration-200">
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-blue-600 ring-2 ring-blue-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-8">
              {/* Product Header */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Free shipping • 30-day returns
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-900">Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-600">−</span>
                    </button>
                    <span className="px-6 py-3 text-lg font-medium text-gray-900 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-600">+</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      isWishlisted
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <button className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share Product</span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">30 Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-8 px-8">
                {[
                  { id: "description", label: "Description" },
                  { id: "specifications", label: "Specifications" },
                  { id: "reviews", label: "Reviews" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-6 px-2 border-b-2 font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      {product.description}
                    </p>
                    <p>
                      Our premium products are designed with cutting-edge technology and superior craftsmanship. 
                      Each item undergoes rigorous quality control to ensure exceptional performance and durability.
                    </p>
                    <p>
                      Features include premium materials, ergonomic design for extended comfort, and intelligent 
                      adaptive technology that enhances your experience automatically.
                    </p>
                  </div>
                  <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium">
                    Download Datasheet
                  </button>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">{key}</span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Write a Review
                    </button>
                  </div>
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex">{renderStars(review.rating)}</div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
