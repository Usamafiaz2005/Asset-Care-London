import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ShieldCheck, Flame, Wrench, Thermometer, Wind, Zap, AlertTriangle, Calculator, Sun, Battery } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-obsidian-dark/90 border-b border-obsidian-border py-4'}`}>
      {/* Emergency Callout Top Notification Banner */}
      <div className="bg-obsidian-card border-b border-obsidian-border px-4 py-1 text-xs font-medium text-paper-muted hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-copper font-semibold">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse"></span>
              Emergency Plumbing & Heating Standby
            </span>
            <span className="text-obsidian-border">|</span>
            <span>Reg. Office: {COMPANY_DETAILS.address}</span>
            <span className="text-obsidian-border">|</span>
            <span className="text-teal font-semibold">Companies House Reg: {COMPANY_DETAILS.regNumber}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={COMPANY_DETAILS.phoneHref} className="hover:text-copper transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-copper" /> {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Asset Care London Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-obsidian-card to-obsidian-dark border border-copper/40 flex items-center justify-center group-hover:border-copper transition-colors shadow-lg">
              <svg className="w-6 h-6 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 12L12 3L21 12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8V21" strokeLinecap="round" stroke="#3E7C7A" />
                <path d="M7 16C9 14 11 18 13 16" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-paper block font-mono">
                ASSET CARE <span className="text-copper">LONDON</span>
              </span>
              <span className="text-[10px] text-paper-muted uppercase tracking-widest block font-medium -mt-1">
                Heating • Plumbing • Renewables
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <NavLink 
              to="/"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 hover:text-copper transition-colors py-2 ${location.pathname.startsWith('/services') ? 'text-copper font-bold' : 'text-paper-subtle'}`}
                aria-expanded={servicesDropdownOpen}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 glass-panel rounded-xl p-3 shadow-2xl border border-obsidian-border space-y-1 mt-1 z-50 max-h-96 overflow-y-auto"
                >
                  <Link to="/services" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Wrench className="w-4 h-4 text-copper" />
                    <div>
                      <div className="text-paper text-xs font-bold">All 13 Active Services</div>
                      <div className="text-[10px] text-paper-muted">Complete heating, plumbing & solar scope</div>
                    </div>
                  </Link>
                  <div className="h-[1px] bg-obsidian-border my-1"></div>
                  <Link to="/services/boiler-installation" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Flame className="w-4 h-4 text-copper" />
                    <span className="text-xs text-paper-subtle hover:text-copper">Boiler Installation</span>
                  </Link>
                  <Link to="/services/solar-pv" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Sun className="w-4 h-4 text-copper" />
                    <span className="text-xs text-paper-subtle hover:text-copper">Solar PV Installations</span>
                  </Link>
                  <Link to="/services/battery-storage" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Battery className="w-4 h-4 text-teal" />
                    <span className="text-xs text-paper-subtle hover:text-teal">Home Battery Storage</span>
                  </Link>
                  <Link to="/services/ev-chargers" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Zap className="w-4 h-4 text-teal" />
                    <span className="text-xs text-paper-subtle hover:text-teal">Smart EV Chargers</span>
                  </Link>
                  <Link to="/services/boiler-repair" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Wrench className="w-4 h-4 text-copper" />
                    <span className="text-xs text-paper-subtle hover:text-copper">Boiler Repair</span>
                  </Link>
                  <Link to="/services/air-conditioning" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Wind className="w-4 h-4 text-teal" />
                    <span className="text-xs text-paper-subtle hover:text-teal">Air Conditioning (AC)</span>
                  </Link>
                  <Link to="/services/heat-pumps" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Zap className="w-4 h-4 text-teal" />
                    <span className="text-xs text-paper-subtle hover:text-teal">Heat Pumps (£7.5k Grant)</span>
                  </Link>
                  <Link to="/services/gas-safety-certificates" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <ShieldCheck className="w-4 h-4 text-copper" />
                    <span className="text-xs text-paper-subtle hover:text-copper">Gas Safety CP12</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing */}
            <NavLink 
              to="/pricing"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              Pricing
            </NavLink>

            {/* Service Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                onMouseEnter={() => setAreasDropdownOpen(true)}
                className={`flex items-center gap-1 hover:text-copper transition-colors py-2 ${location.pathname.startsWith('/service-areas') ? 'text-copper font-bold' : 'text-paper-subtle'}`}
                aria-expanded={areasDropdownOpen}
              >
                Service Areas <ChevronDown className="w-4 h-4" />
              </button>

              {areasDropdownOpen && (
                <div 
                  onMouseLeave={() => setAreasDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 glass-panel rounded-xl p-3 shadow-2xl border border-obsidian-border grid grid-cols-1 gap-1 mt-1 z-50"
                >
                  <Link to="/service-areas/basildon" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Basildon (HQ)</span> <span className="text-copper text-[10px]">SS14</span>
                  </Link>
                  <Link to="/service-areas/wickford" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Wickford</span> <span className="text-paper-muted text-[10px]">SS11</span>
                  </Link>
                  <Link to="/service-areas/billericay" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Billericay</span> <span className="text-paper-muted text-[10px]">CM12</span>
                  </Link>
                  <Link to="/service-areas/pitsea" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Pitsea</span> <span className="text-paper-muted text-[10px]">SS13</span>
                  </Link>
                  <Link to="/service-areas/laindon" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Laindon</span> <span className="text-paper-muted text-[10px]">SS15</span>
                  </Link>
                  <Link to="/service-areas/southend-on-sea" className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between">
                    <span>Southend-on-Sea</span> <span className="text-paper-muted text-[10px]">SS0-SS9</span>
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <NavLink 
              to="/about"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              About
            </NavLink>

            {/* Projects */}
            <NavLink 
              to="/projects"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              Projects
            </NavLink>

            {/* FAQ */}
            <NavLink 
              to="/faq"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              FAQ
            </NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={COMPANY_DETAILS.phoneHref} 
              className="btn-secondary text-xs px-4 py-2 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-copper" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <Link 
              to="/quote"
              className="btn-primary text-xs px-5 py-2.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Get Instant Quote</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-paper hover:text-copper focus:outline-none"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-dark/95 border-b border-obsidian-border px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold pb-3 border-b border-obsidian-border">
            <Link to="/" className="text-left p-2 text-paper hover:text-copper">Home</Link>
            <Link to="/services" className="text-left p-2 text-paper hover:text-copper">Services</Link>
            <Link to="/pricing" className="text-left p-2 text-paper hover:text-copper">Pricing</Link>
            <Link to="/about" className="text-left p-2 text-paper hover:text-copper">About</Link>
            <Link to="/projects" className="text-left p-2 text-paper hover:text-copper">Projects</Link>
            <Link to="/emergency" className="text-left p-2 text-danger font-bold flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> Emergency
            </Link>
          </div>

          <div className="space-y-2 pt-2">
            <Link 
              to="/quote" 
              className="w-full btn-primary justify-center text-sm py-3 flex"
            >
              <Calculator className="w-4 h-4" /> Get Instant Quote
            </Link>
            <a 
              href={COMPANY_DETAILS.phoneHref} 
              className="w-full btn-secondary justify-center text-sm py-3 flex"
            >
              <Phone className="w-4 h-4 text-copper" /> Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
