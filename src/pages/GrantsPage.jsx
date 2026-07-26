import React from 'react';
import HeatPumpCalculator from '../components/HeatPumpCalculator';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function GrantsPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`UK £7,500 BUS Heat Pump Grant Guide | ${COMPANY_DETAILS.shortName}`} 
        description={`Learn how the UK Boiler Upgrade Scheme (BUS) provides £7,500 off air source heat pump installations in Essex. Calculate your grant eligibility.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">GOVERNMENT INCENTIVES</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          UK £7,500 Boiler Upgrade Scheme (BUS)
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          The UK Government provides a non-repayable £7,500 grant to help homeowners replace fossil fuel boilers with zero-carbon air source heat pumps.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-paper font-mono">
          Calculate Your BUS Grant Savings
        </h2>
        <HeatPumpCalculator />
      </div>
    </div>
  );
}
