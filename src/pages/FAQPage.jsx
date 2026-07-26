import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function FAQPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Frequently Asked Questions | ${COMPANY_DETAILS.shortName}`} 
        description={`Common questions about boiler quotes, CP12 gas safety checks, air conditioning installation, and emergency response in Basildon.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">FREQUENTLY ASKED QUESTIONS</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Clear Answers to Trade & Heating Questions
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Everything you need to know about fixed pricing, installation timelines, warranties, and landlord compliance across South Essex.
        </p>
      </div>

      <div className="space-y-3">
        {faqData.map((faq, idx) => {
          const isExpanded = activeFaqIndex === idx;
          const contentId = `faq-page-content-${idx}`;
          return (
            <div key={idx} className="glass-panel rounded-xl border border-obsidian-border overflow-hidden">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                className="w-full p-4 text-left font-semibold text-sm text-paper flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-copper font-mono font-bold text-base">{isExpanded ? '−' : '+'}</span>
              </button>
              {isExpanded && (
                <div id={contentId} className="px-4 pb-4 text-xs text-paper-muted leading-relaxed border-t border-obsidian-border/40 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
