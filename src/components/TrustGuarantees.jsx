import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function TrustGuarantees({ compact = false }) {
  return (
    <div className={`glass-panel rounded-2xl border border-obsidian-border shadow-xl ${compact ? 'p-4' : 'p-6 md:p-8'} space-y-6`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-obsidian-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block">VERIFIED STANDARDS & COMPLIANCE</span>
          <h3 className="text-xl font-bold text-paper font-mono">Our Customer Quality Commitments</h3>
        </div>
        <span className="text-xs font-mono text-copper bg-copper/10 px-3 py-1 rounded-full border border-copper/30 font-bold">
          Companies House Reg: {COMPANY_DETAILS.regNumber}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Guarantee 1: Companies House Registration */}
        <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
          <div className="flex items-center gap-2 text-teal font-bold text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0" /> Verified Legal Registration
          </div>
          <p className="text-xs text-paper-muted leading-relaxed">
            Incorporated 19 April 2026 under Companies House Reg <strong className="text-paper">{COMPANY_DETAILS.regNumber}</strong> (Director: {COMPANY_DETAILS.director}). Office: {COMPANY_DETAILS.street}, Basildon.
          </p>
        </div>

        {/* Guarantee 2: Upfront Fixed Pricing */}
        <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
          <div className="flex items-center gap-2 text-copper font-bold text-xs font-mono">
            <CheckCircle2 className="w-4 h-4 text-copper shrink-0" /> 100% Fixed Upfront Pricing
          </div>
          <p className="text-xs text-paper-muted leading-relaxed">
            Every job quote is itemized and agreed in writing before any installation work begins. Zero unexpected add-ons or hidden callout charges.
          </p>
        </div>

        {/* Guarantee 3: Workmanship Warranty */}
        <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
          <div className="flex items-center gap-2 text-teal font-bold text-xs font-mono">
            <Award className="w-4 h-4 text-teal shrink-0" /> 12-Month Installation Guarantee
          </div>
          <p className="text-xs text-paper-muted leading-relaxed">
            All pipework, valve fittings, and installation labor are backed by our 12-month Basildon HQ workmanship guarantee alongside manufacturer warranties.
          </p>
        </div>

        {/* Guarantee 4: Certified Workmanship Scope */}
        <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
          <div className="flex items-center gap-2 text-copper font-bold text-xs font-mono">
            <Clock className="w-4 h-4 text-copper shrink-0" /> Qualified & Insured Engineers
          </div>
          <p className="text-xs text-paper-muted leading-relaxed">
            All gas, plumbing, and air conditioning works are executed under Companies House SIC 43220 scope by fully trained, insured engineers.
          </p>
        </div>

      </div>
    </div>
  );
}
