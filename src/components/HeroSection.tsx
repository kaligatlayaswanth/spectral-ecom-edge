
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-b from-black via-neutral-900 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-float delay-1000 blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-float delay-2000 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-float delay-500 blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold font-poppins text-white mb-6 leading-tight">
            Next-Gen
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Electronics.
            </span>
            <br />
            Delivered.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Smart gadgets, IoT sensors, and future-ready tech — curated for innovators.
          </p>

          <button className="group px-12 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 text-lg font-medium backdrop-blur-sm bg-white/5 hover:scale-105 transform">
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
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
