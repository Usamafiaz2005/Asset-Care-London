import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import CookieConsent from './components/CookieConsent';
import SkeletonLoader from './components/SkeletonLoader';
import { Phone } from 'lucide-react';
import { COMPANY_DETAILS } from './data/constants';

// Lazy-loaded route components for maximum performance and code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ServiceAreaPage = lazy(() => import('./pages/ServiceAreaPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const GrantsPage = lazy(() => import('./pages/GrantsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EmergencyPage = lazy(() => import('./pages/EmergencyPage'));
const PrivacyPage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.TermsPage })));
const CookiesPolicyPage = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.CookiesPolicyPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-obsidian-dark text-paper flex flex-col font-sans relative selection:bg-copper selection:text-obsidian">
        {/* Dynamic SEO Head Management with Per-Page Canonical Links */}
        <SEOHead />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Lazy-Loaded Route Switcher with Suspense Fallback */}
        <main id="main-content" className="flex-1">
          <Suspense fallback={
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SkeletonLoader height="h-96" />
            </div>
          }>
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
          </Suspense>
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
