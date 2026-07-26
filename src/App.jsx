import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import CookieConsent from './components/CookieConsent';
import { Phone } from 'lucide-react';
import { COMPANY_DETAILS } from './data/constants';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import ProjectsPage from './pages/ProjectsPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import GrantsPage from './pages/GrantsPage';
import CareersPage from './pages/CareersPage';
import QuotePage from './pages/QuotePage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';
import EmergencyPage from './pages/EmergencyPage';
import { PrivacyPage, TermsPage, CookiesPolicyPage } from './pages/LegalPages';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-obsidian-dark text-paper flex flex-col font-sans relative selection:bg-copper selection:text-obsidian">
        {/* Dynamic SEO Head Management with Per-Page Canonical Links */}
        <SEOHead />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Route Switcher Area */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/service-areas/:areaSlug" element={<ServiceAreaPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/grants" element={<GrantsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPolicyPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Persistent Floating Emergency Button (Mobile Viewports) */}
        <div className="fixed bottom-4 right-4 z-40 md:hidden">
          <a
            href={COMPANY_DETAILS.phoneHref}
            className="bg-danger text-white font-bold p-3.5 rounded-full shadow-[0_0_20px_rgba(229,62,62,0.6)] flex items-center gap-2 text-xs"
            aria-label="24/7 Emergency Plumbing & Heating Line"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Emergency Callout</span>
          </a>
        </div>

        {/* UK GDPR Cookie Consent Manager */}
        <CookieConsent />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
