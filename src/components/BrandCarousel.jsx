import React from 'react';

export default function BrandCarousel() {
  const brands = [
    { name: "Worcester Bosch", type: "A-Rated Boilers" },
    { name: "Vaillant", type: "High-Efficiency Heating" },
    { name: "LG Therma V", type: "Heat Pumps & AC" },
    { name: "Trianco", type: "Water & Electric Heating" },
    { name: "Daikin", type: "Climate & Heat Pumps" },
    { name: "Mitsubishi Electric", type: "Split Air Conditioning" },
    { name: "Tesla Powerwall", type: "Home Energy Storage" },
    { name: "GivEnergy", type: "Smart Battery Storage" },
    { name: "Ideal Boilers", type: "Gas Safe Boilers" },
    { name: "Baxi", type: "System & Combi Boilers" }
  ];

  return (
    <div className="py-6 border-y border-obsidian-border bg-obsidian-dark/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[11px] font-mono text-paper-muted uppercase tracking-widest mb-4">
          AUTHORIZED INSTALLER &amp; CERTIFIED PARTNER FOR LEADING UK &amp; GLOBAL BRANDS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 items-center">
          {brands.map((b, idx) => (
            <div 
              key={idx} 
              className="p-2.5 rounded-xl bg-obsidian-card/70 border border-obsidian-border text-center hover:border-copper/40 transition-colors"
            >
              <span className="text-xs font-bold font-mono text-paper block group-hover:text-copper">
                {b.name}
              </span>
              <span className="text-[9px] text-paper-muted block">
                {b.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
