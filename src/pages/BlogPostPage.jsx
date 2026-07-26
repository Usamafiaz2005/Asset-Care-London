import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowLeft, Clock, Calendar, Calculator, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug) || blogData[0];

  return (
    <div className="pt-32 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`${post.title} | ${COMPANY_DETAILS.shortName} Guide`} 
        description={post.excerpt} 
      />

      <div>
        <Link to="/blog" className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-2">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog & Guides
        </Link>
      </div>

      <article className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono text-paper-muted">
            <span className="text-teal font-bold px-3 py-1 rounded-full bg-teal/10 border border-teal/30">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-paper leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-paper-muted leading-relaxed italic border-l-2 border-copper pl-4 py-1">
            {post.excerpt}
          </p>
        </div>

        {/* Blog Post Content Body HTML */}
        <div 
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-obsidian-border space-y-4 text-sm text-paper-subtle leading-relaxed font-sans prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Post CTA Card */}
      <div className="glass-panel rounded-2xl p-6 border border-copper/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-paper font-mono">Need Personalized Heating Advice?</h3>
          <p className="text-xs text-paper-muted">Speak to our Basildon engineering desk today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/quote" className="btn-primary text-xs py-2.5 px-5">
            <Calculator className="w-3.5 h-3.5" /> Get Fixed Quote
          </Link>
          <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-xs py-2.5 px-4">
            <Phone className="w-3.5 h-3.5 text-copper" /> {COMPANY_DETAILS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
