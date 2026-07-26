import React, { useState } from 'react';
import { Zap, ShieldCheck, Leaf, ArrowRight, Info, CheckCircle } from 'lucide-react';

export default function HeatPumpCalculator() {
  const [propertyType, setPropertyType] = useState('semi-detached');
  const [currentFuel, setCurrentFuel] = useState('mains-gas');
  const [annualBill, setAnnualBill] = useState(1400);

  const busGrantAmount = 7500;

  const calculateSavings = () => {
    let estGrossInstall = 10500;
    let co2SavedTons = 2.1;
    let percentBillSaved = 0.25;

    if (propertyType === 'detached') {
      estGrossInstall = 12500;
      co2SavedTons = 3.2;
    } else if (propertyType === 'terraced') {
      estGrossInstall = 9500;
      co2SavedTons = 1.6;
    }

    if (currentFuel === 'oil') {
      co2SavedTons += 1.8;
      percentBillSaved = 0.38;
    } else if (currentFuel === 'electric') {
      percentBillSaved = 0.50;
    }

    const netInstallCost = Math.max(0, estGrossInstall - busGrantAmount);
    const annualSavings = Math.round(annualBill * percentBillSaved);

    return {
      grossCost: estGrossInstall,
      grant: busGrantAmount,
      netCost: netInstallCost,
      annualSavings,
      co2SavedTons: co2SavedTons.toFixed(1)
    };
  };

  const results = calculateSavings();

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-teal/30 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-obsidian-border">
        <div className="w-10 h-10 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal font-bold">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-paper font-mono">£7,500 Heat Pump Grant Calculator</h3>
          <p className="text-xs text-paper-muted">Official UK Boiler Upgrade Scheme (BUS) Savings Estimator</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-paper-subtle uppercase tracking-wider font-mono mb-2">
              Property Layout:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'detached', label: 'Detached' },
                { id: 'semi-detached', label: 'Semi-Detached' },
                { id: 'terraced', label: 'Terraced' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPropertyType(item.id)}
                  className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${propertyType === item.id ? 'bg-teal text-paper border-teal font-bold' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-teal'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-paper-subtle uppercase tracking-wider font-mono mb-2">
              Current Primary Heating Fuel:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'mains-gas', label: 'Mains Gas' },
                { id: 'oil', label: 'Heating Oil' },
                { id: 'electric', label: 'Direct Electric' }
              ].map((fuel) => (
                <button
                  key={fuel.id}
                  type="button"
                  onClick={() => setCurrentFuel(fuel.id)}
                  className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${currentFuel === fuel.id ? 'bg-copper text-obsidian border-copper font-bold' : 'bg-obsidian-card text-paper-subtle border-obsidian-border hover:border-copper'}`}
                >
                  {fuel.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-paper-subtle uppercase tracking-wider font-mono">
                Current Annual Heating Bill:
              </label>
              <span className="text-sm font-bold text-copper">£{annualBill} / year</span>
            </div>
            <input
              type="range"
              min="800"
              max="3500"
              step="50"
              value={annualBill}
              onChange={(e) => setAnnualBill(Number(e.target.value))}
              className="w-full accent-copper cursor-pointer bg-obsidian-dark"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-paper-muted flex items-start gap-2.5">
            <Info className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <p>
              Grant Scheme: UK Boiler Upgrade Scheme (BUS). Grant covers £7,500 towards air source heat pump installations in England & Wales until at least 2028.
            </p>
          </div>
        </div>

        {/* Output Cards */}
        <div className="bg-obsidian-card/90 rounded-xl p-6 border border-teal/40 space-y-6">
          <div className="space-y-3 pb-4 border-b border-obsidian-border">
            <div className="flex justify-between items-center">
              <span className="text-xs text-paper-muted">Est. Gross Installation:</span>
              <span className="text-sm font-mono text-paper-subtle line-through">£{results.grossCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-teal flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> UK Government BUS Grant:
              </span>
              <span className="text-base font-bold text-teal font-mono">- £{results.grant.toLocaleString()}</span>
            </div>
            <div className="pt-2 flex justify-between items-end">
              <div>
                <span className="text-xs text-paper-muted block uppercase tracking-wider font-mono">Your Net Installation Cost:</span>
                <span className="text-3xl font-extrabold text-paper font-mono">£{results.netCost.toLocaleString()}</span>
              </div>
              <span className="text-[10px] text-teal font-semibold px-2.5 py-1 rounded-full bg-teal/10 border border-teal/30">
                Grant Pre-Deducted
              </span>
            </div>
          </div>

          {/* Environmental & Financial Impact */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-obsidian-dark border border-obsidian-border text-center">
              <span className="text-[10px] text-paper-muted uppercase tracking-wider font-mono block mb-1">Est. Bill Reduction</span>
              <span className="text-xl font-bold text-copper">£{results.annualSavings} / yr</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian-dark border border-obsidian-border text-center">
              <span className="text-[10px] text-paper-muted uppercase tracking-wider font-mono block mb-1">CO2 Offset</span>
              <span className="text-xl font-bold text-teal flex items-center justify-center gap-1">
                <Leaf className="w-4 h-4" /> {results.co2SavedTons} Tons/yr
              </span>
            </div>
          </div>

          <p className="text-[10px] text-paper-muted italic leading-relaxed">
            * Disclaimer: Grant rules subject to change. Independent advice recommended. Final eligibility subject to site heat-loss survey and EPC compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
