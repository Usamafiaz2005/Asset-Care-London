import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-20 space-y-8 max-w-2xl mx-auto px-4 text-center">
      <SEOHead title={`404 Page Not Found | ${COMPANY_DETAILS.shortName}`} description="Page not found." />

      <div className="w-16 h-16 rounded-full bg-copper/20 border border-copper text-copper flex items-center justify-center mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>

      <h1 className="text-4xl font-extrabold text-paper font-mono">
        404 — Page Not Found
      </h1>

      <p className="text-sm text-paper-muted leading-relaxed">
        The page or service parameter you requested does not exist or has been moved.
      </p>

      <div className="pt-4">
        <Link to="/" className="btn-primary text-xs py-3 px-6 inline-flex">
          Return to Homepage <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
