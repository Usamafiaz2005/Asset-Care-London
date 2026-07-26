import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceAreasData } from '../data/serviceAreasData';
import { MapPin, Phone, Calculator, CheckCircle2 } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function ServiceAreaPage() {
  const { areaSlug } = useParams();
  const area = serviceAreasData.find(a => a.slug === areaSlug) || serviceAreasData[0];

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Heating & Plumbing Engineers ${area.name} (${area.postcodes}) | ${COMPANY_DETAILS.shortName}`} 
        description={`Certified heating, boiler installation, plumbing, and AC services in ${area.name} (${area.postcodes}). Upfront fixed quotes by ${COMPANY_DETAILS.name}.`} 
      />

      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-card border border-copper/40 text-xs font-mono text-copper">
          <MapPin className="w-3.5 h-3.5" />
          <span>Postcodes: {area.postcodes}</span>
          {area.isHQ && <span className="text-teal font-bold">• Company Head Office</span>}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          {area.headline}
        </h1>

        <p className="text-base text-paper-muted leading-relaxed">
          {area.introText}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link to="/quote" className="btn-primary text-xs py-3 px-6">
            <Calculator className="w-4 h-4" /> Get Fixed Quote for {area.name}
          </Link>
          <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-xs py-3 px-5">
            <Phone className="w-4 h-4 text-copper" /> Call {COMPANY_DETAILS.phone}
          </a>
        </div>
      </div>

      {/* Local Context & Property Types Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4">
          <h3 className="text-lg font-bold text-paper font-mono text-copper">
            Key Landmarks Served in {area.name}
          </h3>
          <ul className="space-y-2.5 text-xs text-paper-subtle">
            {area.landmarks.map((lm, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal" />
                <span>{lm}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4">
          <h3 className="text-lg font-bold text-paper font-mono text-teal">
            Local Housing Stock & System Expertise
          </h3>
          <p className="text-xs text-paper-muted leading-relaxed">
            {area.typicalProperties}
          </p>
          <div className="pt-2 text-xs font-mono text-paper-subtle flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-copper" />
            <span>Average Dispatch Arrival: Under 45 Minutes</span>
          </div>
        </div>

      </div>

      {/* Embedded Calculator */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-paper font-mono">
          Calculate Your Fixed Quote in {area.name} ({area.postcodes})
        </h2>
        <QuoteCalculator />
      </div>

    </div>
  );
}
