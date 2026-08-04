import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "", showText = true, size = "normal" }) {
  const iconSizeClass = size === "large" ? "w-12 h-12 sm:w-14 sm:h-14" : "w-9 h-9 sm:w-10 sm:h-10";

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-xl transition-all hover:scale-[1.02] ${className}`}>
      {/* Theme-Colored Vector Emblem Symbol */}
      <div className={`relative ${iconSizeClass} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(214,138,60,0.2)]">
          <defs>
            <linearGradient id="logoCopperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8A053" />
              <stop offset="60%" stopColor="#D68A3C" />
              <stop offset="100%" stopColor="#B8732A" />
            </linearGradient>
            <linearGradient id="logoTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#529E9B" />
              <stop offset="70%" stopColor="#3E7C7A" />
              <stop offset="100%" stopColor="#2A5957" />
            </linearGradient>
          </defs>

          {/* Outer Contour Arch Frame */}
          <path d="M 70,8 C 50,23 20,43 10,78 C 0,113 20,128 35,133 L 105,133 C 120,128 140,113 130,78 C 120,43 90,23 70,8 Z" 
                fill="none" stroke="url(#logoTealGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Inner Contour Frame Ribbon */}
          <path d="M 70,17 C 53,31 28,48 18,81 C 10,108 26,125 38,127" 
                fill="none" stroke="url(#logoCopperGrad)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M 70,17 C 87,31 112,48 122,81 C 130,108 114,125 102,127" 
                fill="none" stroke="url(#logoCopperGrad)" strokeWidth="3" strokeLinecap="round"/>

          {/* Radiant Sun */}
          <circle cx="70" cy="41" r="7" fill="url(#logoCopperGrad)"/>
          <line x1="70" y1="29" x2="70" y2="25" stroke="url(#logoCopperGrad)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="61" y1="33" x2="57" y2="30" stroke="url(#logoCopperGrad)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="79" y1="33" x2="83" y2="30" stroke="url(#logoCopperGrad)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="56" y1="41" x2="52" y2="41" stroke="url(#logoCopperGrad)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="84" y1="41" x2="88" y2="41" stroke="url(#logoCopperGrad)" strokeWidth="2" strokeLinecap="round"/>

          {/* Stylized Monogram A Arch */}
          <path d="M 28,125 C 30,98 45,63 62,48 C 65,45 67,48 64,55 C 52,78 42,101 38,125" 
                fill="url(#logoTealGrad)"/>
          <path d="M 40,125 C 45,98 58,75 70,58 C 72,55 75,57 73,63 C 62,83 50,105 48,125" 
                fill="url(#logoCopperGrad)"/>

          {/* Eco Leaf Swoosh */}
          <path d="M 35,95 Q 55,88 72,75 Q 80,63 88,55 C 86,68 72,85 50,97 Z" 
                fill="url(#logoTealGrad)"/>
          <path d="M 40,93 Q 58,85 76,71" fill="none" stroke="#F6F4F0" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>

          {/* City Skyline Buildings & Gherkin Tower */}
          <rect x="68" y="81" width="14" height="44" fill="url(#logoTealGrad)" rx="1"/>
          <rect x="71" y="85" width="3" height="4" fill="#0D1117" opacity="0.7"/>
          <rect x="76" y="85" width="3" height="4" fill="#0D1117" opacity="0.7"/>
          <rect x="71" y="92" width="3" height="4" fill="#0D1117" opacity="0.7"/>
          <rect x="76" y="92" width="3" height="4" fill="#0D1117" opacity="0.7"/>
          <rect x="71" y="99" width="3" height="4" fill="#0D1117" opacity="0.7"/>
          <rect x="76" y="99" width="3" height="4" fill="#0D1117" opacity="0.7"/>

          <rect x="84" y="71" width="12" height="54" fill="#3E7C7A" rx="1" opacity="0.85"/>
          <line x1="87" y1="75" x2="93" y2="75" stroke="#F6F4F0" strokeWidth="1" opacity="0.6"/>
          <line x1="87" y1="81" x2="93" y2="81" stroke="#F6F4F0" strokeWidth="1" opacity="0.6"/>
          <line x1="87" y1="87" x2="93" y2="87" stroke="#F6F4F0" strokeWidth="1" opacity="0.6"/>
          <line x1="87" y1="93" x2="93" y2="93" stroke="#F6F4F0" strokeWidth="1" opacity="0.6"/>

          <path d="M 98,125 C 96,98 98,75 106,65 C 114,75 116,98 114,125 Z" fill="url(#logoCopperGrad)"/>
          <path d="M 99,118 L 112,88" stroke="#0D1117" strokeWidth="1.2" opacity="0.5"/>
          <path d="M 99,103 L 113,75" stroke="#0D1117" strokeWidth="1.2" opacity="0.5"/>
          <path d="M 113,118 L 100,88" stroke="#0D1117" strokeWidth="1.2" opacity="0.5"/>

          <line x1="20" y1="127" x2="120" y2="127" stroke="url(#logoCopperGrad)" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-extrabold tracking-tight font-sans leading-none flex items-center gap-1">
            <span className="text-paper font-extrabold">ASSETCARE</span>
            <span className="text-copper font-extrabold">LONDON</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-teal uppercase tracking-widest font-bold leading-tight mt-0.5">
            ECO-CONSCIOUS • CITY • PARTNERS
          </span>
        </div>
      )}
    </Link>
  );
}
