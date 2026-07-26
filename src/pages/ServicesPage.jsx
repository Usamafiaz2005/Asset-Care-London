import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, futureRenewablesData } from '../data/servicesData';
import { Flame, Wrench, Wind, Zap, ShieldCheck, Thermometer, ArrowRight, Sun, Battery } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`All 13 Heating, Plumbing, AC & Solar Services | ${COMPANY_DETAILS.shortName}`} 
        description={`Complete engineering scope offered by ${COMPANY_DETAILS.name} under Companies House SIC 43220 across Basildon, Wickford, Billericay, and South Essex.`} 
      />

      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">INSTALLATION & SERVICE SCOPE</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Heating, Plumbing, AC & Solar Energy Services
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Certified engineering services under Companies House SIC Code 43220 across Basildon, Wickford, Billericay, and South Essex.
        </p>
      </div>

      {/* Active Core Services Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-paper font-mono border-b border-obsidian-border pb-3">
          13 Active Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((srv) => (
            <Link
              key={srv.id}
              to={`/services/${srv.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-obsidian-border flex flex-col justify-between space-y-4 group block relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-dark border border-copper/30 flex items-center justify-center text-copper group-hover:border-copper transition-colors">
                    {srv.id.includes('boiler') && <Flame className="w-6 h-6" />}
                    {srv.id.includes('solar') && <Sun className="w-6 h-6 text-copper" />}
                    {srv.id.includes('battery') && <Battery className="w-6 h-6 text-teal" />}
                    {srv.id.includes('ev') && <Zap className="w-6 h-6 text-teal" />}
                    {srv.id.includes('air') && <Wind className="w-6 h-6 text-teal" />}
                    {srv.id.includes('heat-pump') && <Zap className="w-6 h-6 text-teal" />}
                    {srv.id.includes('plumbing') && <Wrench className="w-6 h-6" />}
                    {srv.id.includes('central') && <Thermometer className="w-6 h-6" />}
                    {srv.id.includes('gas') && <ShieldCheck className="w-6 h-6 text-copper" />}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-copper/10 text-copper border border-copper/30">
                      {srv.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-paper group-hover:text-copper transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-paper-muted leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian-border/50 flex justify-between items-center text-xs font-semibold text-copper">
                <span>View Complete Service Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
