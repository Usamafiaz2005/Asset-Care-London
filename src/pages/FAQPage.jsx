import React from 'react';
import { faqData } from '../data/faqData';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Frequently Asked Questions | ${COMPANY_DETAILS.shortName}`} 
        description={`Common questions about boiler quotes, CP12 gas safety checks, air conditioning installation, and emergency response in Basildon.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">FREQUENTLY ASKED QUESTIONS</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Clear Answers to Trade &amp; Heating Questions
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Everything you need to know about fixed pricing, installation timelines, warranties, and landlord compliance across South Essex.
        </p>
      </div>

      <FAQAccordion items={faqData} title={null} subtitle={null} limit={null} />
    </div>
  );
}
