import { useState } from "react";

const products = [
  {
    name: "Apple iPhone 15 Pro",
    price: "$999",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    tag: { type: "new", label: "NEW", tooltip: "Brand New" },
  },
  {
    name: "Sony WH-1000XM5",
    price: "$399",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    tag: { type: "most", label: "Most Selling", tooltip: "Best Seller" },
  },
  {
    name: "Samsung Galaxy Watch 6",
    price: "$349",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=400&fit=crop",
    tag: { type: "upcoming", label: "Upcoming", tooltip: "Coming Soon" },
  },
  {
    name: "GoPro HERO12 Black",
    price: "$449",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop",
    tag: { type: "most", label: "Most Selling", tooltip: "Best Seller" },
  },
  {
    name: "Bose QuietComfort Ultra",
    price: "$429",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop",
    tag: { type: "new", label: "NEW", tooltip: "Brand New" },
  },
  {
    name: "Apple MacBook Air M2",
    price: "$1199",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    tag: { type: "upcoming", label: "Upcoming", tooltip: "Coming Soon" },
  },
  {
    name: "Canon EOS R10",
    price: "$979",
    image: "https://images.unsplash.com/photo-1519183071298-a2962be56693?w=400&h=400&fit=crop",
    tag: { type: "most", label: "Most Selling", tooltip: "Best Seller" },
  },
  {
    name: "JBL Flip 6 Speaker",
    price: "$129",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
    tag: { type: "new", label: "NEW", tooltip: "Brand New" },
  },
  {
    name: "Fitbit Charge 6",
    price: "$159",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop",
    tag: { type: "upcoming", label: "Upcoming", tooltip: "Coming Soon" },
  },
  {
    name: "Logitech MX Master 3S",
    price: "$99",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    tag: { type: "most", label: "Most Selling", tooltip: "Best Seller" },
  }
];

const tagIcons = {
  new: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path d="M10 2v2m0 12v2m8-8h-2M4 10H2m13.07-5.07l-1.42 1.42M6.34 17.66l-1.42-1.42m12.02 0l-1.42-1.42M6.34 4.34L4.92 2.92"/></svg>
  ),
  most: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path d="M3 17l6-6 4 4 8-8"/><circle cx="7" cy="17" r="1.5"/><circle cx="13" cy="13" r="1.5"/><circle cx="19" cy="7" r="1.5"/></svg>
  ),
  upcoming: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l3 3"/></svg>
  ),
};

export const HeroProductsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-screen h-40 flex items-center overflow-x-hidden overflow-y-hidden bg-transparent relative">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 flex animate-marquee-loop h-full${isPaused ? " paused" : ""}`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Render two identical rows for seamless looping */}
          {[0, 1].map(rowIdx => (
            <div className="flex gap-8 min-w-fit" key={rowIdx}>
              {products.map((product, idx) => {
                const isHovered = hoveredIdx === `${rowIdx}-${idx}`;
                return (
                  <div
                    key={idx}
                    className={`relative flex items-center justify-center h-32 md:h-40 min-w-[8rem] rounded-xl bg-white/10 border border-white/20 shadow-md overflow-visible group transition-all duration-300 cursor-pointer hover:z-20 w-32 md:w-40`}
                    onMouseEnter={() => { setIsPaused(true); setHoveredIdx(`${rowIdx}-${idx}`); }}
                    onMouseLeave={() => { setIsPaused(false); setHoveredTag(null); setHoveredIdx(null); }}
                    style={{ transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)' }}
                  >
                    {/* Tag icon */}
                    <div
                      className="absolute top-2 left-2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/70 backdrop-blur border border-white/20 cursor-pointer group/tag"
                      onMouseEnter={e => { e.stopPropagation(); setHoveredTag(`${rowIdx}-${idx}`); }}
                      onMouseLeave={e => { e.stopPropagation(); setHoveredTag(null); }}
                    >
                      {tagIcons[product.tag.type]}
                      {/* Tooltip */}
                      {hoveredTag === `${rowIdx}-${idx}` && isHovered && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 rounded bg-black text-white text-xs font-medium shadow-lg whitespace-nowrap z-30 animate-fade-in">
                          {product.tag.tooltip}
                        </div>
                      )}
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ background: 'white' }}
                    />
                    {/* Name box attached to right on hover */}
                    {isHovered && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 flex flex-col items-start bg-white/90 border border-black/10 shadow-2xl rounded-xl px-5 py-3 min-w-[8rem] max-w-[18rem] animate-slide-in-right z-30" style={{backdropFilter:'blur(8px)'}}>
                        <span className="text-black text-base md:text-lg font-bold whitespace-nowrap mb-1">{product.name}</span>
                        <span className="text-black text-sm md:text-base font-semibold whitespace-nowrap">{product.price}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          animation: marquee-loop 24s linear infinite;
        }
        .animate-marquee-loop.paused {
          animation-play-state: paused !important;
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px) translateY(-50%); }
          to { opacity: 1; transform: translateX(0) translateY(-50%); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </div>
  );
}; 