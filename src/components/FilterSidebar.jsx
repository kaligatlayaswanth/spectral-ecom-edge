import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate, useLocation } from "react-router-dom";

export const FilterSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedCategory = query.get("category");

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
    <div className="w-64 space-y-6 bg-gradient-to-b from-neutral-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
      {/* Categories Filter */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h3 className="text-lg font-semibold font-poppins text-white">Categories</h3>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center space-x-3 cursor-pointer ${selectedCategory === String(category.id) ? 'text-white font-bold' : ''}`}
              onClick={() => navigate(`/shop?category=${category.id}`)}
            >
              <span className={`w-3 h-3 rounded-full border-2 ${selectedCategory === String(category.id) ? 'bg-white border-white' : 'border-white/30'}`}></span>
              <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                {category.name}
              </span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
