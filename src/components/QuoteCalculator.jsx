import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import IconRenderer from './IconRenderer';
import { calculateEstimate } from '../utils/pricingEngine';
import { submitLeadToCRM } from '../services/crmService';
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, ShieldCheck, Clock, FileCheck, Loader2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function QuoteCalculator({ onComplete = () => {} }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: 'boiler-installation',
    propertyType: 'semi',
    bedrooms: '3',
    currentFuel: 'mains-gas',
    serviceOption: 'standard',
    urgency: 'flexible'
  });

  const [estimateResult, setEstimateResult] = useState(null);

  const selectedServiceObj = servicesData.find(s => s.id === formData.serviceType) || servicesData[0];

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setIsSubmitting(true);
      const result = calculateEstimate(formData);
      setEstimateResult(result);

      try {
        // Asynchronously push payload to CRM network service
        await submitLeadToCRM(formData, result);
      } catch (err) {
        console.error('CRM lead push error:', err);
      } finally {
        setIsSubmitting(false);
        setStep(4);
        onComplete(result);
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-obsidian-border space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Accent Lighting */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-copper/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center border-b border-obsidian-border pb-4">
        <div>
          <span className="text-[11px] font-mono text-copper font-bold uppercase tracking-wider block">
            INSTANT ESTIMATOR • STEP {step} OF 4
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-paper">
            {step === 1 && "Select Required Service"}
            {step === 2 && "Property & Occupancy Details"}
            {step === 3 && `Service Specifics for ${selectedServiceObj.title}`}
            {step === 4 && "Your Fixed Price Estimate & Summary"}
          </h3>
        </div>
        <div className="text-xs font-mono font-bold text-paper-muted">
          {step === 4 ? "COMPLETE" : `${Math.round((step / 4) * 100)}%`}
        </div>
      </div>

      {/* Step 1: Select Service (Mapped dynamically from servicesData) */}
      {step === 1 && (
        <div className="space-y-4">
          <label className="text-xs font-mono text-paper-subtle block">
            Which service are you looking to quote?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
            {servicesData.slice(0, 8).map((srv) => (
              <button
                type="button"
                key={srv.id}
                onClick={() => setFormData({ ...formData, serviceType: srv.id })}
                className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                  formData.serviceType === srv.id
                    ? 'bg-copper/15 border-copper text-paper shadow-lg'
                    : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-copper/50'
                }`}
              >
                <div className={`p-2 rounded-lg ${formData.serviceType === srv.id ? 'bg-copper text-obsidian' : 'bg-obsidian-card text-copper'}`}>
                  <IconRenderer name={srv.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono text-paper">{srv.title}</div>
                  <div className="text-[11px] text-paper-muted line-clamp-1">{srv.tagline}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Property Type & Bedrooms */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-xs font-mono text-paper-subtle block">
              1. What type of property is this for?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'flat', label: 'Flat / Apartment' },
                { id: 'terraced', label: 'Terraced' },
                { id: 'semi', label: 'Semi-Detached' },
                { id: 'detached', label: 'Detached' }
              ].map((prop) => (
                <button
                  type="button"
                  key={prop.id}
                  onClick={() => setFormData({ ...formData, propertyType: prop.id })}
                  className={`p-3.5 rounded-xl border text-center text-xs font-mono transition-all ${
                    formData.propertyType === prop.id
                      ? 'bg-copper/20 border-copper text-copper font-bold'
                      : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-copper/40'
                  }`}
                >
                  {prop.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono text-paper-subtle block">
              2. Number of bedrooms / zones?
            </label>
            <div className="grid grid-cols-4 gap-3">
              {['1-2', '3', '4+', '5+'].map((beds) => (
                <button
                  type="button"
                  key={beds}
                  onClick={() => setFormData({ ...formData, bedrooms: beds })}
                  className={`p-3 rounded-xl border text-center text-xs font-mono font-bold transition-all ${
                    formData.bedrooms === beds
                      ? 'bg-teal/20 border-teal text-teal'
                      : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-teal/40'
                  }`}
                >
                  {beds} Bed
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: DYNAMIC BRANCHING SPECIFICS BASED ON SERVICE TYPE */}
      {step === 3 && (
        <div className="space-y-6">
          {/* Branch A: Heating & Boilers */}
          {(formData.serviceType === 'boiler-installation' || formData.serviceType === 'boiler-repair' || formData.serviceType === 'central-heating') && (
            <div className="space-y-3">
              <label className="text-xs font-mono text-paper-subtle block">
                Current Heating Fuel Source:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'mains-gas', label: 'Mains Natural Gas' },
                  { id: 'lpg', label: 'LPG Gas' },
                  { id: 'oil', label: 'Oil Tank' },
                  { id: 'electric', label: 'Electric / Storage' }
                ].map((fuel) => (
                  <button
                    type="button"
                    key={fuel.id}
                    onClick={() => setFormData({ ...formData, currentFuel: fuel.id })}
                    className={`p-3 rounded-xl border text-center text-xs font-mono transition-all ${
                      formData.currentFuel === fuel.id
                        ? 'bg-copper/20 border-copper text-copper font-bold'
                        : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-copper/40'
                    }`}
                  >
                    {fuel.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Branch B: Solar PV & Batteries & EV Chargers */}
          {(formData.serviceType === 'solar-pv' || formData.serviceType === 'battery-storage' || formData.serviceType === 'ev-chargers') && (
            <div className="space-y-3">
              <label className="text-xs font-mono text-paper-subtle block">
                Primary Target Goal:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'grid-cut', label: 'Cut Electricity Grid Bills' },
                  { id: 'overnight-tariff', label: 'Charge Overnight on Cheap Tariffs (7p/kWh)' },
                  { id: 'power-cut-backup', label: 'Emergency Backup During Power Cuts' },
                  { id: 'fast-ev-charging', label: 'Fast 7.4kW Driveway Vehicle Charging' }
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, serviceOption: opt.id })}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all ${
                      formData.serviceOption === opt.id
                        ? 'bg-teal/20 border-teal text-teal font-bold'
                        : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-teal/40'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Branch C: Air Conditioning */}
          {formData.serviceType === 'air-conditioning' && (
            <div className="space-y-3">
              <label className="text-xs font-mono text-paper-subtle block">
                Primary Cooling Target Location:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'bedroom', label: 'Master Bedroom' },
                  { id: 'home-office', label: 'Home Office / Loft' },
                  { id: 'living-room', label: 'Living Room / Conservatory' },
                  { id: 'multi-room', label: 'Full Home Multi-Split System' }
                ].map((rm) => (
                  <button
                    type="button"
                    key={rm.id}
                    onClick={() => setFormData({ ...formData, serviceOption: rm.id })}
                    className={`p-3 rounded-xl border text-center text-xs font-mono transition-all ${
                      formData.serviceOption === rm.id
                        ? 'bg-teal/20 border-teal text-teal font-bold'
                        : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-teal/40'
                    }`}
                  >
                    {rm.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Urgency Dispatch Selection for All Services */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono text-paper-subtle block">
              Desired Installation / Service Timeframe:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'immediate', label: 'Urgent / Same-Day (24-48 Hrs)' },
                { id: 'flexible', label: 'Standard (Next 1-2 Weeks)' }
              ].map((urg) => (
                <button
                  type="button"
                  key={urg.id}
                  onClick={() => setFormData({ ...formData, urgency: urg.id })}
                  className={`p-3.5 rounded-xl border text-center text-xs font-mono transition-all ${
                    formData.urgency === urg.id
                      ? 'bg-copper/20 border-copper text-copper font-bold'
                      : 'bg-obsidian-dark border-obsidian-border text-paper-subtle hover:border-copper/40'
                  }`}
                >
                  {urg.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: RECEIPT STYLE SUMMARY & INSTANT DISPATCH DISCLOSURE */}
      {step === 4 && estimateResult && (
        <div className="space-y-6">
          {/* Itemized Receipt Panel */}
          <div className="p-6 rounded-2xl bg-obsidian-dark border border-copper/50 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-obsidian-border pb-3">
              <div>
                <span className="text-[10px] font-mono text-paper-muted uppercase tracking-widest block">QUOTE REFERENCE</span>
                <span className="text-sm font-mono font-bold text-copper">{estimateResult.refNumber}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-paper-muted uppercase tracking-widest block">SERVICE TYPE</span>
                <span className="text-xs font-mono font-bold text-paper">{selectedServiceObj.title}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-paper-subtle">
                <span>Scope Overview:</span>
                <span className="text-paper font-semibold">{estimateResult.summary}</span>
              </div>
              <div className="flex justify-between text-paper-subtle">
                <span>Dispatch Window:</span>
                <span className="text-teal font-mono font-semibold">{estimateResult.timeframe}</span>
              </div>
              <div className="flex justify-between text-paper-subtle">
                <span>Guarantee:</span>
                <span className="text-copper font-mono font-semibold">Upfront Fixed Price Guarantee</span>
              </div>
            </div>

            <div className="pt-3 border-t border-obsidian-border flex justify-between items-center">
              <div>
                <span className="text-xs text-paper-muted block">Estimated Price Range</span>
                <span className="text-2xl font-extrabold text-copper font-mono">{estimateResult.formattedRange}</span>
              </div>
              <div className="text-right text-[10px] text-paper-muted font-mono">
                Inc. VAT & Materials
              </div>
            </div>
          </div>

          {/* Dispatch CTAs */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hello%20Asset%20Care%20London,%20I%20would%20like%20to%20confirm%20my%20quote%20reference%20${estimateResult.refNumber}%20for%20${encodeURIComponent(selectedServiceObj.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary justify-center text-sm py-3.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Confirm & Dispatch via WhatsApp / Phone
            </a>

            <button
              onClick={() => setStep(1)}
              className="w-full btn-secondary justify-center text-xs py-2.5 flex"
            >
              Recalculate Estimate
            </button>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      {step < 4 && (
        <div className="flex justify-between items-center pt-4 border-t border-obsidian-border">
          {step > 1 ? (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handlePrev}
              className="btn-secondary text-xs px-4 py-2 flex items-center gap-1.5 disabled:opacity-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : (
            <div></div>
          )}

          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleNext}
            className="btn-primary text-xs px-6 py-2.5 flex items-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Processing CRM Lead...</span>
              </>
            ) : (
              <>
                <span>{step === 3 ? "Calculate Estimate" : "Next Step"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
