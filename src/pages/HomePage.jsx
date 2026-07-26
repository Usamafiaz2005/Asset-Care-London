import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wrench, Wind, Zap, ShieldCheck, CheckCircle2, ArrowRight, Phone, MapPin, Star, Calculator, Clock, Award, HelpCircle, Thermometer, Info, HeartHandshake, FileCheck, Sun, Battery, Sparkles, Percent, CreditCard } from 'lucide-react';
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
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustGuarantees from '../components/TrustGuarantees';
import AnimatedStat from '../components/AnimatedStat';
import SkeletonLoader from '../components/SkeletonLoader';
import PhotoFrame from '../components/PhotoFrame';
import BrandCarousel from '../components/BrandCarousel';
import ProcessTimeline from '../components/ProcessTimeline';
import SEOHead from '../components/SEOHead';
import useScrollReveal from '../hooks/useScrollReveal';
import { servicesData } from '../data/servicesData';
import { serviceAreasData } from '../data/serviceAreasData';
import { faqData } from '../data/faqData';
import { reviewsData, googleRatingMeta } from '../data/reviewsData';
import { projectsData } from '../data/projectsData';
import { COMPANY_DETAILS, REVIEW_DISCLAIMER_TEXT } from '../data/constants';

export default function HomePage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // Scroll reveal observers for homepage sections
  const [heroRef] = useScrollReveal(0.1);
  const [solutionsRef] = useScrollReveal(0.15);
  const [servicesRef] = useScrollReveal(0.15);
  const [renewablesRef] = useScrollReveal(0.15);
  const [trustRef] = useScrollReveal(0.15);
  const [basildonRef] = useScrollReveal(0.15);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const renderServiceIcon = (illustration) => {
    switch (illustration) {
      case 'SolarPVIllustration':
        return <Sun className="w-6 h-6 text-copper" />;
      case 'BatteryStorageIllustration':
        return <Battery className="w-6 h-6 text-teal" />;
      case 'EVChargerIllustration':
      case 'HeatPumpIllustration':
        return <Zap className="w-6 h-6 text-teal" />;
      case 'AirConIllustration':
        return <Wind className="w-6 h-6 text-teal" />;
      case 'SmartHomeIllustration':
        return <Thermometer className="w-6 h-6 text-copper" />;
      case 'PlumbingIllustration':
        return <Wrench className="w-6 h-6 text-copper" />;
      default:
        return <Flame className="w-6 h-6 text-copper" />;
    }
  };

  return (
    <div className="space-y-24 pb-16">
      <SEOHead 
        title={`${COMPANY_DETAILS.shortName} | Heating, Plumbing, AC & Solar Engineers Basildon`}
        description="Basildon's modern heating, plumbing, air conditioning, and solar energy engineers. Upfront transparent pricing, certified workmanship, and emergency callouts in South Essex."
      />

      {/* 1. HERO SECTION WITH HIGH-TRUST INCENTIVE BADGES */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-obsidian-border">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-copper/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-card border border-copper/30 text-xs font-mono text-paper-subtle shadow-md">
                  <span className="w-2 h-2 rounded-full bg-copper animate-ping"></span>
                  Basildon HQ (SS14) • Heating, Plumbing & Solar Engineers
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-teal/20 text-teal border border-teal/40 text-xs font-mono font-bold">
                  <Percent className="w-3.5 h-3.5" /> 0% UK VAT on Renewables
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-paper leading-[1.08]">
                Heating, Cooling & Solar <br />
                <span className="text-gradient-copper">Engineered For Essex Homes</span>
              </h1>

              <p className="text-base sm:text-lg text-paper-muted max-w-2xl leading-relaxed">
                Basildon’s modern alternative to traditional trade calls. Upfront fixed pricing, certified Gas Safe & MCS engineering, and 0% APR trade finance options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/quote" className="btn-primary text-sm py-3.5 px-7">
                  <Calculator className="w-4 h-4" />
                  <span>Get Instant Fixed Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-sm py-3.5 px-6">
                  <Phone className="w-4 h-4 text-copper" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-obsidian-border text-xs text-paper-subtle font-mono">
                <AnimatedStat endValue={2026} label="Incorporated" subtext="Companies House Reg: 16377721" />
                <AnimatedStat endValue={8} label="Towns Covered" subtext="Basildon & South Essex Radius" />
                <AnimatedStat endValue={100} suffix="%" label="Fixed Quotes" subtext="Zero Unexpected Add-ons" />
                <AnimatedStat endValue={7500} prefix="£" label="Max Grant Value" subtext="UK BUS Heat Pump Scheme" />
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <PhotoFrame 
                badge="Gas Safe & MCS Certified"
                caption={{ title: "A-Rated High Efficiency Systems", subtitle: "0% VAT on Solar & Heat Pumps • 0% Finance Options Available" }}
                aspectRatio="aspect-[4/3]"
              >
                <BoilerIllustration className="w-full h-auto max-w-[320px] mx-auto" />
              </PhotoFrame>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AUTHORIZED BRAND PARTNERSHIP CAROUSEL */}
      <BrandCarousel />

      {/* 3. OUTCOME-FOCUSED SOLUTIONS SECTION */}
      <section ref={solutionsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">OUR CORE COMMITMENT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-paper leading-tight">
              Clear Communication. Upfront Fixed Pricing. Professional Workmanship.
            </h2>
            <p className="text-sm text-paper-muted leading-relaxed">
              Generate your own clean solar electricity with 0% UK VAT, cool your bedroom during summer heatwaves, or upgrade to an A-rated combi boiler with flexible financing options.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-obsidian-card border border-obsidian-border">
                <FileCheck className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-paper font-mono">Itemized Upfront Quotes</h3>
                  <p className="text-xs text-paper-muted">Written quote agreed before work starts. The price agreed upfront is the exact price you pay.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-obsidian-card border border-obsidian-border">
                <Clock className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-paper font-mono">Punctual Dispatch Windows</h3>
                  <p className="text-xs text-paper-muted">We arrive within agreed 4-hour windows with a 30-minute advance arrival SMS notice.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-obsidian-card border border-obsidian-border">
                <CreditCard className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-paper font-mono">Spread the Cost with Trade Finance</h3>
                  <p className="text-xs text-paper-muted">Flexible monthly repayment options on all major boiler and solar PV panel installations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PhotoFrame 
              badge="13 Active Services"
              caption={{ title: "Complete South Essex Coverage", subtitle: "Basildon, Wickford, Billericay, Southend & Surrounds" }}
              aspectRatio="aspect-[4/3]"
            >
              <SmartHomeIllustration className="w-full h-auto max-w-[320px] mx-auto text-teal" />
            </PhotoFrame>
          </div>

        </div>
      </section>

      {/* 4. "WHAT HAPPENS NEXT?" 3-STEP PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessTimeline />
      </section>

      {/* 5. FULL-WIDTH RENEWABLE CLEAN ENERGY SPOTLIGHT WITH 0% VAT INCENTIVES */}
      <section ref={renewablesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel rounded-3xl p-8 border border-teal/40 bg-gradient-to-br from-obsidian-card via-obsidian-dark to-obsidian-card space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-obsidian-border pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal" /> UK GOVERNMENT 0% VAT RELIEF UNTIL MARCH 2027
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-paper">
                Generate & Store Solar Electricity with 0% UK VAT
              </h2>
              <p className="text-xs sm:text-sm text-paper-muted">Active Solar PV, Home Battery Storage, and Smart EV Charger installations with zero VAT charges.</p>
            </div>
            <Link to="/services/solar-pv" className="btn-primary text-xs py-2.5 px-5">
              Explore Solar Solutions <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PhotoFrame 
              badge="0% UK VAT Relief"
              caption={{ title: "Solar PV Installations", subtitle: "Cut electricity bills by up to 70% with 0% VAT" }}
              aspectRatio="aspect-square"
            >
              <SolarPVIllustration className="w-full h-auto max-w-[220px] mx-auto text-copper" />
            </PhotoFrame>

            <PhotoFrame 
              badge="Grid Independent"
              caption={{ title: "Home Battery Storage", subtitle: "Charge overnight on 7p/kWh off-peak tariffs" }}
              aspectRatio="aspect-square"
            >
              <BatteryStorageIllustration className="w-full h-auto max-w-[220px] mx-auto text-teal" />
            </PhotoFrame>

            <PhotoFrame 
              badge="Smart EV Charging"
              caption={{ title: "Smart EV Wallbox Chargers", subtitle: "7.4kW fast charging with PEN protection" }}
              aspectRatio="aspect-square"
            >
              <EVChargerIllustration className="w-full h-auto max-w-[220px] mx-auto text-copper" />
            </PhotoFrame>
          </div>
        </div>
      </section>

      {/* 6. CORE SERVICES BENTO GRID */}
      <section ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">FULL SERVICE SCOPE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
            Everything Your Home Needs to Stay Warm, Cool & Powered
          </h2>
          <p className="text-sm text-paper-muted">
            13 active core services across heating, plumbing, air conditioning, solar PV, and landlord compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 9).map((srv) => (
            <Link
              key={srv.id}
              to={`/services/${srv.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-obsidian-border flex flex-col justify-between space-y-4 group block relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-dark"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-dark border border-copper/30 flex items-center justify-center text-copper group-hover:border-copper transition-colors">
                    {renderServiceIcon(srv.illustration)}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-copper/10 text-copper border border-copper/30">
                      {srv.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-paper group-hover:text-copper transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-paper-muted leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian-border/50 flex justify-between items-center text-xs font-semibold text-copper">
                <span>Explore Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link to="/services" className="btn-secondary text-xs py-3 px-6 inline-flex">
            View All 13 Core Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. INTERACTIVE CALCULATORS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">TRANSPARENT TOOLS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
            Calculate Your Fixed Quote or Heat Pump Grant Savings
          </h2>
          <p className="text-sm text-paper-muted">
            No endless form fields or sales phone calls. Get instant, transparent estimates calculated in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense fallback={<SkeletonLoader height="h-96" />}>
            <QuoteCalculator onComplete={() => {}} />
          </Suspense>
          <Suspense fallback={<SkeletonLoader height="h-96" />}>
            <HeatPumpCalculator />
          </Suspense>
        </div>
      </section>

      {/* 8. VERIFIED STANDARDS & TRUST COMPLIANCE */}
      <section ref={trustRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustGuarantees />
      </section>

      {/* 9. WORKMANSHIP SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">WORKMANSHIP SHOWCASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
              Recent Transformations in South Essex
            </h2>
            <p className="text-xs text-paper-muted">Real system upgrades with case study context and technical specs</p>
          </div>
          <Link to="/projects" className="btn-secondary text-xs">
            View All Projects Gallery <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((proj) => (
            <div key={proj.id} className="space-y-3">
              <BeforeAfterSlider project={proj} />
              <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border text-xs text-paper-subtle space-y-1">
                <div className="font-bold text-paper font-mono">Case Study Context: {proj.title}</div>
                <p className="text-paper-muted text-[11px] leading-relaxed">{proj.description}</p>
                <div className="text-copper font-mono text-[10px] pt-1">Technical Specs: {proj.specs}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. REVIEWS & TRANSPARENT DISCLOSURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block">CUSTOMER REVIEWS & STANDARDS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
            Our Quality & Transparency Commitment
          </h2>
          <p className="text-xs text-paper-muted font-mono">
            {googleRatingMeta.badgeText}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-obsidian-card border border-copper/40 flex items-start gap-3 max-w-3xl mx-auto text-xs text-paper-subtle">
          <Info className="w-5 h-5 text-copper shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-copper font-mono block">Disclosure Notice:</span>
            <span>{REVIEW_DISCLAIMER_TEXT}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev) => (
            <div key={rev.id} className="glass-panel rounded-2xl p-5 border border-obsidian-border space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-copper">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-copper" />
                  ))}
                </div>
                <p className="text-xs text-paper-subtle italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
              <div className="pt-3 border-t border-obsidian-border/50 text-[11px] font-mono space-y-1">
                <div className="text-paper font-bold">{rev.author}</div>
                <div className="text-paper-muted">{rev.location} • {rev.service}</div>
                <div className="text-[10px] text-teal font-semibold">{rev.badgeText}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. LOCAL BASILDON & SOUTH ESSEX SPOTLIGHT */}
      <section ref={basildonRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="glass-panel rounded-3xl p-8 border border-obsidian-border space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-obsidian-border pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">LOCAL ESSEX SPOTLIGHT</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-paper">
                Why Choose Asset Care in Basildon & South Essex?
              </h2>
            </div>
            <div className="text-xs font-mono text-teal bg-teal/10 px-3 py-1.5 rounded-full border border-teal/30 font-bold">
              HQ: {COMPANY_DETAILS.street}, {COMPANY_DETAILS.city}, {COMPANY_DETAILS.postcode}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-paper-subtle leading-relaxed">
            <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-copper">Basildon HQ Proximity</h4>
              <p className="text-paper-muted">
                Based at 118 Gordon Road, Basildon (SS14), our engineers are strategically positioned to serve Basildon, Wickford, and Billericay with minimal travel delays.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-teal">Essex Housing Stock Expertise</h4>
              <p className="text-paper-muted">
                From 1960s Basildon new-town properties to modern Billericay developments, we understand local heating pipework configurations and radiator sizing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-2">
              <h4 className="font-bold text-paper font-mono text-copper">Transparent Local Reputation</h4>
              <p className="text-paper-muted">
                Incorporated in April 2026 under Companies House Reg 16377721, we are committed to building long-term trust across South Essex households.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {serviceAreasData.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="p-3.5 rounded-xl bg-obsidian-dark hover:bg-obsidian-card border border-obsidian-border hover:border-copper text-left transition-all flex items-center justify-between group block focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                <div>
                  <div className="text-xs font-bold text-paper group-hover:text-copper transition-colors">{area.name}</div>
                  <div className="text-[10px] font-mono text-paper-muted">{area.postcodes}</div>
                </div>
                <MapPin className="w-4 h-4 text-paper-muted group-hover:text-copper transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ACCESSIBLE FAQ ACCORDION & FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl font-extrabold text-paper">
            Clear Answers to Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.slice(0, 6).map((faq, idx) => {
            const isExpanded = activeFaqIndex === idx;
            const contentId = `faq-content-${idx}`;
            return (
              <div key={idx} className="glass-panel rounded-xl border border-obsidian-border overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  className="w-full p-4 text-left font-semibold text-sm text-paper flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-dark"
                >
                  <span>{faq.question}</span>
                  <span className="text-copper font-mono font-bold text-base">{isExpanded ? '−' : '+'}</span>
                </button>
                {isExpanded && (
                  <div id={contentId} className="px-4 pb-4 text-xs text-paper-muted leading-relaxed border-t border-obsidian-border/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-copper/50 bg-gradient-to-r from-obsidian-card via-obsidian-dark to-obsidian-card text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-paper">
              Ready for Honest, Certified Heating, AC & Solar Work?
            </h2>
            <p className="text-sm text-paper-muted">
              Get an instant itemized quote range in 60 seconds, or speak directly to our Basildon dispatch desk.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/quote" className="btn-primary text-sm py-4 px-8">
              <Calculator className="w-4 h-4" /> Calculate Fixed Quote Now
            </Link>
            <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-sm py-4 px-7">
              <Phone className="w-4 h-4 text-copper" /> Call {COMPANY_DETAILS.phone}
            </a>
          </div>

          <div className="text-xs font-mono text-paper-muted pt-4">
            Reg. Office: {COMPANY_DETAILS.address} • Companies House Reg: {COMPANY_DETAILS.regNumber}
          </div>
        </div>
      </section>

    </div>
  );
}
