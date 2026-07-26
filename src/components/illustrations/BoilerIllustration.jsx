import React from 'react';

export default function BoilerIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Modern Wall-Mounted Gas Boiler Illustration">
      <defs>
        <linearGradient id="boilerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D68A3C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D68A3C" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E2830" />
          <stop offset="100%" stopColor="#12181C" />
        </linearGradient>
      </defs>

      {/* Background Glow Grid */}
      <circle cx="200" cy="200" r="140" fill="url(#boilerGlow)" opacity="0.12" filter="blur(20px)" />
      <path d="M60 200 H340 M200 60 V340" stroke="#2A363F" strokeWidth="1" strokeDasharray="4 4" />

      {/* Outer Wall Mounting Frame */}
      <rect x="110" y="70" width="180" height="260" rx="16" fill="url(#bodyGrad)" stroke="#2A363F" strokeWidth="2" />
      <rect x="120" y="80" width="160" height="240" rx="12" stroke="#3A4854" strokeWidth="1" strokeDasharray="2 2" />

      {/* Digital Display Module */}
      <rect x="140" y="110" width="120" height="64" rx="8" fill="#0D1117" stroke="#D68A3C" strokeWidth="1.5" />
      <text x="175" y="142" fill="#D68A3C" fontFamily="Space Grotesk, sans-serif" fontSize="22" fontWeight="700">62°C</text>
      <circle cx="236" cy="132" r="5" fill="#3E7C7A" />
      <text x="228" y="156" fill="#38A169" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600">ECO ON</text>

      {/* Status Indicator Lights */}
      <circle cx="155" cy="195" r="4" fill="#3E7C7A" />
      <circle cx="170" cy="195" r="4" fill="#D68A3C" />
      <circle cx="185" cy="195" r="4" fill="#2A363F" />
      
      {/* Pressure Gauge Wheel */}
      <circle cx="235" cy="195" r="14" fill="#12181C" stroke="#2A363F" strokeWidth="2" />
      <path d="M235 195 L242 190" stroke="#D68A3C" strokeWidth="2" strokeLinecap="round" />

      {/* Lower Control Dial Bar */}
      <rect x="140" y="225" width="120" height="30" rx="6" fill="#192229" stroke="#2A363F" strokeWidth="1" />
      <circle cx="165" cy="240" r="7" fill="#2A363F" stroke="#D68A3C" strokeWidth="1" />
      <circle cx="235" cy="240" r="7" fill="#2A363F" stroke="#3E7C7A" strokeWidth="1" />

      {/* Precision Copper & Water Pipework Base */}
      <path d="M145 330 V370" stroke="#D68A3C" strokeWidth="3" strokeLinecap="round" />
      <path d="M172 330 V370" stroke="#3E7C7A" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 330 V370" stroke="#D68A3C" strokeWidth="4" strokeLinecap="round" />
      <path d="M228 330 V370" stroke="#3E7C7A" strokeWidth="3" strokeLinecap="round" />
      <path d="M255 330 V370" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

      {/* Decorative Flame Pulse Icon */}
      <path d="M200 135 C195 145 190 150 195 155 C198 158 202 158 205 155 C210 150 205 145 200 135 Z" fill="#D68A3C" opacity="0.9" />
    </svg>
  );
}
