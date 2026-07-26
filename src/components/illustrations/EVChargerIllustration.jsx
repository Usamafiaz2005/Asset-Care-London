import React from 'react';

export default function EVChargerIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Smart EV Wallbox Charger Vector Illustration">
      <defs>
        <linearGradient id="evGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38A169" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3E7C7A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="130" fill="url(#evGlow)" opacity="0.12" filter="blur(20px)" />

      {/* EV Wallbox Outer Enclosure */}
      <rect x="130" y="80" width="140" height="230" rx="20" fill="#12181C" stroke="#3E7C7A" strokeWidth="2.5" />
      <rect x="142" y="94" width="116" height="202" rx="14" fill="#192229" stroke="#2A363F" strokeWidth="1" />

      {/* LED Charging Status Ring */}
      <circle cx="200" cy="160" r="34" stroke="#3E7C7A" strokeWidth="4" fill="#0D1117" strokeDasharray="160 40" />
      <path d="M202 142 L190 162 H204 L196 180" stroke="#38A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Charging Speed Display */}
      <rect x="155" y="215" width="90" height="30" rx="6" fill="#0D1117" stroke="#2A363F" strokeWidth="1" />
      <text x="175" y="235" fill="#38A169" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">7.4 kW</text>

      {/* Tethered Heavy Duty Cable Wrap */}
      <path d="M200 310 C200 350 290 350 280 270 C275 220 330 220 320 280" stroke="#D68A3C" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="300" y="270" width="24" height="40" rx="6" fill="#12181C" stroke="#D68A3C" strokeWidth="2" />
    </svg>
  );
}
