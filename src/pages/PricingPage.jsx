import React from 'react';
import QuoteCalculator from '../components/QuoteCalculator';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Fixed Upfront Pricing Guide | ${COMPANY_DETAILS.shortName}`} 
        description={`Transparent price guide for boiler installation, repairs, air conditioning, and CP12 certificates across Basildon and South Essex.`} 
      />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">TRANSPARENT PRICING</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Honest Price Guide & Fixed-Quote Guarantee
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          No hidden fees, no surprise add-ons. We believe in upfront, transparent pricing for every home in Basildon and South Essex.
        </p>
      </div>

      {/* Price Guide Table Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Boiler Installation', range: 'From £1,650 inc. VAT', details: 'A-rated combi replacement, system flush, magnetic filter & up to 10yr warranty.' },
          { title: 'Boiler Diagnostic & Repair', range: 'Fixed £75 Diagnostic Fee', details: 'Agreed diagnostic fee upfront + genuine replacement parts fitted with 12-month guarantee.' },
          { title: 'Air Conditioning (AC)', range: 'From £1,250 inc. VAT', details: 'Ultra-quiet split system wall unit providing year-round cooling & heating.' },
          { title: 'Gas Safety CP12 Certificate', range: 'From £70 inc. VAT', details: 'Annual landlord gas inspection, flue safety checks & instant digital PDF certificate.' },
          { title: 'System Powerflushing', range: 'From £380', details: 'Chemical flushing removing black sludge, clearing cold spots & protecting boiler.' },
          { title: 'General Domestic Plumbing', range: 'From £65 / callout', details: 'Leak repairs, tap replacements, toilet fixes & pipework reconfiguration.' }
        ].map((item, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-teal">{item.title}</span>
              <div className="text-2xl font-extrabold text-copper font-mono">{item.range}</div>
              <p className="text-xs text-paper-muted leading-relaxed">{item.details}</p>
            </div>
            <div className="pt-3 border-t border-obsidian-border/50 text-[11px] text-paper-subtle font-mono">
              ✓ Fixed-Price Guarantee
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Calculator */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-paper font-mono">
          Get Your Custom Fixed-Price Estimate
        </h2>
        <QuoteCalculator />
      </div>

    </div>
  );
}
