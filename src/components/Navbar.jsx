import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ShieldCheck, Flame, Wrench, Thermometer, Wind, Zap, Calculator, Sun, Battery, AlertTriangle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_DETAILS } from '../data/constants';
import { servicesData } from '../data/servicesData';
import { serviceAreasData } from '../data/serviceAreasData';

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

  // Dynamic icon helper for services dropdown
  const renderNavServiceIcon = (illustration) => {
    switch (illustration) {
      case 'SolarPVIllustration':
        return <Sun className="w-4 h-4 text-copper" />;
      case 'BatteryStorageIllustration':
        return <Battery className="w-4 h-4 text-teal" />;
      case 'EVChargerIllustration':
      case 'HeatPumpIllustration':
        return <Zap className="w-4 h-4 text-teal" />;
      case 'AirConIllustration':
        return <Wind className="w-4 h-4 text-teal" />;
      case 'SmartHomeIllustration':
        return <Thermometer className="w-4 h-4 text-copper" />;
      case 'PlumbingIllustration':
        return <Wrench className="w-4 h-4 text-copper" />;
      default:
        return <Flame className="w-4 h-4 text-copper" />;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-obsidian-dark/90 border-b border-obsidian-border py-4'}`}>
      {/* Top Notification Bar */}
      <div className="bg-obsidian-card border-b border-obsidian-border px-4 py-1 text-xs font-medium text-paper-muted hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 font-mono">
            <span className="flex items-center gap-1.5 text-copper font-semibold">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse"></span>
              Emergency Heating Standby Desk
            </span>
            <span className="text-obsidian-border">|</span>
            <span>HQ: {COMPANY_DETAILS.address}</span>
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
          
          {/* Architectural AC Monogram Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <NavLink 
              to="/"
              className={({ isActive }) => `hover:text-copper transition-colors ${isActive ? 'text-copper font-bold' : 'text-paper-subtle'}`}
            >
              Home
            </NavLink>

            {/* Services Dropdown (Single Parent Container Hover Tunnel) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 hover:text-copper transition-colors ${location.pathname.startsWith('/services') ? 'text-copper font-bold' : 'text-paper-subtle'}`}
                aria-expanded={servicesDropdownOpen}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 glass-panel rounded-xl p-3 shadow-2xl border border-obsidian-border space-y-1 mt-0 z-50 max-h-96 overflow-y-auto">
                  <Link to="/services" className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block">
                    <Wrench className="w-4 h-4 text-copper" />
                    <div>
                      <div className="text-paper text-xs font-bold font-mono">All 13 Active Services</div>
                      <div className="text-[10px] text-paper-muted">Complete heating, plumbing & solar scope</div>
                    </div>
                  </Link>
                  <div className="h-[1px] bg-obsidian-border my-1"></div>

                  {/* Dynamic DRY Mapping over servicesData */}
                  {servicesData.map((srv) => (
                    <Link 
                      key={srv.id} 
                      to={`/services/${srv.id}`} 
                      className="w-full text-left p-2 rounded-lg hover:bg-obsidian-dark flex items-center gap-3 transition-colors block"
                    >
                      {renderNavServiceIcon(srv.illustration)}
                      <span className="text-xs text-paper-subtle hover:text-copper">{srv.title}</span>
                    </Link>
                  ))}
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

            {/* Service Areas Dropdown (Single Parent Container Hover Tunnel) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                className={`flex items-center gap-1 hover:text-copper transition-colors ${location.pathname.startsWith('/service-areas') ? 'text-copper font-bold' : 'text-paper-subtle'}`}
                aria-expanded={areasDropdownOpen}
              >
                Service Areas <ChevronDown className="w-4 h-4" />
              </button>

              {areasDropdownOpen && (
                <div className="absolute top-full left-0 w-64 glass-panel rounded-xl p-3 shadow-2xl border border-obsidian-border grid grid-cols-1 gap-1 mt-0 z-50">
                  {/* Dynamic DRY Mapping over serviceAreasData */}
                  {serviceAreasData.map((area) => (
                    <Link 
                      key={area.slug} 
                      to={`/service-areas/${area.slug}`} 
                      className="text-left p-2 rounded-lg hover:bg-obsidian-dark text-xs text-paper-subtle flex justify-between items-center"
                    >
                      <span>{area.name} {area.isHQ && '(HQ)'}</span>
                      <span className="text-copper text-[10px] font-mono">{area.postcodes}</span>
                    </Link>
                  ))}
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
            className="lg:hidden p-2 text-paper hover:text-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg"
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
