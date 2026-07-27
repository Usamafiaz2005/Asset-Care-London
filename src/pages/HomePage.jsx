import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wrench, Wind, Zap, ShieldCheck, CheckCircle2, ArrowRight, Phone, MapPin, Star, Calculator, Clock, Award, HelpCircle, Thermometer, Info, HeartHandshake, FileCheck, Sun, Battery, Sparkles, Percent, CreditCard, ShieldAlert, Truck, UserCheck, Layers, Eye } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import HeatPumpCalculator from '../components/HeatPumpCalculator';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustGuarantees from '../components/TrustGuarantees';
import AnimatedStat from '../components/AnimatedStat';
import SkeletonLoader from '../components/SkeletonLoader';
import PhotoFrame from '../components/PhotoFrame';
import BrandCarousel from '../components/BrandCarousel';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudyModal from '../components/CaseStudyModal';
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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Scroll reveal observers for homepage sections
  const [heroRef] = useScrollReveal(0.1);
  const [narrativeRef] = useScrollReveal(0.15);
  const [servicesRef] = useScrollReveal(0.15);
  const [renewablesRef] = useScrollReveal(0.15);
  const [caseStudyRef] = useScrollReveal(0.15);
  const [trustRef] = useScrollReveal(0.15);
  const [basildonRef] = useScrollReveal(0.15);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(p => p.id !== featuredProject.id);

  return (
    <div className="space-y-28 pb-20">
      <SEOHead 
        title={`${COMPANY_DETAILS.shortName} | Heating, Plumbing, AC & Solar Engineers Basildon`}
        description="Basildon's premier heating, plumbing, air conditioning, and solar energy engineers. Upfront transparent pricing, certified trade workmanship, and emergency dispatch in South Essex."
      />

      {/* 1. HERO SECTION WITH CERTIFIED TRADE ENGINEER PHOTOGRAPHY */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-obsidian-border bg-gradient-to-b from-obsidian-dark via-obsidian-card to-obsidian-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-copper/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-teal/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-dark border border-copper/40 text-xs font-mono text-paper shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper animate-pulse"></span>
                  Basildon Dispatch Desk (SS14) • Gas Safe & MCS Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal/20 text-teal border border-teal/40 text-xs font-mono font-bold">
                  <Percent className="w-3.5 h-3.5" /> 0% UK VAT on Solar & Battery
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-paper leading-[1.06]">
                Heating, Cooling & Solar <br />
                <span className="text-gradient-copper">Engineered For Essex Homes</span>
              </h1>

              <p className="text-base sm:text-xl text-paper-muted max-w-2xl leading-relaxed font-light">
                No high-pressure sales calls. No unvetted sub-contractors. Just certified heating, air conditioning, and solar energy installed with mathematical precision.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/quote" className="btn-primary text-sm py-4 px-8 shadow-xl">
                  <Calculator className="w-4.5 h-4.5" />
                  <span>Get Instant Fixed Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a href={COMPANY_DETAILS.phoneHref} className="btn-secondary text-sm py-4 px-7">
                  <Phone className="w-4 h-4 text-copper" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>

              {/* Stat Highlights */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-obsidian-border text-xs text-paper-subtle font-mono">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-paper font-mono">2026</div>
                  <div className="font-bold text-copper uppercase tracking-wider">Incorporated</div>
                  <div className="text-[10px] text-paper-muted">Reg: 16377721</div>
                </div>
                <AnimatedStat endValue={8} label="Towns Covered" subtext="Basildon & Radius" />
                <AnimatedStat endValue={100} suffix="%" label="Fixed Price" subtext="Zero Unexpected Add-ons" />
                <AnimatedStat endValue={7500} prefix="£" label="Max Grant Value" subtext="UK Heat Pump Grant" />
              </div>
            </div>

            {/* Right Hero Photo Frame Overlay */}
            <div className="lg:col-span-5 relative">
              <PhotoFrame 
                imageSrc="/images/engineer-at-work.webp"
                imageAlt="Certified Asset Care London Heating Engineer at Work"
                badge="Gas Safe ID: 16377721"
                caption={{ title: "Certified Trade Engineering", subtitle: "A-Rated Systems Installed by Uniformed Specialists" }}
                aspectRatio="aspect-[4/3]"
                priority={true}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. AUTHORIZED BRAND PARTNERSHIP CAROUSEL */}
      <BrandCarousel />

      {/* 3. NARRATIVE: THE HOMEOWNER PROBLEM VS ASSET CARE GUARANTEE */}
      <section ref={narrativeRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-obsidian-card border border-obsidian-border space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">WHY WE BUILT ASSET CARE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-paper leading-tight">
              Tired of Tradesmen Who Don’t Turn Up or Add Hidden Costs?
            </h2>
            <p className="text-sm sm:text-base text-paper-muted leading-relaxed">
              Traditional UK trade calls are broken—vague quotes, unreturned phone calls, and messy work. We engineered Asset Care London to give South Essex homeowners complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-obsidian-dark border border-obsidian-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper font-bold font-mono">01</div>
              <h3 className="text-lg font-bold text-paper">Itemized Upfront Quotes</h3>
              <p className="text-xs text-paper-muted leading-relaxed">
                We issue a binding written quote before turning a single screw. The price agreed upfront is the exact price you pay.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-dark border border-obsidian-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-center text-teal font-bold font-mono">02</div>
              <h3 className="text-lg font-bold text-paper">Punctual Dispatch & SMS Tracking</h3>
              <p className="text-xs text-paper-muted leading-relaxed">
                We arrive in agreed 4-hour time slots with a 30-minute advance arrival SMS notice so you never waste a day waiting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-dark border border-obsidian-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper font-bold font-mono">03</div>
              <h3 className="text-lg font-bold text-paper">Clean Floor Protection & Guarantee</h3>
              <p className="text-xs text-paper-muted leading-relaxed">
                Our engineers wear boot covers, use protective floor mats, clean up completely, and provide manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL SERVICES SHOWCASE WITH LARGE AUTHENTIC PHOTOGRAPHY */}
      <section ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-obsidian-border pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">OUR CORE SPECIALISMS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-paper">
              Engineered Climate & Power Solutions
            </h2>
            <p className="text-xs sm:text-sm text-paper-muted">Real trade photography showing complete system transformations across South Essex homes.</p>
          </div>
          <Link to="/services" className="btn-secondary text-xs">
            View All 13 Core Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Feature Block 1: Heating & Boilers (Text Left, Photo Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-obsidian-card border border-obsidian-border">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-copper font-bold uppercase tracking-wider block">01 • BOILER & HEATING INSTALLATION</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-paper">
              A-Rated Combi Boilers & System Upgrades
            </h3>
            <p className="text-xs sm:text-sm text-paper-muted leading-relaxed">
              Lower your gas bills with high-efficiency Worcester Bosch or Vaillant combi boilers. Installed with powerflushing, magnetic central heating filters, and up to 10-year manufacturer warranties.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-paper-subtle">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-copper" /> 10 Year Warranty</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-copper" /> 0% APR Trade Finance</span>
            </div>
            <div className="pt-2">
              <Link to="/services/boiler-installation" className="btn-primary text-xs py-3 px-6 inline-flex">
                Explore Boiler Installation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <PhotoFrame 
              imageSrc="/images/hero-copper-pipework.webp"
              imageAlt="Precision Copper Pipework Boiler Upgrade"
              badge="Worcester Bosch & Vaillant Accredited"
              caption={{ title: "Precision Copper Pipework", subtitle: "Neat, efficient central heating pipework installations" }}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>

        {/* Feature Block 2: Rooftop Solar & Clean Energy (Photo Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-obsidian-card border border-teal/40">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <PhotoFrame 
              imageSrc="/images/solar-rooftop-engineer.webp"
              imageAlt="Rooftop Solar PV Installation Specialist"
              badge="0% UK VAT Relief"
              caption={{ title: "Rooftop Solar PV Panels", subtitle: "Generate your own clean electricity with 0% UK VAT" }}
              aspectRatio="aspect-[16/9]"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono text-teal font-bold uppercase tracking-wider block">02 • CLEAN RENEWABLE ENERGY</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-paper">
              Solar PV Panels & Battery Storage
            </h3>
            <p className="text-xs sm:text-sm text-paper-muted leading-relaxed">
              Cut grid electricity bills by up to 70% with sleek matte-black solar panels and LFP battery storage. Take advantage of 0% UK VAT on energy relief until March 2027.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-paper-subtle">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal" /> MCS Certified</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal" /> 7p/kWh Off-Peak Charging</span>
            </div>
            <div className="pt-2">
              <Link to="/services/solar-pv" className="btn-primary text-xs py-3 px-6 inline-flex bg-teal hover:bg-teal-light text-obsidian font-bold">
                Explore Solar PV & Batteries <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Block 3: Air Conditioning Climate Control (Text Left, Photo Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-obsidian-card border border-obsidian-border">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-copper font-bold uppercase tracking-wider block">03 • AIR CONDITIONING COOLING</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-paper">
              Multi-Room Split Air Conditioning
            </h3>
            <p className="text-xs sm:text-sm text-paper-muted leading-relaxed">
              Keep your bedrooms and loft office cool during summer heatwaves and warm during winter. Whisper-quiet 19dB inverter technology with smart Wi-Fi phone app controls.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-paper-subtle">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-copper" /> A+++ Energy Rating</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-copper" /> Concealed Exterior Trunking</span>
            </div>
            <div className="pt-2">
              <Link to="/services/air-conditioning" className="btn-primary text-xs py-3 px-6 inline-flex">
                Explore Air Conditioning <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <PhotoFrame 
              imageSrc="/images/luxury-living-ac.webp"
              imageAlt="Luxury Living Room Air Conditioning Split Unit"
              badge="Whisper-Quiet 19dB"
              caption={{ title: "Multi-Zone Climate Control", subtitle: "Sleek wall-mounted split units with smart controls" }}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* 5. "WHAT HAPPENS NEXT?" 3-STEP PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessTimeline />
      </section>

      {/* 6. WORKMANSHIP SHOWCASE: ASYMMETRICAL FEATURED HERO CASE STUDY + SECONDARY GRID */}
      <section ref={caseStudyRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-obsidian-border pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block font-mono">WORKMANSHIP SHOWCASE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-paper">
              Recent Transformations in South Essex
            </h2>
            <p className="text-xs sm:text-sm text-paper-muted">Real before and after transformation case studies with technical specs</p>
          </div>
          <Link to="/projects" className="btn-secondary text-xs">
            View All Projects Gallery <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Layout: Featured Project Hero Card (Large) */}
        <div className="glass-panel rounded-3xl p-8 border border-copper/50 bg-gradient-to-br from-obsidian-card via-obsidian-dark to-obsidian-card space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">FEATURED TRANSFORMATIONAL CASE STUDY</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-paper">{featuredProject.title}</h3>
              <div className="text-xs font-mono text-paper-muted pt-1">📍 {featuredProject.location}</div>
            </div>

            {/* Micro-Overlays: Duration, Warranty & Energy Savings */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-copper/20 text-copper border border-copper/40 text-xs font-mono font-bold">
                ⏱️ {featuredProject.duration}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-teal/20 text-teal border border-teal/40 text-xs font-mono font-bold">
                💰 {featuredProject.energySavings}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-obsidian-dark text-paper border border-obsidian-border text-xs font-mono font-bold">
                ⭐ {featuredProject.rating}
              </span>
            </div>
          </div>

          {/* Large Slider Component */}
          <BeforeAfterSlider project={featuredProject} />

          <div className="p-6 rounded-2xl bg-obsidian-dark border border-obsidian-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2 text-xs text-paper-subtle">
              <div className="font-bold text-paper font-mono text-sm">{featuredProject.specs}</div>
              {/* Itemized QuickSpecs Chips */}
              <div className="flex flex-wrap gap-2 py-1">
                {featuredProject.quickSpecs && featuredProject.quickSpecs.map((spec, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-obsidian-card border border-copper/30 text-[11px] font-mono text-copper">
                    ✔ {spec}
                  </span>
                ))}
              </div>
              <p className="text-paper-muted text-xs leading-relaxed max-w-3xl">{featuredProject.description}</p>
            </div>
            <button
              onClick={() => setSelectedCaseStudy(featuredProject)}
              className="btn-primary text-xs py-3 px-6 shrink-0 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" /> Explore Installation
            </button>
          </div>
        </div>

        {/* Secondary Projects Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryProjects.map((proj) => (
            <div key={proj.id} className="glass-panel glass-panel-hover rounded-3xl p-6 border border-obsidian-border space-y-4 flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02] hover:border-copper/40 relative">
              <div className="space-y-4">
                <BeforeAfterSlider project={proj} />
                <div className="space-y-2 text-xs">
                  <div className="font-bold text-paper font-mono text-sm group-hover:text-copper transition-colors">{proj.title}</div>
                  
                  {/* Itemized QuickSpecs Chips on Secondary Cards */}
                  <div className="flex flex-wrap gap-1.5 py-1">
                    {proj.quickSpecs && proj.quickSpecs.slice(0, 3).map((spec, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-obsidian-dark border border-obsidian-border text-[10px] font-mono text-paper-subtle">
                        ✔ {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-paper-muted text-[11px] leading-relaxed line-clamp-2">{proj.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-obsidian-border/50 flex justify-between items-center text-xs">
                <span className="text-copper font-mono text-[10px] font-bold">{proj.duration}</span>
                <button
                  onClick={() => setSelectedCaseStudy(proj)}
                  className="text-xs font-semibold text-teal hover:text-copper flex items-center gap-1 transition-colors"
                >
                  Explore Installation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE CALCULATORS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-copper uppercase tracking-widest block">TRANSPARENT PRICING TOOLS</span>
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

      {/* 8. LOCAL BASILDON & SOUTH ESSEX DISPATCH HIGHLIGHT */}
      <section ref={basildonRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-obsidian-border space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal" /> LOCAL BASILDON HQ & DISPATCH RADIUS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-paper">
                  Serving Basildon, Billericay & South Essex
                </h2>
                <p className="text-xs sm:text-sm text-paper-muted leading-relaxed">
                  Based at 118 Gordon Road, Basildon (SS14), our certified engineers are strategically dispatched across South Essex with rapid response times and zero travel surcharges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
                  <span className="font-bold text-copper font-mono block">Registered Office</span>
                  <span className="text-paper-muted block">118 Gordon Road, Basildon, SS14 1PR</span>
                </div>
                <div className="p-4 rounded-xl bg-obsidian-dark border border-obsidian-border space-y-1">
                  <span className="font-bold text-teal font-mono block">Company Compliance</span>
                  <span className="text-paper-muted block">Companies House Reg: 16377721</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {serviceAreasData.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    className="p-3 rounded-xl bg-obsidian-dark hover:bg-obsidian-card border border-obsidian-border hover:border-copper text-left transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  >
                    <div className="text-xs font-bold text-paper">{area.name}</div>
                    <div className="text-[10px] font-mono text-paper-muted">{area.postcodes}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <PhotoFrame 
                imageSrc="/images/assetcare-van-dispatch.webp"
                imageAlt="Asset Care London Service Dispatch Van in Basildon"
                badge="Basildon SS14 HQ"
                caption={{ title: "Local Dispatch Team & Service Fleet", subtitle: "Serving Basildon, Wickford, Billericay & Southend" }}
                aspectRatio="aspect-[4/3]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 9. VERIFIED STANDARDS & TRUST COMPLIANCE */}
      <section ref={trustRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustGuarantees />
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

      {/* 11. ACCESSIBLE FAQ ACCORDION & FINAL CTA */}
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

      {/* DEEP INTERACTIVE CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

    </div>
  );
}
