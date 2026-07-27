import React from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Award, Star, ArrowRight, Zap, Phone } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { COMPANY_DETAILS } from '../data/constants';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-dark/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 border border-copper/40 shadow-2xl bg-[#12181C] space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-obsidian-border pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-wider block">{project.category} • CASE STUDY</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-paper">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-paper-muted pt-1">
              <span className="text-teal font-semibold">📍 {project.location}</span>
              <span>•</span>
              <span className="text-copper font-semibold">⏱️ {project.duration}</span>
              <span>•</span>
              <span className="text-teal font-semibold">💰 {project.energySavings}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-obsidian-dark hover:bg-obsidian-card border border-obsidian-border text-paper-muted hover:text-paper transition-colors"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Slider Container */}
        <BeforeAfterSlider project={project} />

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-paper-subtle">
          
          {/* Left Column: Challenge & Solution */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0D1117] border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-copper flex items-center gap-2">
                ⚠️ Client Challenge &amp; Initial State
              </h4>
              <p className="text-paper-muted text-xs leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1117] border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-teal flex items-center gap-2">
                🛠️ Engineering Solution &amp; Execution
              </h4>
              <p className="text-paper-muted text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Right Column: Equipment & Verified Review */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0D1117] border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-copper">
                📦 Certified Equipment Installed:
              </h4>
              <ul className="space-y-1.5 text-xs text-paper-muted">
                {project.equipment && project.equipment.map((eq, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.customerQuote && (
              <div className="p-4 rounded-xl bg-[#0D1117] border border-copper/30 space-y-2">
                <div className="flex items-center gap-1 text-copper">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-copper" />
                  ))}
                  <span className="text-[10px] font-mono text-paper-muted ml-2">Verified Client Feedback</span>
                </div>
                <p className="text-xs text-paper italic leading-relaxed">"{project.customerQuote}"</p>
              </div>
            )}
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-obsidian-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-paper-muted">
            Need a similar transformation for your property?
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="btn-secondary text-xs py-2.5 px-4"
            >
              Close Showcase
            </button>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hi%20Asset%20Care%20London,%20I%20saw%20your%20case%20study%20for%20${encodeURIComponent(project.title)}%20and%20would%20like%20a%20similar%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Book Similar Job via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
