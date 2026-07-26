import React from 'react';
import QuoteCalculator from '../components/QuoteCalculator';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function QuotePage() {
  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Instant Fixed Quote Calculator | ${COMPANY_DETAILS.shortName}`} 
        description={`Calculate an instant fixed quote for boiler installation, repairs, air conditioning, or CP12 checks in Basildon and South Essex.`} 
      />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">INSTANT ESTIMATOR</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Get Your Fixed-Price Estimate in 60 Seconds
        </h1>
        <p className="text-sm text-paper-muted leading-relaxed">
          No mandatory phone calls or high-pressure sales reps. Select your requirements below for an instant itemized estimate.
        </p>
      </div>

      <QuoteCalculator />
    </div>
  );
}
