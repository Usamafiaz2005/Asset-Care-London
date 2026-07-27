import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "", showText = true }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-xl ${className}`}>
      {/* Minimal Architectural Monogram "A + C" SVG Logo */}
      <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-obsidian-dark border border-copper/40 group-hover:border-copper transition-all shadow-lg overflow-hidden group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-copper/20 via-transparent to-teal/15 opacity-60"></div>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 text-copper relative z-10"
        >
          {/* Architectural Roof Silhouette Chevron integrated in Monogram A */}
          <path 
            d="M20 6 L32 20 L27.5 20 L20 11 L12.5 20 L8 20 Z" 
            fill="currentColor"
          />
          {/* Stylized Monogram C Loop wrapping the Architectural Base */}
          <path 
            d="M26 22 C26 22 28.5 24 28.5 27.5 C28.5 31.5 24.5 34 20 34 C14.5 34 11 30 11 25.5 C11 21 14.5 17 20 17 L22.5 17 L22.5 21 L20 21 C16.5 21 14.5 23.5 14.5 25.5 C14.5 27.5 16.8 30 20 30 C23 30 25 28.2 25 26.5 C25 25 23.5 24.5 22.5 24.5 L22.5 22 Z" 
            fill="#3E7C7A"
          />
          {/* Crossbar accent */}
          <rect x="15" y="23" width="10" height="2.5" rx="1" fill="currentColor" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base font-extrabold tracking-tight text-paper font-sans leading-none flex items-center gap-1">
            ASSET CARE <span className="text-copper">LONDON</span>
          </span>
          <span className="text-[10px] font-mono text-paper-muted uppercase tracking-widest leading-tight">
            Engineering &amp; Renewables
          </span>
        </div>
      )}
    </Link>
  );
}
