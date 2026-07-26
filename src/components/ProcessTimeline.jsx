import React from 'react';
import { Calculator, Camera, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      icon: Calculator,
      title: "Instant Online Fixed Quote",
      description: "Use our 60-second calculator to get an itemized price range. No endless phone calls or high-pressure sales scripts.",
      badge: "60-Second Estimate"
    },
    {
      number: "02",
      icon: Camera,
      title: "Free Digital or Site Survey",
      description: "Send photos of your current setup via WhatsApp or schedule a quick 15-minute Basildon engineer visit to confirm exact technical specs.",
      badge: "Zero-Hassle Verification"
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Clean Certified Installation",
      description: "Our certified engineers arrive in uniform within agreed windows, protect your floors, complete the job, and issue compliance certificates.",
      badge: "Full Workmanship Guarantee"
    }
  ];

  return (
    <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-obsidian-border space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">TRANSPARENT PROCESS</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
          What Happens Next? Your 3-Step Journey
        </h2>
        <p className="text-sm text-paper-muted">
          From your first online estimate to completed installation, we keep every step simple and transparent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((stepItem, idx) => {
          const IconComp = stepItem.icon;
          return (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-obsidian-dark border border-obsidian-border space-y-4 relative flex flex-col justify-between group hover:border-copper/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold font-mono text-copper/40 group-hover:text-copper transition-colors">
                    {stepItem.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-obsidian-card border border-copper/30 text-copper">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-copper/10 text-copper border border-copper/30 inline-block">
                  {stepItem.badge}
                </span>

                <h3 className="text-lg font-bold text-paper font-mono">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-paper-muted leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-copper/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center pt-2">
        <Link to="/quote" className="btn-primary text-xs py-3 px-6 inline-flex">
          <Calculator className="w-4 h-4" /> Start Your Instant Quote Now
        </Link>
      </div>
    </div>
  );
}
