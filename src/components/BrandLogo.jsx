import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "", size = "normal" }) {
  // Prominent, large logo height scaling for maximum visibility
  const logoHeightClass = size === "large" 
    ? "h-16 sm:h-20 md:h-24" 
    : "h-12 sm:h-14 md:h-16";

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-xl transition-all hover:scale-[1.03] ${className}`}
      aria-label="Asset Care London — Home"
    >
      {/* Exact Uploaded Official Logo Image (All Original Lines, Contour & Typography Intact) */}
      <img
        src="/images/company-logo.png"
        alt="Asset Care London Logo — Eco-Conscious City Partners"
        className={`${logoHeightClass} w-auto object-contain rounded-xl shadow-lg filter brightness-110 contrast-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]`}
      />
    </Link>
  );
}
