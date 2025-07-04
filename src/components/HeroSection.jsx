import { HeroProductsMarquee } from "./HeroProductsMarquee";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden pt-20"
      style={{ minHeight: '100vh' }}
    >
      {/* Smart IoT Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated SVG network grid */}
        <svg className="absolute inset-0 w-full h-full" style={{opacity:0.18}} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridLine" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="#00FFF0" stopOpacity="0.5" />
              <stop offset="1" stopColor="#007CF0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Vertical lines */}
          {Array.from({length: 25}).map((_,i) => (
            <line key={i} x1={i*60} y1="0" x2={i*60} y2="900" stroke="url(#gridLine)" strokeWidth="1" />
          ))}
          {/* Horizontal lines */}
          {Array.from({length: 16}).map((_,i) => (
            <line key={100+i} x1="0" y1={i*60} x2="1440" y2={i*60} stroke="url(#gridLine)" strokeWidth="1" />
          ))}
          {/* Animated glowing nodes */}
          <circle cx="300" cy="200" r="6" fill="#00FFF0">
            <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="600" r="8" fill="#00FFF0">
            <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="300" r="5" fill="#00FFF0">
            <animate attributeName="r" values="5;10;5" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
        {/* Subtle blue glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-800/10 to-black/80" />
      </div>

      <div className="w-full max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center flex-1">
        <div className="animate-fade-in mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold font-poppins text-white mb-4 leading-tight drop-shadow-lg">
            Discover the Future
            <br />
            <span className="text-white font-black">of Electronics</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Shop the latest gadgets, smart devices, and premium tech from the world's top brands. Elevate your lifestyle with innovation.
          </p>
          <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto font-normal">
            Free shipping on orders over $100 · 24/7 support · Secure checkout
          </p>
          <button className="group px-10 py-3 border-2 border-white text-white rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-500 text-lg font-semibold shadow-lg hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              Shop Now
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
        {/* Marquee as a horizontal strip - break out of container */}
        <div className="relative w-full h-32 flex items-center justify-center mt-16" style={{zIndex: 20}}>
          <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full flex items-center">
            <HeroProductsMarquee />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade (grayscale) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
