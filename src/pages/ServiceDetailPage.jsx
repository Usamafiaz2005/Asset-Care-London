import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import BoilerIllustration from '../components/illustrations/BoilerIllustration';
import HeatPumpIllustration from '../components/illustrations/HeatPumpIllustration';
import AirConIllustration from '../components/illustrations/AirConIllustration';
import PlumbingIllustration from '../components/illustrations/PlumbingIllustration';
import SmartHomeIllustration from '../components/illustrations/SmartHomeIllustration';
import SolarPVIllustration from '../components/illustrations/SolarPVIllustration';
import BatteryStorageIllustration from '../components/illustrations/BatteryStorageIllustration';
import EVChargerIllustration from '../components/illustrations/EVChargerIllustration';
import QuoteCalculator from '../components/QuoteCalculator';
import HeatPumpCalculator from '../components/HeatPumpCalculator';
import PhotoFrame from '../components/PhotoFrame';
import SEOHead from '../components/SEOHead';
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Calculator, ArrowLeft, Info } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  const renderIllustration = () => {
    switch (service.illustration) {
      case 'SolarPVIllustration':
        return <SolarPVIllustration className="w-full h-auto max-w-[340px] mx-auto text-copper" />;
      case 'BatteryStorageIllustration':
        return <BatteryStorageIllustration className="w-full h-auto max-w-[340px] mx-auto text-teal" />;
      case 'EVChargerIllustration':
        return <EVChargerIllustration className="w-full h-auto max-w-[340px] mx-auto text-copper" />;
      case 'HeatPumpIllustration':
        return <HeatPumpIllustration className="w-full h-auto max-w-[340px] mx-auto text-teal" />;
      case 'AirConIllustration':
        return <AirConIllustration className="w-full h-auto max-w-[340px] mx-auto text-teal" />;
      case 'PlumbingIllustration':
        return <PlumbingIllustration className="w-full h-auto max-w-[340px] mx-auto text-copper" />;
      case 'SmartHomeIllustration':
        return <SmartHomeIllustration className="w-full h-auto max-w-[340px] mx-auto text-teal" />;
      default:
        return <BoilerIllustration className="w-full h-auto max-w-[340px] mx-auto text-copper" />;
    }
  };

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`${service.title} | ${COMPANY_DETAILS.shortName}`} 
        description={`${service.shortDesc} Certified engineering across Basildon, Wickford, Billericay, and South Essex.`} 
      />

      {/* Back Button */}
      <div>
        <Link
          to="/services"
          className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-card border border-copper/40 text-xs font-mono text-copper">
            <span>{service.category}</span>
            <span>•</span>
            <span>{service.priceRange}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-paper">
            {service.title}
          </h1>

          <p className="text-base text-paper-muted leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Consultation / Advisory Disclaimer Notice if Consultation Only */}
          {service.status === 'consultation-only' && (
            <div className="p-4 rounded-xl bg-obsidian-card border border-teal/40 text-xs text-paper-subtle space-y-1">
              <div className="flex items-center gap-2 text-teal font-bold font-mono">
                <Info className="w-4 h-4 text-teal" /> Consultation & Grant Advisory Service
              </div>
              <p className="text-paper-muted leading-relaxed">
                This service includes heat-loss surveys, radiator sizing, and £7,500 UK BUS grant application guidance while final MCS accreditation is being processed.
              </p>
            </div>
          )}

          {/* Key Specs Box */}
          <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-paper-subtle font-mono space-y-2">
            <div className="flex justify-between">
              <span className="text-paper-muted">Pricing Structure:</span>
              <span className="text-copper font-bold">{service.priceRange}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-paper-muted">Warranty Guarantee:</span>
              <span className="text-teal font-bold">{service.warranty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-paper-muted">Service Radius:</span>
              <span className="text-paper font-bold">Basildon & All South Essex</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/quote" className="btn-primary text-xs py-3 px-6">
              <Calculator className="w-4 h-4" /> {service.ctaLabel || "Get Instant Quote"}
            </Link>
            <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-xs py-3 px-5">
              <Phone className="w-4 h-4 text-copper" /> Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <PhotoFrame 
            badge={service.badge || "Precision Engineering"}
            caption={{ title: service.title, subtitle: service.warranty }}
            aspectRatio="aspect-[4/3]"
          >
            {renderIllustration()}
          </PhotoFrame>
        </div>
      </div>

      {/* Benefits & Included Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Benefits */}
        <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4">
          <h3 className="text-lg font-bold text-paper font-mono text-copper">
            Why Choose {COMPANY_DETAILS.shortName} for {service.title}
          </h3>
          <ul className="space-y-3 text-xs text-paper-subtle">
            {service.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Features */}
        <div className="glass-panel rounded-2xl p-6 border border-obsidian-border space-y-4">
          <h3 className="text-lg font-bold text-paper font-mono text-teal">
            Included Technical Features
          </h3>
          <ul className="space-y-3 text-xs text-paper-subtle">
            {service.features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Calculator Section Embed */}
      <div className="space-y-6 pt-6">
        <h2 className="text-2xl font-bold text-paper font-mono">
          Calculate Your {service.title} Quote
        </h2>
        {service.id === 'heat-pumps' ? <HeatPumpCalculator /> : <QuoteCalculator />}
      </div>

    </div>
  );
}
