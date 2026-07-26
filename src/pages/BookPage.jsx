import React from 'react';
import BookingScheduler from '../components/BookingScheduler';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function BookPage() {
  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Book Engineer Arrival Window | ${COMPANY_DETAILS.shortName}`} 
        description={`Schedule a morning, afternoon, or evening arrival window for your boiler service, diagnostic, or CP12 check in Basildon.`} 
      />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block font-mono">ONLINE SCHEDULING</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Book Your Engineer Dispatch Slot
        </h1>
        <p className="text-sm text-paper-muted leading-relaxed">
          Select your preferred arrival date and 4-hour window. Our dispatch desk will confirm your appointment via SMS.
        </p>
      </div>

      <BookingScheduler />
    </div>
  );
}
