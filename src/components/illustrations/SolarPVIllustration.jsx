import React from 'react';

export default function SolarPVIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Solar PV Photovoltaic Array Illustration">
      <defs>
        <linearGradient id="solarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D68A3C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3E7C7A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="140" fill="url(#solarGlow)" opacity="0.15" filter="blur(22px)" />

      {/* Sun Energy Vector Rays */}
      <circle cx="200" cy="80" r="28" fill="#D68A3C" opacity="0.2" />
      <circle cx="200" cy="80" r="16" fill="#D68A3C" />
      <path d="M200 45 V30 M200 115 V130 M165 80 H150 M235 80 H250 M175 55 L164 44 M225 105 L236 116 M225 55 L236 44 M175 105 L164 116" stroke="#D68A3C" strokeWidth="2" strokeLinecap="round" />

      {/* Rooftop Solar PV Panel Grid (Perspective Isometric) */}
      <path d="M70 280 L130 160 H270 L330 280 Z" fill="#12181C" stroke="#3E7C7A" strokeWidth="2.5" />
      <path d="M85 270 L140 170 H260 L315 270 Z" fill="#192229" stroke="#2A363F" strokeWidth="1" />

      {/* Photovoltaic Cell Grid Lines */}
      <line x1="200" y1="160" x2="200" y2="280" stroke="#3E7C7A" strokeWidth="2" />
      <line x1="140" y1="220" x2="260" y2="220" stroke="#2A363F" strokeWidth="1.5" />
      <line x1="112" y1="250" x2="288" y2="250" stroke="#2A363F" strokeWidth="1.5" />
      <line x1="158" y1="190" x2="242" y2="190" stroke="#2A363F" strokeWidth="1.5" />

      {/* Energy Flow Vectors */}
      <path d="M200 285 V330" stroke="#D68A3C" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="200" cy="345" r="8" fill="#D68A3C" />
    </svg>
  );
}
