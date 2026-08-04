import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "", showText = true, size = "normal" }) {
  // Large, bold icon dimensions for high visibility
  const iconSizeClass = size === "large" 
    ? "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" 
    : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16";

  const titleTextClass = size === "large"
    ? "text-xl sm:text-2xl md:text-3xl"
    : "text-lg sm:text-xl md:text-2xl";

  const subtitleTextClass = size === "large"
    ? "text-[10px] sm:text-xs tracking-[0.2em]"
    : "text-[9px] sm:text-[10px] tracking-[0.18em]";

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-xl transition-all hover:scale-[1.02] ${className}`}
      aria-label="Asset Care London — Home"
    >
      {/* Theme-Colored Vector Emblem Symbol (Large & Prominent) */}
      <div className={`relative ${iconSizeClass} flex items-center justify-center shrink-0`}>
        <svg 
          viewBox="0 0 140 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full filter drop-shadow-[0_4px_14px_rgba(214,138,60,0.35)] transition-transform group-hover:scale-105"
        >
          <defs>
            <linearGradient id="themeCopperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A855" />
              <stop offset="50%" stopColor="#D68A3C" />
              <stop offset="100%" stopColor="#B36A1F" />
            </linearGradient>
            <linearGradient id="themeTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5CAAA7" />
              <stop offset="60%" stopColor="#3E7C7A" />
              <stop offset="100%" stopColor="#245452" />
            </linearGradient>
          </defs>

          {/* Outer Contour Arch Frame */}
          <path 
            d="M 70,6 C 48,22 18,42 8,78 C -2,114 18,130 34,134 L 106,134 C 122,130 142,114 132,78 C 122,42 92,22 70,6 Z" 
            fill="none" 
            stroke="url(#themeTealGrad)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Inner Contour Frame Ribbon */}
          <path 
            d="M 70,16 C 52,30 26,48 16,81 C 8,108 24,125 36,127" 
            fill="none" 
            stroke="url(#themeCopperGrad)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          <path 
            d="M 70,16 C 88,30 114,48 124,81 C 132,108 116,125 104,127" 
            fill="none" 
            stroke="url(#themeCopperGrad)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />

          {/* Radiant Sun (Top Center) */}
          <circle cx="70" cy="40" r="7.5" fill="url(#themeCopperGrad)"/>
          <line x1="70" y1="27" x2="70" y2="23" stroke="url(#themeCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="60" y1="31" x2="56" y2="28" stroke="url(#themeCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="80" y1="31" x2="84" y2="28" stroke="url(#themeCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="55" y1="40" x2="51" y2="40" stroke="url(#themeCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="85" y1="40" x2="89" y2="40" stroke="url(#themeCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>

          {/* Stylized Monogram A Left Arch */}
          <path 
            d="M 27,126 C 29,98 44,62 62,47 C 65,44 67,47 64,54 C 52,78 41,102 37,126" 
            fill="url(#themeTealGrad)"
          />
          <path 
            d="M 39,126 C 44,98 57,74 70,57 C 72,54 75,56 73,62 C 62,83 50,106 47,126" 
            fill="url(#themeCopperGrad)"
          />

          {/* Eco Leaf Swoosh */}
          <path 
            d="M 34,95 Q 55,87 73,74 Q 81,62 89,54 C 87,67 72,85 49,97 Z" 
            fill="url(#themeTealGrad)"
          />
          <path 
            d="M 39,93 Q 58,84 77,70" 
            fill="none" 
            stroke="#F6F4F0" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            opacity="0.85"
          />

          {/* City Skyline Buildings & London Gherkin Tower */}
          <rect x="67" y="80" width="14" height="46" fill="url(#themeTealGrad)" rx="1.5"/>
          <rect x="70" y="84" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>
          <rect x="75" y="84" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>
          <rect x="70" y="92" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>
          <rect x="75" y="92" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>
          <rect x="70" y="100" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>
          <rect x="75" y="100" width="3.5" height="4.5" fill="#0D1117" opacity="0.75"/>

          <rect x="83" y="70" width="13" height="56" fill="#3E7C7A" rx="1.5" opacity="0.9"/>
          <line x1="86" y1="74" x2="93" y2="74" stroke="#F6F4F0" strokeWidth="1.2" opacity="0.6"/>
          <line x1="86" y1="80" x2="93" y2="80" stroke="#F6F4F0" strokeWidth="1.2" opacity="0.6"/>
          <line x1="86" y1="86" x2="93" y2="86" stroke="#F6F4F0" strokeWidth="1.2" opacity="0.6"/>
          <line x1="86" y1="92" x2="93" y2="92" stroke="#F6F4F0" strokeWidth="1.2" opacity="0.6"/>

          {/* London Gherkin Tower */}
          <path d="M 98,126 C 96,98 98,74 106,64 C 114,74 116,98 114,126 Z" fill="url(#themeCopperGrad)"/>
          <path d="M 99,118 L 112,88" stroke="#0D1117" strokeWidth="1.3" opacity="0.55"/>
          <path d="M 99,103 L 113,74" stroke="#0D1117" strokeWidth="1.3" opacity="0.55"/>
          <path d="M 113,118 L 100,88" stroke="#0D1117" strokeWidth="1.3" opacity="0.55"/>

          {/* Base Horizon Line */}
          <line x1="18" y1="128" x2="122" y2="128" stroke="url(#themeCopperGrad)" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Clean Theme Typography (ASSETCARE LONDON + ECO-CONSCIOUS • CITY • PARTNERS) */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`${titleTextClass} font-extrabold tracking-tight font-sans leading-none flex items-center gap-1.5`}>
            <span className="text-paper font-extrabold tracking-tight">ASSETCARE</span>
            <span className="text-copper font-extrabold tracking-tight">LONDON</span>
          </span>
          <span className={`${subtitleTextClass} font-mono text-teal font-extrabold uppercase leading-tight mt-1`}>
            HEATING • COOLING • SOLAR • PLUMBING
          </span>
        </div>
      )}
    </Link>
  );
}
