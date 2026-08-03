import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_DETAILS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-obsidian-dark border-t border-obsidian-border pt-16 pb-20 md:pb-8 text-paper-subtle text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-obsidian-border">
          
          {/* Column 1: Brand & Verified Companies House Details */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />

            <p className="text-xs text-paper-muted leading-relaxed">
              Certified UK heating, plumbing, air conditioning, and solar energy engineers. Registered HQ in Basildon, delivering transparent fixed pricing, certified workmanship, and future-ready energy architecture nationwide across the UK.
            </p>

            {/* Verified Companies House Box */}
            <div className="p-3.5 rounded-xl bg-obsidian-card border border-obsidian-border text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-teal font-bold">
                <ShieldCheck className="w-4 h-4 text-teal" /> Verified Company Details
              </div>
              <div className="text-paper text-[11px] font-mono">
                {COMPANY_DETAILS.name} • Reg: {COMPANY_DETAILS.regNumber}
              </div>
              <div className="text-paper-muted text-[11px]">
                Registered Office: {COMPANY_DETAILS.address}
              </div>
              <div className="text-paper-muted text-[11px]">
                SIC Code: {COMPANY_DETAILS.sicCode}
              </div>
              <div className="text-paper-muted text-[11px]">
                Director: {COMPANY_DETAILS.director} • Status: {COMPANY_DETAILS.status} (Inc. {COMPANY_DETAILS.incDate})
              </div>
            </div>

            {/* Regulatory FCA Credit Broker Status Disclosure */}
            <div className="p-3 rounded-lg bg-obsidian-dark border border-copper/30 text-[11px] text-paper-muted space-y-1 font-mono">
              <span className="font-bold text-copper block">Regulatory Financial Disclosure:</span>
              <p className="leading-tight">
                Asset Care London Ltd acts as a credit broker, not a lender. 0% APR trade finance options are subject to status, affordability, and lender credit approval.
              </p>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h4 className="text-paper font-bold text-xs uppercase tracking-wider font-mono text-copper">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/boiler-installation" className="hover:text-copper transition-colors">Boiler Installation</Link></li>
              <li><Link to="/services/solar-pv" className="hover:text-copper transition-colors">Solar PV Panel Installation</Link></li>
              <li><Link to="/services/battery-storage" className="hover:text-teal transition-colors">Home Battery Storage</Link></li>
              <li><Link to="/services/ev-chargers" className="hover:text-teal transition-colors">Smart EV Chargers</Link></li>
              <li><Link to="/services/air-conditioning" className="hover:text-teal transition-colors">Air Conditioning (AC)</Link></li>
              <li><Link to="/services/boiler-repair" className="hover:text-copper transition-colors">Boiler Repair &amp; Diagnosis</Link></li>
              <li><Link to="/services/heat-pumps" className="hover:text-teal transition-colors">Heat Pumps (£7.5k Grant)</Link></li>
              <li><Link to="/services/gas-safety-certificates" className="hover:text-copper transition-colors">Gas Safety CP12</Link></li>
              <li><Link to="/services/general-plumbing" className="hover:text-copper transition-colors">General Plumbing</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-paper font-bold text-xs uppercase tracking-wider font-mono text-copper">UK Service Areas</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/service-areas/london" className="hover:text-copper transition-colors font-bold text-paper">Greater London</Link></li>
              <li><Link to="/service-areas/birmingham" className="hover:text-copper transition-colors">Birmingham</Link></li>
              <li><Link to="/service-areas/manchester" className="hover:text-copper transition-colors">Manchester</Link></li>
              <li><Link to="/service-areas/leeds" className="hover:text-copper transition-colors">Leeds</Link></li>
              <li><Link to="/service-areas/bristol" className="hover:text-copper transition-colors">Bristol</Link></li>
              <li><Link to="/service-areas/cambridge" className="hover:text-copper transition-colors">Cambridge</Link></li>
              <li><Link to="/service-areas/chelmsford" className="hover:text-copper transition-colors">Chelmsford</Link></li>
              <li><Link to="/service-areas/basildon" className="hover:text-copper transition-colors">Basildon (Reg. HQ - SS14)</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-paper font-bold text-xs uppercase tracking-wider font-mono text-copper">Company &amp; Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-copper transition-colors">About &amp; Founder Story</Link></li>
              <li><Link to="/pricing" className="hover:text-copper transition-colors">Transparent Pricing</Link></li>
              <li><Link to="/projects" className="hover:text-copper transition-colors">Project Showcase</Link></li>
              <li><Link to="/grants" className="hover:text-copper transition-colors">Boiler Upgrade Scheme</Link></li>
              <li><Link to="/careers" className="hover:text-copper transition-colors">Careers &amp; Apprenticeships</Link></li>
              <li><Link to="/privacy" className="hover:text-copper transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-copper transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link to="/cookies" className="hover:text-copper transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-paper-muted">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England &amp; Wales ({COMPANY_DETAILS.regNumber}).
          </div>

          <div className="flex items-center gap-6">
            <a href={COMPANY_DETAILS.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors flex items-center gap-1">
              Companies House Verification <ArrowUpRight className="w-3 h-3 text-copper" />
            </a>
            <Link to="/privacy" className="hover:text-copper transition-colors">
              UK GDPR Compliant
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
