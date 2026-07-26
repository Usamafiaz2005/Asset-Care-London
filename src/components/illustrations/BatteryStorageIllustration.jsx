import React from 'react';

export default function BatteryStorageIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Home Battery Energy Storage System Illustration">
      <defs>
        <linearGradient id="batGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E7C7A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D68A3C" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="130" fill="url(#batGlow)" opacity="0.12" filter="blur(20px)" />

      {/* Battery Stack Tower */}
      <rect x="120" y="80" width="160" height="240" rx="16" fill="#12181C" stroke="#3E7C7A" strokeWidth="2.5" />

      {/* Battery Module Cells (3 Stacked Units) */}
      <rect x="135" y="100" width="130" height="55" rx="8" fill="#192229" stroke="#2A363F" strokeWidth="1" />
      <rect x="135" y="170" width="130" height="55" rx="8" fill="#192229" stroke="#2A363F" strokeWidth="1" />
      <rect x="135" y="240" width="130" height="55" rx="8" fill="#192229" stroke="#2A363F" strokeWidth="1" />

      {/* Active Energy Indicators */}
      <rect x="150" y="118" width="80" height="18" rx="4" fill="#38A169" opacity="0.9" />
      <rect x="150" y="188" width="80" height="18" rx="4" fill="#38A169" opacity="0.9" />
      <rect x="150" y="258" width="60" height="18" rx="4" fill="#D68A3C" opacity="0.9" />

      {/* Digital Capacity Indicator */}
      <circle cx="245" cy="127" r="5" fill="#38A169" />
      <circle cx="245" cy="197" r="5" fill="#38A169" />
      <circle cx="245" cy="267" r="5" fill="#D68A3C" />

      <text x="160" y="345" fill="#3E7C7A" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700">13.5 kWh STORAGE</text>
    </svg>
  );
}
