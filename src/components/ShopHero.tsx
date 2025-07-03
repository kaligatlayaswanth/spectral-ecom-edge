
export const ShopHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white via-gray-100 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-black mb-6 leading-tight">
            Browse Our Electronics
            <br />
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Hand-picked gadgets and future-ready devices just for you.
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
