import React from 'react';

export default function PlumbingIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Precision Plumbing & Water Pressure Vector Illustration">
      <defs>
        <linearGradient id="plumbGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D68A3C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3E7C7A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="130" fill="url(#plumbGlow)" opacity="0.12" filter="blur(20px)" />

      {/* Geometric Copper & Slate Pipework Network */}
      <path d="M100 100 H220 V180 H300 V300" stroke="#D68A3C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 300 V220 H260 V140" stroke="#3E7C7A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Precision Brass Pipe Couplings & Valves */}
      <circle cx="220" cy="100" r="10" fill="#12181C" stroke="#D68A3C" strokeWidth="3" />
      <circle cx="220" cy="180" r="12" fill="#12181C" stroke="#D68A3C" strokeWidth="3" />
      <circle cx="300" cy="180" r="10" fill="#12181C" stroke="#D68A3C" strokeWidth="3" />
      <circle cx="260" cy="220" r="10" fill="#12181C" stroke="#3E7C7A" strokeWidth="3" />

      {/* Water Isolation Control Valve Wheel */}
      <circle cx="220" cy="180" r="22" stroke="#D68A3C" strokeWidth="2" strokeDasharray="6 6" fill="none" />
      <path d="M205 180 H235 M220 165 V195" stroke="#D68A3C" strokeWidth="3" strokeLinecap="round" />

      {/* Water Pressure Flow Droplet Vectors */}
      <circle cx="300" cy="240" r="6" fill="#3E7C7A" />
      <circle cx="300" cy="265" r="4" fill="#3E7C7A" opacity="0.7" />
      <circle cx="300" cy="285" r="2.5" fill="#3E7C7A" opacity="0.4" />

      {/* Flow Rate Meter Badge */}
      <rect x="70" y="240" width="80" height="50" rx="8" fill="#192229" stroke="#2A363F" strokeWidth="1.5" />
      <text x="85" y="262" fill="#94A3B8" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600">PRESSURE</text>
      <text x="85" y="280" fill="#38A169" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">3.2 BAR</text>
    </svg>
  );
}
