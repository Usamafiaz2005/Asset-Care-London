import React, { useState, useRef } from 'react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider({ project }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const beforeImgSrc = project.beforeImage || "/images/boiler-before.webp";
  const afterImgSrc = project.afterImage || (project.id === 'ac-loft' ? "/images/ac-after.webp" : "/images/boiler-after.webp");

  return (
    <div className="glass-panel rounded-3xl p-6 border border-obsidian-border space-y-4 shadow-xl">
      <div className="flex justify-between items-center border-b border-obsidian-border pb-3">
        <div>
          <span className="text-[10px] font-mono text-copper font-bold uppercase tracking-wider block">{project.category}</span>
          <h3 className="text-lg font-bold text-paper">{project.title}</h3>
        </div>
        <div className="text-xs font-mono font-bold text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/30">
          {project.badge || "Verified Installation"}
        </div>
      </div>

      {/* Interactive Drag Before/After Image Container */}
      <div
        ref={containerRef}
        className="relative w-full h-72 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-obsidian-border bg-obsidian-dark"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Base Layer - Right Side) */}
        <div className="absolute inset-0 w-full h-full z-10">
          <img
            src={afterImgSrc}
            alt={`${project.title} - After Installation`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/85 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 bg-teal/90 text-obsidian text-[10px] font-extrabold font-mono px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1 z-30">
            <CheckCircle2 className="w-3 h-3" /> AFTER (Completed System)
          </div>
        </div>

        {/* BEFORE Image (Clipped Overlay Layer - Left Side) */}
        <div
          className="absolute top-0 bottom-0 left-0 h-full overflow-hidden z-20"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
            <img
              src={beforeImgSrc}
              alt={`${project.title} - Before Installation`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/85 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 bg-danger/90 text-white text-[10px] font-extrabold font-mono px-2.5 py-1 rounded-md shadow-lg z-30">
              BEFORE (Pre-Install)
            </div>
          </div>
        </div>

        {/* Divider Line & Center Grab Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-copper shadow-[0_0_12px_#D68A3C] z-40 pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-copper text-obsidian flex items-center justify-center shadow-2xl border-2 border-paper">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] font-mono text-paper-muted">
        <span>← Drag slider to compare transformation →</span>
        <span className="text-copper">{project.location || "South Essex"}</span>
      </div>
    </div>
  );
}
