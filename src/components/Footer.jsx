import { Mail, Phone, MapPin, Github, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-neutral-900 to-black border-t border-white/10 overflow-hidden">
      {/* Smart IoT Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full" style={{opacity:0.12}} viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footerGridLine" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="#00FFF0" stopOpacity="0.3" />
              <stop offset="1" stopColor="#007CF0" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {/* Vertical lines */}
          {Array.from({length: 25}).map((_,i) => (
            <line key={i} x1={i*60} y1="0" x2={i*60} y2="400" stroke="url(#footerGridLine)" strokeWidth="1" />
          ))}
          {/* Horizontal lines */}
          {Array.from({length: 7}).map((_,i) => (
            <line key={100+i} x1="0" y1={i*60} x2="1440" y2={i*60} stroke="url(#footerGridLine)" strokeWidth="1" />
          ))}
          {/* Animated glowing nodes */}
          <circle cx="200" cy="300" r="5" fill="#00FFF0">
            <animate attributeName="r" values="5;10;5" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="100" r="7" fill="#00FFF0">
            <animate attributeName="r" values="7;13;7" dur="2.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="2.7s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-800/10 to-black/80" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-poppins text-white">
              S-IoT
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium electronics and smart technology for the modern world. Innovation delivered.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold font-poppins text-white">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Products
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Support
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold font-poppins text-white">
              Legal
            </h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Refund Policy
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold font-poppins text-white">
              Stay Updated
            </h4>
            <p className="text-gray-400">
              Get the latest tech news and exclusive offers.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/40 backdrop-blur-sm transition-all duration-300"
              />
              <button className="w-full px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 S-IoT. All rights reserved. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
