import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Careers & Engineering Roles | ${COMPANY_DETAILS.shortName}`} 
        description={`Join the engineering team at ${COMPANY_DETAILS.name} in Basildon, Essex. Gas Safe engineers, air conditioning technicians, and plumbing apprenticeships.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">CAREERS & APPRENTICESHIPS</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Join Basildon’s Modern Trade Team
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Asset Care London is building a modern, transparent engineering team across South Essex. We offer competitive salaries, branded vans, continuous training, and zero high-pressure sales targets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Lead Gas Safe Engineer", type: "Full-Time • Basildon HQ", desc: "Qualified Gas Safe engineer with 5+ years domestic boiler installation and breakdown experience. Van + fuel card provided." },
          { title: "Air Conditioning Installation Tech", type: "Full-Time • South Essex", desc: "F-Gas qualified air conditioning technician for residential split-system installations and light commercial servicing." },
          { title: "Junior Heating & Plumbing Apprentice", type: "Apprenticeship • Basildon", desc: "Motivated junior apprentice aiming to complete NVQ Level 3 in Plumbing & Domestic Heating with hands-on mentoring." }
        ].map((job, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-copper">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">{job.type}</span>
              </div>
              <h3 className="text-lg font-bold text-paper">{job.title}</h3>
              <p className="text-xs text-paper-muted leading-relaxed">{job.desc}</p>
            </div>
            <a href="#apply-form" className="btn-secondary text-xs py-2 justify-center">
              Apply for Role
            </a>
          </div>
        ))}
      </div>

      <div id="apply-form" className="glass-panel rounded-2xl p-6 sm:p-8 border border-obsidian-border max-w-2xl mx-auto space-y-6">
        <h3 className="text-xl font-bold text-paper font-mono">Register Your Interest</h3>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-teal/20 border border-teal text-teal flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-paper">Application Received</h4>
            <p className="text-xs text-paper-muted">Thank you. Our management team will review your application within 3 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="career-name" className="block text-xs font-semibold text-paper-subtle mb-1">Full Name *</label>
              <input id="career-name" type="text" required placeholder="John Smith" className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="career-email" className="block text-xs font-semibold text-paper-subtle mb-1">Email Address *</label>
                <input id="career-email" type="email" required placeholder="john@example.co.uk" className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none" />
              </div>
              <div>
                <label htmlFor="career-phone" className="block text-xs font-semibold text-paper-subtle mb-1">Phone Number *</label>
                <input id="career-phone" type="tel" required placeholder="07123 456789" className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none" />
              </div>
            </div>

            <div>
              <label htmlFor="career-role" className="block text-xs font-semibold text-paper-subtle mb-1">Position of Interest *</label>
              <select id="career-role" required className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none">
                <option value="Lead Gas Safe Engineer">Lead Gas Safe Engineer</option>
                <option value="Air Conditioning Tech">Air Conditioning Tech</option>
                <option value="Plumbing Apprentice">Plumbing Apprentice</option>
                <option value="Sub-contractor / Other">Sub-contractor / Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="career-experience" className="block text-xs font-semibold text-paper-subtle mb-1">Qualifications & Experience Summary *</label>
              <textarea id="career-experience" rows="3" required placeholder="Outline your Gas Safe / F-Gas numbers, years of trade experience, and current location..." className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"></textarea>
            </div>

            <button type="submit" className="w-full btn-primary justify-center text-xs py-3 font-bold">
              Submit Job Application <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
