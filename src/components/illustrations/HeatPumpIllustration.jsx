import React from 'react';

export default function HeatPumpIllustration({ className = "w-full h-auto max-w-[320px]" }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Air Source Heat Pump Outdoor Unit Illustration">
      <defs>
        <linearGradient id="hpGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E7C7A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3E7C7A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Background Ambient Aura */}
      <circle cx="200" cy="200" r="140" fill="url(#hpGlow)" opacity="0.15" filter="blur(20px)" />
      
      {/* Outdoor Fan Unit Chassis */}
      <rect x="70" y="110" width="260" height="190" rx="16" fill="#12181C" stroke="#3E7C7A" strokeWidth="2" />
      <rect x="80" y="120" width="240" height="170" rx="12" fill="#192229" stroke="#2A363F" strokeWidth="1" />

      {/* High-Efficiency Fan Grille Circle */}
      <circle cx="170" cy="205" r="65" fill="#0D1117" stroke="#3E7C7A" strokeWidth="2" />
      <circle cx="170" cy="205" r="55" stroke="#2A363F" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="170" cy="205" r="14" fill="#3E7C7A" opacity="0.8" />

      {/* Aerodynamic Fan Blades */}
      <path d="M170 205 L140 160 C155 155 175 165 170 205 Z" fill="#2A363F" />
      <path d="M170 205 L215 175 C220 190 210 210 170 205 Z" fill="#2A363F" />
      <path d="M170 205 L180 250 C165 255 150 240 170 205 Z" fill="#2A363F" />

      {/* Heat Exchanger Evaporator Fins */}
      <rect x="255" y="135" width="50" height="140" rx="6" fill="#0D1117" stroke="#2A363F" strokeWidth="1" />
      <line x1="262" y1="150" x2="298" y2="150" stroke="#3E7C7A" strokeWidth="1.5" />
      <line x1="262" y1="170" x2="298" y2="170" stroke="#3E7C7A" strokeWidth="1.5" />
      <line x1="262" y1="190" x2="298" y2="190" stroke="#D68A3C" strokeWidth="1.5" />
      <line x1="262" y1="210" x2="298" y2="210" stroke="#D68A3C" strokeWidth="1.5" />
      <line x1="262" y1="230" x2="298" y2="230" stroke="#3E7C7A" strokeWidth="1.5" />
      <line x1="262" y1="250" x2="298" y2="250" stroke="#3E7C7A" strokeWidth="1.5" />

      {/* Airflow Thermal Transfer Arrows */}
      <path d="M40 175 Q55 175 62 185 Q55 195 40 195" stroke="#3E7C7A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M30 205 Q45 205 52 215 Q45 225 30 225" stroke="#3E7C7A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M330 185 Q350 185 365 195" stroke="#D68A3C" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M330 215 Q350 215 365 225" stroke="#D68A3C" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Ground Mounting Anti-Vibration Feet */}
      <rect x="90" y="300" width="30" height="20" rx="4" fill="#2A363F" />
      <rect x="280" y="300" width="30" height="20" rx="4" fill="#2A363F" />
    </svg>
  );
}
