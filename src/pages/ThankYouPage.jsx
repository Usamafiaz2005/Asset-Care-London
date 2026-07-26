import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function ThankYouPage() {
  return (
    <div className="pt-32 pb-20 space-y-8 max-w-2xl mx-auto px-4 text-center">
      <SEOHead title={`Thank You | ${COMPANY_DETAILS.shortName}`} description="Thank you for contacting Asset Care London." />

      <div className="w-16 h-16 rounded-full bg-teal/20 border border-teal text-teal flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <h1 className="text-4xl font-extrabold text-paper font-mono">
        Thank You for Reaching Out!
      </h1>

      <p className="text-sm text-paper-muted leading-relaxed">
        Your submission has been received by our Basildon engineering desk. A team member will respond within 2 business hours.
      </p>

      <div className="pt-4">
        <Link to="/" className="btn-primary text-xs py-3 px-6 inline-flex">
          Return to Homepage <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
