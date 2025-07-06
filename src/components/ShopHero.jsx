export const ShopHero = () => {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="relative text-5xl md:text-7xl font-extrabold font-poppins uppercase bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-wide drop-shadow-[0_2px_24px_rgba(255,255,255,0.15)] inline-block transition-all duration-300 hover:drop-shadow-[0_4px_32px_rgba(255,255,255,0.35)] hover:scale-105 hover:-translate-y-1 cursor-pointer group leading-tight">
            Browse Our Electronics
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Collection
              </span>
              <span className="block h-1 w-24 bg-gradient-to-r from-white/80 to-white/10 rounded-full mt-2 mx-auto transition-all duration-300 group-hover:w-40 group-hover:bg-white/80" />
            </span>
          </h1>
        </div>
      </div>
      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};
