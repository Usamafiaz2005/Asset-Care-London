import React from 'react';

export default function SmartHomeIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Smart Home Energy & Climate Control Thermostat Illustration">
      <defs>
        <linearGradient id="shGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D68A3C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3E7C7A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="140" fill="url(#shGlow)" opacity="0.15" filter="blur(22px)" />

      {/* Circular Smart Thermostat Dial Outer Shell */}
      <circle cx="200" cy="200" r="110" fill="#12181C" stroke="#D68A3C" strokeWidth="3" />
      <circle cx="200" cy="200" r="95" fill="#192229" stroke="#2A363F" strokeWidth="1.5" />

      {/* Rotary Dial Ring Marks */}
      <circle cx="200" cy="200" r="85" stroke="#2A363F" strokeWidth="2" strokeDasharray="4 8" fill="none" />
      <circle cx="200" cy="200" r="85" stroke="#D68A3C" strokeWidth="3" strokeDasharray="120 180" fill="none" transform="rotate(-90 200 200)" />

      {/* Glass Screen Center */}
      <circle cx="200" cy="200" r="65" fill="#0D1117" stroke="#2A363F" strokeWidth="1" />

      {/* Target Temperature Display */}
      <text x="175" y="198" fill="#F6F4F0" fontFamily="Space Grotesk, sans-serif" fontSize="36" fontWeight="700">21</text>
      <text x="218" y="180" fill="#D68A3C" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="600">°C</text>
      <text x="160" y="222" fill="#38A169" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="600">HEATING TO 21.5°</text>

      {/* Wireless Connectivity Node Vectors */}
      <path d="M185 240 Q200 232 215 240" stroke="#3E7C7A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M190 246 Q200 240 210 246" stroke="#3E7C7A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="200" cy="252" r="2" fill="#3E7C7A" />
    </svg>
  );
}
