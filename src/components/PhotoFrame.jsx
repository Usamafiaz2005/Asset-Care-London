import React from 'react';

export default function PhotoFrame({ 
  children, 
  imageSrc = null,
  imageAlt = "Asset Care London Precision Workmanship",
  badge = null, 
  caption = null, 
  aspectRatio = "aspect-[4/3]",
  className = "" 
}) {
  return (
    <div className={`relative rounded-3xl overflow-hidden glass-panel border border-copper/30 shadow-2xl group ${className}`}>
      
      {/* Real High-Res Photography Rendering with Obsidian Dark Luxury Overlay */}
      {imageSrc ? (
        <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Obsidian Gradient Brand Overlay for Luxury Vibe */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark via-obsidian-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-obsidian-dark/20 mix-blend-multiply"></div>
        </div>
      ) : (
        <>
          {/* Vector Illustration Fallback Container */}
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian-card via-obsidian-dark to-obsidian-card opacity-90"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-copper/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className={`relative z-10 p-6 flex flex-col items-center justify-center ${aspectRatio}`}>
            {children}
          </div>
        </>
      )}

      {/* Badge Overlay */}
      {badge && (
        <div className="absolute top-4 right-4 z-20 bg-copper/90 text-obsidian text-[11px] font-extrabold font-mono px-3.5 py-1 rounded-full shadow-lg border border-copper/50">
          {badge}
        </div>
      )}

      {/* Bottom Caption Overlay */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-obsidian-dark/95 via-obsidian-dark/80 to-transparent border-t border-obsidian-border/50 text-center">
          <span className="text-xs font-mono font-bold text-paper block">{caption.title}</span>
          {caption.subtitle && <span className="text-[11px] text-paper-muted block">{caption.subtitle}</span>}
        </div>
      )}
    </div>
  );
}
