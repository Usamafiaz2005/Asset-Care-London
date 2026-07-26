import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`About ${COMPANY_DETAILS.name} | Founder Ahmed Johri`} 
        description={`Learn about ${COMPANY_DETAILS.name}, incorporated April 2026 by Ahmed Johri. Companies House Reg ${COMPANY_DETAILS.regNumber}, Basildon Essex.`} 
      />
      
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">OUR STORY & VALUES</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          The Modern Heating & Plumbing Company Basildon Deserves
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Founded in April 2026 by Director {COMPANY_DETAILS.director}, {COMPANY_DETAILS.name} was established to eliminate the frustration of hidden costs, unpunctual callouts, and outdated trade practices across South Essex.
        </p>
      </div>

      {/* Verified Companies House Profile */}
      <div className="glass-panel rounded-3xl p-8 border border-teal/40 bg-gradient-to-br from-obsidian-card to-obsidian-dark space-y-6">
        <div className="flex items-center gap-3 text-teal font-bold text-lg font-mono">
          <ShieldCheck className="w-6 h-6 text-teal" /> Verified Companies House Filing Data
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-paper-subtle font-mono">
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">Full Legal Company Name</span>
            <span className="text-paper font-bold text-sm">{COMPANY_DETAILS.name}</span>
          </div>
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">Companies House Reg. Number</span>
            <span className="text-copper font-bold text-sm">{COMPANY_DETAILS.regNumber}</span>
          </div>
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">Registered Office Address</span>
            <span className="text-paper font-bold text-xs">{COMPANY_DETAILS.address}</span>
          </div>
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">Company Type & Status</span>
            <span className="text-teal font-bold text-xs">Private Limited Company • {COMPANY_DETAILS.status}</span>
          </div>
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">SIC Industry Code</span>
            <span className="text-paper font-bold text-xs">{COMPANY_DETAILS.sicCode}</span>
          </div>
          <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
            <span className="text-paper-muted block">Founder & Director</span>
            <span className="text-paper font-bold text-xs">{COMPANY_DETAILS.director} (Inc. {COMPANY_DETAILS.incDate})</span>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold text-paper font-mono">
          What Sets {COMPANY_DETAILS.shortName} Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-3">
            <span className="text-2xl font-mono font-extrabold text-copper">01</span>
            <h3 className="text-lg font-bold text-paper">100% Upfront Pricing</h3>
            <p className="text-xs text-paper-muted leading-relaxed">
              We never start a job without providing a clear, itemized fixed quote. The price we agree on before starting is the exact price you pay.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-3">
            <span className="text-2xl font-mono font-extrabold text-teal">02</span>
            <h3 className="text-lg font-bold text-paper">Certified Engineers Only</h3>
            <p className="text-xs text-paper-muted leading-relaxed">
              Every gas, plumbing, and air conditioning installation is carried out by fully qualified, insured engineers backed by our 12-month installation warranty.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-3">
            <span className="text-2xl font-mono font-extrabold text-copper">03</span>
            <h3 className="text-lg font-bold text-paper">Future-Ready Architecture</h3>
            <p className="text-xs text-paper-muted leading-relaxed">
              We design every heating system to be heat-pump-ready and compatible with modern smart thermostats and renewables.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="glass-panel rounded-2xl p-8 border border-copper/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-paper">Need Advice on Your Heating or AC?</h3>
          <p className="text-xs text-paper-muted">Our Basildon engineering desk is ready to assist.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/quote" className="btn-primary text-xs py-3 px-6">
            Get Instant Quote
          </Link>
          <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-xs py-3 px-5">
            <Phone className="w-3.5 h-3.5 text-copper" /> {COMPANY_DETAILS.phone}
          </a>
        </div>
      </div>

    </div>
  );
}
