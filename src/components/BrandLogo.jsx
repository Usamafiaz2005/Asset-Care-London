import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "", showText = true, size = "normal" }) {
  const logoHeightClass = size === "large" ? "h-14 sm:h-16" : "h-10 sm:h-12";

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-xl transition-transform hover:scale-[1.02] ${className}`}>
      {/* Official Company Logo */}
      <img
        src="/images/company-logo.png"
        alt="Asset Care London Logo — Eco-Conscious City Partners"
        className={`${logoHeightClass} w-auto object-contain rounded-lg shadow-md filter brightness-105 contrast-105`}
      />
    </Link>
  );
}
