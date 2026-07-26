import { REVIEW_DISCLAIMER_TEXT } from './constants';

export const reviewsData = [
  {
    id: 1,
    author: "David M.",
    location: "Billericay, Essex",
    rating: 5,
    date: "July 2026",
    service: "Boiler Installation",
    comment: "Asset Care London replaced our 14-year-old boiler with a new Worcester Bosch combi. Upfront fixed price, arrived right on time, and left the utility room spotlessly clean. High quality service.",
    verified: false,
    isPlaceholder: true,
    badgeText: "Illustrative Example Review"
  },
  {
    id: 2,
    author: "Sarah K.",
    location: "Basildon (SS14), Essex",
    rating: 5,
    date: "June 2026",
    service: "Emergency Boiler Repair",
    comment: "Heating went off on a cold morning. Called Asset Care and they had an engineer out within 2 hours. Diagnosed a faulty diverter valve, gave us a fixed price for the part, and fixed it same day.",
    verified: false,
    isPlaceholder: true,
    badgeText: "Illustrative Example Review"
  },
  {
    id: 3,
    author: "James R. (Landlord)",
    location: "Wickford, Essex",
    rating: 5,
    date: "June 2026",
    service: "CP12 Gas Safety & Boiler Service",
    comment: "Great communication for my rental properties in Wickford. Issued the digital CP12 PDF straight to my email after completion. Highly recommended for local landlords.",
    verified: false,
    isPlaceholder: true,
    badgeText: "Illustrative Example Review"
  },
  {
    id: 4,
    author: "Helen T.",
    location: "Laindon, Essex",
    rating: 5,
    date: "May 2026",
    service: "Air Conditioning Split Unit",
    comment: "Had a split-system AC installed in our loft bedroom before summer. Super quiet unit, neat pipework installation, and explained the controls clearly. Excellent work.",
    verified: false,
    isPlaceholder: true,
    badgeText: "Illustrative Example Review"
  }
];

export const googleRatingMeta = {
  averageRating: 5.0,
  reviewCountPlaceholder: "Early Customer Reviews",
  badgeText: "Companies House Verified • Registered in Basildon, Essex",
  disclaimer: REVIEW_DISCLAIMER_TEXT
};
