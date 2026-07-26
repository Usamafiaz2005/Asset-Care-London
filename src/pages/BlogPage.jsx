import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowRight, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`UK Heating & AC Advice Blog | ${COMPANY_DETAILS.shortName}`} 
        description={`Expert guides on boiler replacement costs, BUS heat pump grants, AC summer cooling, and landlord CP12 compliance in Essex.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">EXPERT ADVICE & GUIDES</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Heating, Heat Pump & Compliance Insights
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Honest technical guides written by our Basildon engineering desk to help UK homeowners cut energy bills and navigate heating upgrades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post, idx) => (
          <Link
            key={post.slug || idx}
            to={`/blog/${post.slug}`}
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-obsidian-border space-y-4 flex flex-col justify-between group block"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-paper-muted">
                <span className="text-teal font-bold px-2.5 py-0.5 rounded-full bg-teal/10 border border-teal/30">{post.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-paper group-hover:text-copper transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-paper-muted leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-obsidian-border/50 flex justify-between items-center text-xs font-semibold text-copper">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
