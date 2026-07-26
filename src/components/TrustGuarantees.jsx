import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Lock, Percent, CreditCard } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function TrustGuarantees() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Gas Safe & MCS Compliance",
      desc: "All gas work is conducted by certified engineers, and solar/heat pump advisory adheres to MCS microgeneration standards.",
      accent: "text-copper"
    },
    {
      icon: Percent,
      title: "0% UK VAT on Renewables",
      desc: "Benefit from 0% UK Government VAT on all Solar PV panels, home battery storage, and heat pump installations until March 2027.",
      accent: "text-teal"
    },
    {
      icon: CreditCard,
      title: "0% APR Trade Financing",
      desc: "Spread the cost of your boiler or solar installation with flexible monthly payment plans via certified trade finance partners.",
      accent: "text-copper"
    },
    {
      icon: FileCheck,
      title: "100% Upfront Fixed Price",
      desc: "Itemized written quotes provided before work starts. Zero unexpected callout surprises or hidden invoice charges.",
      accent: "text-teal"
    }
  ];

  return (
    <div className="glass-panel rounded-3xl p-8 border border-obsidian-border space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-obsidian-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">CERTIFIED ACCREDITATION & TRUST</span>
          <h3 className="text-2xl font-bold text-paper">
            Why Essex Homeowners Choose Asset Care London
          </h3>
        </div>
        <div className="text-xs font-mono text-paper-muted bg-obsidian-dark px-3.5 py-1.5 rounded-full border border-obsidian-border">
          Companies House Reg: {COMPANY_DETAILS.regNumber}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-obsidian-dark border border-obsidian-border space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className={`p-2.5 rounded-xl bg-obsidian-card w-fit border border-obsidian-border ${item.accent}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-paper font-mono">{item.title}</h4>
                <p className="text-xs text-paper-muted leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-2 border-t border-obsidian-border/50 text-[10px] font-mono text-paper-subtle flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-teal" /> Verified Standard
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
