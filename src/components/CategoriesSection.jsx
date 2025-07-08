import { useEffect, useState } from "react";
import { Smartphone, Camera, Wifi, Home, Headphones, Watch, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  "Smartwatches": Watch,
  "Cameras": Camera,
  "IoT Sensors": Wifi,
  "Smart Home": Home,
  "Audio Devices": Headphones,
  "Mobile Tech": Smartphone,
};

export const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/categories/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading categories...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section id="categories" className="py-32 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-white mb-6">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our curated collection of premium electronics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = iconMap[category.name] || Tag;
            return (
              <div
                key={category.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/shop?category=${category.id}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold font-poppins text-white mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {category.description || "Explore our products in this category."}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
