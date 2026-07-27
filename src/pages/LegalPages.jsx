import React from 'react';
import { COMPANY_DETAILS } from '../data/constants';

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-3 border-b border-obsidian-border pb-6">
        <span className="text-xs font-mono font-bold text-copper uppercase">LEGAL COMPLIANCE</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-paper">Privacy Policy (UK GDPR)</h1>
        <p className="text-xs font-mono text-paper-muted">Last Updated: July 2026 • {COMPANY_DETAILS.name}</p>
      </div>

      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-obsidian-border text-xs text-paper-subtle space-y-4 leading-relaxed font-sans">
        <p>{COMPANY_DETAILS.name} (Company Reg: {COMPANY_DETAILS.regNumber}, Registered Office: {COMPANY_DETAILS.address}) is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.</p>
        
        <h3 className="text-sm font-bold text-paper font-mono">1. Information We Collect</h3>
        <p>When you use our quote calculator, appointment scheduler, or contact forms, we collect your name, email address, phone number, address, and postcode to process your inquiry and deliver heating/plumbing services.</p>

        <h3 className="text-sm font-bold text-paper font-mono">2. How We Use Your Data</h3>
        <p>We use your data strictly to issue fixed-price quotes, schedule engineer arrivals, issue digital CP12 gas safety certificates, and communicate appointment updates via SMS/email. We never sell your personal data to third parties.</p>

        <h3 className="text-sm font-bold text-paper font-mono">3. Your Data Rights</h3>
        <p>Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data held by {COMPANY_DETAILS.name} by contacting <span className="text-copper">{COMPANY_DETAILS.email}</span>.</p>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="pt-32 pb-20 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-3 border-b border-obsidian-border pb-6">
        <span className="text-xs font-mono font-bold text-copper uppercase">TERMS OF SERVICE</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-paper">Terms &amp; Conditions</h1>
        <p className="text-xs font-mono text-paper-muted">{COMPANY_DETAILS.name} • Basildon, Essex</p>
      </div>

      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-obsidian-border text-xs text-paper-subtle space-y-4 leading-relaxed font-sans">
        <h3 className="text-sm font-bold text-paper font-mono">1. Fixed-Price Quotes</h3>
        <p>All quotes issued by {COMPANY_DETAILS.name} are binding fixed-price estimates based on initial survey or customer data. Any unforeseen structural or pipework alterations discovered on site will be discussed and agreed upon prior to carrying out additional work.</p>

        <h3 className="text-sm font-bold text-paper font-mono">2. Workmanship Guarantees</h3>
        <p>All new boiler installations and general plumbing installations are covered by our 12-month installation guarantee, alongside applicable manufacturer warranties (up to 10–12 years).</p>
      </div>
    </div>
  );
}

export function CookiesPolicyPage() {
  return (
    <div className="pt-32 pb-20 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-3 border-b border-obsidian-border pb-6">
        <span className="text-xs font-mono font-bold text-teal uppercase">COOKIE POLICY</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-paper">Cookie Policy</h1>
      </div>

      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-obsidian-border text-xs text-paper-subtle space-y-4 leading-relaxed">
        <p>We use essential functional cookies to remember your state within our interactive quote wizard and booking scheduler. We do not use intrusive third-party tracking cookies.</p>
      </div>
    </div>
  );
}
