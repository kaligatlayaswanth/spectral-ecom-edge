import { ShieldCheck, Truck, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />,
    title: "Free Shipping",
    description: "On all orders over $100. Fast, reliable delivery to your door."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />,
    title: "Secure Payment",
    description: "Your payment information is processed securely."
  },
  {
    icon: <Headphones className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />,
    title: "24/7 Support",
    description: "Our team is here to help you anytime, anywhere."
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />,
    title: "Easy Returns",
    description: "30-day hassle-free returns on all products."
  }
];

export const FeaturesSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
    {/* Smart IoT Animated Background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full" style={{opacity:0.13}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="featuresGridLine" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#00FFF0" stopOpacity="0.4" />
            <stop offset="1" stopColor="#007CF0" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Vertical lines */}
        {Array.from({length: 25}).map((_,i) => (
          <line key={i} x1={i*60} y1="0" x2={i*60} y2="600" stroke="url(#featuresGridLine)" strokeWidth="1" />
        ))}
        {/* Horizontal lines */}
        {Array.from({length: 11}).map((_,i) => (
          <line key={100+i} x1="0" y1={i*60} x2="1440" y2={i*60} stroke="url(#featuresGridLine)" strokeWidth="1" />
        ))}
        {/* Animated glowing nodes */}
        <circle cx="400" cy="120" r="5" fill="#00FFF0">
          <animate attributeName="r" values="5;10;5" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="400" r="7" fill="#00FFF0">
          <animate attributeName="r" values="7;13;7" dur="2.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2.7s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-800/10 to-black/80" />
    </div>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
          Why Shop With Us?
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Experience the best in electronics shopping with our exclusive benefits.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
); 