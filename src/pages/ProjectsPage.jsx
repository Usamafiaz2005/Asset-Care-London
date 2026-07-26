import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { projectsData } from '../data/projectsData';
import SEOHead from '../components/SEOHead';
import { COMPANY_DETAILS } from '../data/constants';

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`Workmanship Gallery & Transformations | ${COMPANY_DETAILS.shortName}`} 
        description={`Before and after boiler installations, system powerflushes, and air conditioning transformations carried out by ${COMPANY_DETAILS.name} in Essex.`} 
      />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">WORKMANSHIP GALLERY</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
          Before & After System Transformations
        </h1>
        <p className="text-base text-paper-muted leading-relaxed">
          Drag the interactive slider to compare old, inefficient heating systems with precision A-rated installations carried out by our engineers across Billericay, Basildon, and Wickford.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((proj) => (
          <BeforeAfterSlider key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}
