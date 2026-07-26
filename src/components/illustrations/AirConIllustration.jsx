import React from 'react';

export default function AirConIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Modern Air Conditioning Split System Unit Illustration">
      <defs>
        <linearGradient id="acGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E7C7A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D68A3C" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Ambient Glow aura */}
      <ellipse cx="200" cy="200" rx="140" ry="90" fill="url(#acGlow)" opacity="0.12" filter="blur(20px)" />

      {/* AC Indoor Wall Unit Body */}
      <rect x="60" y="140" width="280" height="110" rx="14" fill="#12181C" stroke="#3E7C7A" strokeWidth="2" />
      <rect x="70" y="150" width="260" height="90" rx="10" fill="#192229" stroke="#2A363F" strokeWidth="1" />

      {/* Minimal Front Panel Line Accent */}
      <line x1="70" y1="185" x2="330" y2="185" stroke="#2A363F" strokeWidth="1.5" />

      {/* Temperature LED Display */}
      <rect x="250" y="160" width="60" height="30" rx="6" fill="#0D1117" stroke="#3E7C7A" strokeWidth="1" />
      <text x="268" y="181" fill="#3E7C7A" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700">19°C</text>

      {/* Air Vane Outlet Flap */}
      <rect x="80" y="215" width="240" height="15" rx="4" fill="#0D1117" stroke="#D68A3C" strokeWidth="1" />
      <line x1="90" y1="222" x2="310" y2="222" stroke="#D68A3C" strokeWidth="2" strokeDasharray="6 4" />

      {/* Cool & Warm Dual-Airflow Vector Waves */}
      <path d="M100 245 Q115 285 105 320" stroke="#3E7C7A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M150 245 Q165 295 155 330" stroke="#3E7C7A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M200 245 Q215 290 205 335" stroke="#3E7C7A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M250 245 Q265 295 255 330" stroke="#D68A3C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M300 245 Q315 285 305 320" stroke="#D68A3C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
    </svg>
  );
}
