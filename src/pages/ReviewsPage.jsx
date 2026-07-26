import React from 'react';
import { reviewsData, googleRatingMeta } from '../data/reviewsData';
import { Star, ShieldCheck, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS, REVIEW_DISCLAIMER_TEXT } from '../data/constants';

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Customer Reviews & Quality Standards | ${COMPANY_DETAILS.shortName}`} 
        description={`Read customer feedback and quality standards for ${COMPANY_DETAILS.name} in Basildon, Wickford, Billericay, and South Essex.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">CUSTOMER REVIEWS & TRANSPARENCY</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Our Workmanship & Service Standards
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          {googleRatingMeta.badgeText}
        </p>
      </div>

      {/* Explicit Review Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-obsidian-card border border-copper/40 flex items-start gap-3 max-w-3xl text-xs text-paper-subtle">
        <Info className="w-5 h-5 text-copper shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-copper font-mono block">Disclosure Notice:</span>
          <span>{REVIEW_DISCLAIMER_TEXT}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((rev) => (
          <div key={rev.id} className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-copper">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-copper" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-teal bg-teal/10 px-2.5 py-0.5 rounded-full border border-teal/30">
                  {rev.badgeText}
                </span>
              </div>
              <p className="text-xs text-paper-subtle italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-obsidian-border/50 text-xs font-mono flex justify-between items-center text-paper-muted">
              <div>
                <span className="text-paper font-bold block">{rev.author}</span>
                <span>{rev.location}</span>
              </div>
              <span className="text-copper">{rev.service}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
