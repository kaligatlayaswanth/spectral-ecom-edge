import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel.tsx";
import { useEffect, useRef, useState } from "react";
import { HeroProductsMarquee } from "./HeroProductsMarquee";

const images = [
  "/assests/dreamina-2025-07-06-3249-generate some pics of solar bench whre p....jpeg",
  "/assests/dreamina-2025-07-06-8208-generate some pics of ssecuritie cameras....jpeg",
  "/assests/dreamina-2025-07-06-1094-generate some pics of solar bench whre p....jpeg",
];

export const HeroSection = () => {
  // Auto-slide logic
  const [selected, setSelected] = useState(0);
  const carouselApi = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (carouselApi.current) {
      carouselApi.current.scrollTo(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Listen to manual scroll
  const handleSetApi = (api) => {
    carouselApi.current = api;
    api.on("select", () => {
      setSelected(api.selectedScrollSnap());
    });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden pt-20 pb-32"
      style={{ minHeight: '110vh' }}
    >
      {/* Carousel at the top - Full width */}
      <div className="relative w-full flex flex-col items-center justify-center pt-8">
        <div className="relative w-full">
          <Carousel setApi={handleSetApi} opts={{ loop: true }}>
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem key={img}>
                  <div className="flex justify-center items-center w-full h-[70vh] min-h-[500px] max-h-[700px]">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-contain select-none pointer-events-none"
                      draggable={false}
                    />
      </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Custom arrows overlayed, not circular */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded transition-all"
              onClick={() => carouselApi.current && carouselApi.current.scrollPrev()}
              aria-label="Previous slide"
              style={{outline: 'none'}}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded transition-all"
              onClick={() => carouselApi.current && carouselApi.current.scrollNext()}
              aria-label="Next slide"
              style={{outline: 'none'}}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </Carousel>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 ${selected === idx ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'} transition-all`}
                onClick={() => setSelected(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Product marquee below carousel */}
        <div className="relative w-full h-40 flex items-center justify-center mt-10 z-10">
          <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full flex items-center">
            <HeroProductsMarquee />
          </div>
        </div>
      </div>
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
      {/* Bottom gradient fade (grayscale) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
