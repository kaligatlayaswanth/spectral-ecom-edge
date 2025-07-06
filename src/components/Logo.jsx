import React from 'react';

export const Logo = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      width="120" 
      height="40" 
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00FFF0", stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: "#007CF0", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#0040FF", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* IoT Network Nodes */}
      <circle cx="15" cy="20" r="3" fill="url(#logoGradient)"/>
      <circle cx="25" cy="15" r="2.5" fill="url(#logoGradient)"/>
      <circle cx="25" cy="25" r="2.5" fill="url(#logoGradient)"/>
      <circle cx="35" cy="20" r="3" fill="url(#logoGradient)"/>
      
      {/* Connection Lines */}
      <line x1="18" y1="20" x2="22" y2="15" stroke="url(#logoGradient)" strokeWidth="1"/>
      <line x1="18" y1="20" x2="22" y2="25" stroke="url(#logoGradient)" strokeWidth="1"/>
      <line x1="28" y1="15" x2="32" y2="20" stroke="url(#logoGradient)" strokeWidth="1"/>
      <line x1="28" y1="25" x2="32" y2="20" stroke="url(#logoGradient)" strokeWidth="1"/>
      
      {/* Smart Device Icon */}
      <rect x="45" y="12" width="8" height="16" rx="1" fill="url(#logoGradient)"/>
      <rect x="47" y="14" width="4" height="2" rx="0.5" fill="white"/>
      <rect x="47" y="17" width="4" height="2" rx="0.5" fill="white"/>
      <rect x="47" y="20" width="4" height="2" rx="0.5" fill="white"/>
      <rect x="47" y="23" width="4" height="2" rx="0.5" fill="white"/>
      
      {/* Text: S-IoT */}
      <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#logoGradient)">
        S-IoT
      </text>
    </svg>
  );
}; 