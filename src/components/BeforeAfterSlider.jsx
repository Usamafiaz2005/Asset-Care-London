import React, { useState } from 'react';
import BoilerIllustration from './illustrations/BoilerIllustration';

export default function BeforeAfterSlider({ project = null }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] text-teal font-mono uppercase tracking-widest font-bold block">
            {project?.category || "Boiler System Transformation"}
          </span>
          <h4 className="text-base font-bold text-paper">
            {project?.title || "18-Year System Conversion to Combi"}
          </h4>
        </div>
        <span className="text-xs font-mono text-copper bg-copper/10 px-3 py-1 rounded-full border border-copper/30 font-bold">
          {project?.badge || "10 Year Warranty"}
        </span>
      </div>

      {/* Interactive Draggable Viewport */}
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden cursor-ew-resize bg-obsidian-dark border border-obsidian-border select-none"
        onMouseMove={(e) => {
          if (e.buttons === 1) handleSliderMove(e);
        }}
        onClick={handleSliderMove}
      >
        {/* Before View (Background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-card to-obsidian-dark flex flex-col items-center justify-center p-6 text-center">
          <div className="opacity-40 grayscale blur-[1px]">
            <BoilerIllustration className="w-48 h-48 opacity-40" />
          </div>
          <div className="mt-2 text-xs font-mono font-bold text-danger bg-danger/20 border border-danger/40 px-3 py-1 rounded-full">
            {project?.beforeLabel || "BEFORE: Corrosion, Noisy Pump & Inefficient (G-Rated)"}
          </div>
        </div>

        {/* After View (Foreground Clipped) */}
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-obsidian-dark via-obsidian-card to-obsidian-dark border-r-2 border-copper flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <BoilerIllustration className="w-52 h-52 text-copper" />
            <div className="mt-2 text-xs font-mono font-bold text-teal bg-teal/20 border border-teal/40 px-3 py-1 rounded-full whitespace-nowrap">
              {project?.afterLabel || "AFTER: Clean A-Rated Combi + Powerflushed System"}
            </div>
          </div>
        </div>

        {/* Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-copper shadow-[0_0_12px_#D68A3C] pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-copper text-obsidian font-bold flex items-center justify-center text-xs shadow-lg font-mono">
            ↔
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-paper-muted font-mono">
        <span>← Drag slider to compare transformation →</span>
        <span className="text-copper">{project?.location || "Billericay, Essex"}</span>
      </div>
    </div>
  );
}
