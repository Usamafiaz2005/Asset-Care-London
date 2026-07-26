import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function EmergencyPage() {
  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`24/7 Emergency Plumbing & Heating Callout | ${COMPANY_DETAILS.shortName}`} 
        description={`Urgent 24/7 emergency response for gas leaks, burst pipes, and total boiler breakdowns across Basildon, Wickford, and Billericay.`} 
      />

      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-danger/60 bg-gradient-to-br from-obsidian-card via-obsidian-dark to-obsidian-card space-y-6 text-center">
        <div className="w-16 h-16 rounded-full bg-danger/20 border border-danger text-danger flex items-center justify-center mx-auto animate-pulse">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-danger uppercase tracking-widest block">24/7 EMERGENCY RESPONSE STANDBY</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
            Urgent Heating, Gas & Plumbing Callout
          </h1>
          <p className="text-sm text-paper-muted max-w-xl mx-auto">
            Gas leak smell? Water pouring through ceiling? No heating on a freezing night? Our Basildon dispatch desk is on active standby.
          </p>
        </div>

        <div className="py-4">
          <a
            href={COMPANY_DETAILS.phoneHref}
            className="inline-flex items-center gap-3 bg-danger hover:bg-danger/90 text-white font-mono font-extrabold text-xl sm:text-2xl px-8 py-5 rounded-2xl shadow-[0_0_30px_rgba(229,62,62,0.5)] transition-all transform hover:scale-105"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span>CALL EMERGENCY LINE: {COMPANY_DETAILS.phone}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-paper-subtle pt-4 border-t border-obsidian-border/60">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal" /> Upfront Fixed Emergency Callout
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-copper" /> Basildon HQ Dispatch (Under 45 Mins)
          </div>
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-danger" /> Immediate Phone Triage
          </div>
        </div>
      </div>
    </div>
  );
}
