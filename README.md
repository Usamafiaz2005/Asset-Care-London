# Asset Care London Ltd — Brand & Web Application

Production-ready, ultra-premium web application and brand system built for **Asset Care London Ltd** (Companies House Reg: `16377721`, Registered Office: `118 Gordon Road, Basildon, England, SS14 1PR`, Director: `Ahmed Johri`).

## Tech Stack & Architecture

- **Core Framework**: React 18 + Vite
- **Routing**: `react-router-dom` (Real indexable URLs for all 25+ page endpoints)
- **Styling**: Tailwind CSS + Custom CSS Design Tokens (`src/index.css`)
- **Icons & Graphics**: `lucide-react` + 8 Custom Thin-Stroke Vector SVG Illustrations (`src/components/illustrations/`)
- **SEO & Schema**: Dynamic per-page canonical URLs (`SEOHead.jsx`) + JSON-LD LocalBusiness & Service schema + `robots.txt` + `sitemap.xml`.
- **Accessibility**: WCAG 2.2 AA compliant form control label associations (`htmlFor`/`id`), ARIA accordions (`aria-expanded`/`aria-controls`), and keyboard navigation.

---

## Page Sitemap & URL Architecture

- `/` — Homepage (Kinetic Hero, Bento Services, Real-time Calculator, Renewables Roadmap, Workmanship Gallery, Quality Commitment, Local Town Matrix, FAQ, CTA)
- `/about` — Founder Story (Ahmed Johri) & Verified Companies House Filing Profile
- `/services` — All Active Engineering Services & Future Renewable Architecture
- `/services/:serviceId` — Dynamic Sub-Service Specification Pages (10 Active Services)
- `/pricing` — Fixed Upfront Price Guide & Quote Calculator Embed
- `/service-areas/:areaSlug` — Regional Landing Pages (Basildon HQ, Wickford, Billericay, Pitsea, Laindon, Rayleigh, Benfleet, Southend-on-Sea)
- `/projects` — Interactive Before & After System Transformation Showcase
- `/reviews` — Quality Commitment & Illustrative Review Placeholders Disclosure
- `/blog` & `/blog/:slug` — UK Heating, BUS Grant, and AC Technical Guides
- `/faq` — Accessible Frequently Asked Questions Accordion
- `/grants` — UK £7,500 Boiler Upgrade Scheme (BUS) Heat Pump Calculator
- `/careers` — Job Roles & Apprenticeships Application Form
- `/quote` — 4-Step Guided Fixed Price Calculator
- `/book` — Online Engineer Dispatch Arrival Window Scheduler
- `/contact` — Basildon HQ Engineering Desk Contact Form
- `/emergency` — 24/7 Emergency Plumbing & Heating Response Line
- `/privacy`, `/terms`, `/cookies` — UK GDPR Legal Compliance Policies

---

## Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start local Vite development server (port 3000)
npm run dev

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Legal & Compliance Notes

- **Company Registration**: Active Private Limited Company incorporated 19 April 2026 under Companies House Reg `16377721`.
- **SIC Code**: `43220 — Plumbing, Heat and Air-Conditioning Installation`.
- **Registered Office**: 118 Gordon Road, Basildon, England, SS14 1PR.
- **Review Disclosures**: All review cards feature explicit disclosures indicating illustrative placeholder status until early 2026 client jobs complete.
- **Heat Pumps Status**: Framed accurately as *Consultation & £7,500 BUS Grant Advisory* as MCS certification finalization progresses.
