
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = [
    "Headphones",
    "Smart Watches",
    "Cameras",
    "IoT Devices",
    "Smart Home",
    "Audio Devices"
  ];

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
            <div key={category} className="flex items-center space-x-3">
              <Checkbox id={category} className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black" />
              <label
                htmlFor={category}
                className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors duration-200"
              >
                {category}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range Filter */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h3 className="text-lg font-semibold font-poppins text-white">Price Range</h3>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Availability Filter */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h3 className="text-lg font-semibold font-poppins text-white">Availability</h3>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-4">
          <div className="flex items-center space-x-3">
            <Checkbox id="in-stock" className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <label
              htmlFor="in-stock"
              className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors duration-200"
            >
              In Stock
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="pre-order" className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <label
              htmlFor="pre-order"
              className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors duration-200"
            >
              Pre-order
            </label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Clear Filters Button */}
      <button className="w-full px-4 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm">
        Clear All Filters
      </button>
    </div>
  );
};
