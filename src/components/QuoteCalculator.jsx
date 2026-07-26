import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Flame, Wrench, Wind } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function QuoteCalculator({ onComplete = null }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: 'boiler-installation',
    propertyType: 'semi-detached',
    bedrooms: '3',
    currentFuel: 'mains-gas',
    urgency: 'within-week',
    name: '',
    phone: '',
    email: '',
    postcode: 'SS14'
  });
  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = () => {
    let baseMin = 1650;
    let baseMax = 2250;

    if (formData.serviceType === 'boiler-repair') {
      return { min: 75, max: 180, label: 'Fixed Diagnostic + Parts Estimate' };
    }
    if (formData.serviceType === 'air-conditioning') {
      baseMin = 1250;
      baseMax = 1850;
      if (parseInt(formData.bedrooms) > 3) {
        baseMin += 600;
        baseMax += 900;
      }
      return { min: baseMin, max: baseMax, label: 'Split-System AC Install' };
    }
    if (formData.serviceType === 'gas-safety-certificates') {
      return { min: 70, max: 95, label: 'CP12 Landlord Inspection' };
    }

    if (formData.bedrooms === '4' || formData.bedrooms === '5+') {
      baseMin += 400;
      baseMax += 650;
    }
    if (formData.currentFuel === 'oil' || formData.currentFuel === 'electric') {
      baseMin += 350;
      baseMax += 500;
    }

    return { min: baseMin, max: baseMax, label: 'A-Rated Boiler Installation (inc. VAT)' };
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete(formData);
  };

  const estimate = calculateEstimate();

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-obsidian-border shadow-2xl relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-copper/10 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-copper/20 border border-copper/40 flex items-center justify-center text-copper font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-paper font-mono">Instant Quote Calculator</h3>
            <p className="text-xs text-paper-muted">Transparent fixed estimates for South Essex homeowners</p>
          </div>
        </div>

        <div className="text-xs font-mono font-bold text-copper bg-copper/10 px-3 py-1.5 rounded-full border border-copper/30">
          Step {step} of 4
        </div>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-teal/20 border border-teal flex items-center justify-center mx-auto text-teal">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-paper">Quote Request Received!</h4>
          <p className="text-sm text-paper-muted max-w-md mx-auto">
            Thank you, <span className="text-paper font-bold">{formData.name}</span>. Estimated range: <span className="text-copper font-bold">£{estimate.min} – £{estimate.max}</span>. Our Basildon engineering desk will review your details and send your official fixed quote via email/SMS.
          </p>
          <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-paper-subtle max-w-sm mx-auto font-mono">
            Reference: ACL-{Math.floor(100000 + Math.random() * 900000)} • Postcode: {formData.postcode}
          </div>
        </div>
      ) : (
        <div>
          {/* Progress Bar */}
          <div className="w-full bg-obsidian-card h-1.5 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-copper to-teal h-full transition-all duration-300" 
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>

          {/* STEP 1: Service Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-paper uppercase tracking-wider font-mono">Select Service Needed:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'boiler-installation', label: 'New Boiler Installation', desc: 'A-rated replacement with up to 10yr warranty', icon: Flame, color: 'text-copper' },
                  { id: 'boiler-repair', label: 'Boiler Repair & Diagnosis', desc: 'Fast emergency repair & diagnostic', icon: Wrench, color: 'text-copper' },
                  { id: 'air-conditioning', label: 'Air Conditioning (AC)', desc: 'Silent split system cooling & heating', icon: Wind, color: 'text-teal' },
                  { id: 'gas-safety-certificates', label: 'Landlord CP12 Safety Check', desc: 'Annual compliance inspection & PDF cert', icon: ShieldCheck, color: 'text-copper' },
                ].map((item) => {
                  const IconComp = item.icon;
                  const isSelected = formData.serviceType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: item.id })}
                      className={`p-4 rounded-xl text-left border transition-all ${isSelected ? 'bg-obsidian-card border-copper shadow-lg' : 'bg-obsidian-dark/50 border-obsidian-border hover:border-paper-muted'}`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <IconComp className={`w-5 h-5 ${item.color}`} />
                        <span className="text-sm font-bold text-paper">{item.label}</span>
                      </div>
                      <p className="text-xs text-paper-muted">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Property Type & Bedrooms */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-paper uppercase tracking-wider font-mono mb-3">Property Type:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Detached', 'Semi-Detached', 'Terraced', 'Apartment/Flat'].map((prop) => {
                    const slug = prop.toLowerCase().replace('/', '-');
                    const isSelected = formData.propertyType === slug;
                    return (
                      <button
                        key={prop}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: slug })}
                        className={`p-3 rounded-lg text-xs font-semibold border text-center transition-all ${isSelected ? 'bg-copper text-obsidian font-bold border-copper' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-copper'}`}
                      >
                        {prop}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-paper uppercase tracking-wider font-mono mb-3">Number of Bedrooms:</h4>
                <div className="grid grid-cols-5 gap-2">
                  {['1', '2', '3', '4', '5+'].map((beds) => (
                    <button
                      key={beds}
                      type="button"
                      onClick={() => setFormData({ ...formData, bedrooms: beds })}
                      className={`p-3 rounded-lg text-xs font-bold border text-center transition-all ${formData.bedrooms === beds ? 'bg-copper text-obsidian border-copper' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-copper'}`}
                    >
                      {beds} Beds
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Fuel Type & Urgency */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-paper uppercase tracking-wider font-mono mb-3">Current Fuel Source:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'mains-gas', label: 'Mains Gas' },
                    { id: 'oil', label: 'Oil Tank' },
                    { id: 'electric', label: 'Electric' },
                    { id: 'lpg', label: 'LPG Bottle' }
                  ].map((fuel) => (
                    <button
                      key={fuel.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, currentFuel: fuel.id })}
                      className={`p-3 rounded-lg text-xs font-semibold border text-center transition-all ${formData.currentFuel === fuel.id ? 'bg-teal text-paper font-bold border-teal' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-teal'}`}
                    >
                      {fuel.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-paper uppercase tracking-wider font-mono mb-3">Required Timeframe:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'emergency', label: 'Emergency (24-48 Hours)' },
                    { id: 'within-week', label: 'Next 7 Days' },
                    { id: 'planning', label: 'Planning / Researching' }
                  ].map((urg) => (
                    <button
                      key={urg.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: urg.id })}
                      className={`p-3 rounded-lg text-xs font-semibold border text-center transition-all ${formData.urgency === urg.id ? 'bg-copper text-obsidian font-bold border-copper' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-copper'}`}
                    >
                      {urg.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Live Estimate & Contact Submission */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Live Estimate Display Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-obsidian-card to-obsidian-dark border border-copper/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-paper-muted uppercase tracking-wider font-mono block">Estimated Cost Range ({estimate.label}):</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gradient-copper">
                    £{estimate.min} – £{estimate.max}
                  </span>
                  <span className="text-[10px] text-paper-muted block">Includes VAT, fitting & full system flush</span>
                </div>
                <div className="text-right sm:text-right text-xs text-teal font-medium">
                  ✓ Fixed-Price Guarantee<br />
                  ✓ 100% No Hidden Costs
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-semibold text-paper-subtle mb-1">Your Full Name *</label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-paper-subtle mb-1">Phone Number (For Quote SMS) *</label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-xs font-semibold text-paper-subtle mb-1">Email Address *</label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    placeholder="john@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="quote-postcode" className="block text-xs font-semibold text-paper-subtle mb-1">Essex Postcode *</label>
                  <input
                    id="quote-postcode"
                    type="text"
                    required
                    placeholder="e.g. SS14 1PR"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none uppercase"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-paper-muted">
                <input type="checkbox" id="quote-consent" required className="accent-copper" />
                <label htmlFor="quote-consent">I agree to receive my official itemized quote via email/phone. (UK GDPR Compliant)</label>
              </div>

              <button type="submit" className="w-full btn-primary justify-center text-sm py-3 font-bold">
                Lock In Fixed Quote Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Navigation Controls */}
          {step < 4 && (
            <div className="mt-8 flex justify-between items-center pt-4 border-t border-obsidian-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-secondary text-xs px-4 py-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="btn-primary text-xs px-6 py-2.5"
              >
                Next Step <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
