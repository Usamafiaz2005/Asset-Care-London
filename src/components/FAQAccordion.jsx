import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items, title = "Frequently Asked Questions", subtitle = "Clear Answers to Common Questions", limit = 6 }) {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-copper" /> {title}
          </span>
          {subtitle && <h2 className="text-3xl font-extrabold text-paper">{subtitle}</h2>}
        </div>
      )}

      <div className="space-y-3">
        {displayItems.map((faq, idx) => {
          const isExpanded = activeFaqIndex === idx;
          const contentId = `faq-accordion-content-${idx}`;
          return (
            <div key={idx} className="glass-panel rounded-xl border border-obsidian-border overflow-hidden">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                className="w-full p-4 text-left font-semibold text-sm text-paper flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-dark transition-colors hover:text-copper"
              >
                <span>{faq.question}</span>
                <span className="text-copper font-mono font-bold text-base transition-transform duration-200">
                  {isExpanded ? '−' : '+'}
                </span>
              </button>
              {isExpanded && (
                <div id={contentId} className="px-4 pb-4 text-xs text-paper-muted leading-relaxed border-t border-obsidian-border/40 pt-3 animate-in fade-in duration-200">
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
