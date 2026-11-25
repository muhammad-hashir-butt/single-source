// src/pages/Clients.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import PageBanner from "../components/PageBanner";

const spotlightSlides = [
  {
    id: 1,
    client: "TERIYAKI EXPERIENCE",
    industry: "Food & Franchise Brand",
    headline: "Complete Social Media Revamp & Promo Ad Creatives",
    description:
      "Teriyaki Experience wanted to attract younger diners across multiple franchise locations. We redesigned their promotional social templates, launched weekly mouth-watering Reels, and ran geo-targeted Instagram & Meta offers.",
    tasks: [
      "Social Media Content Strategy & Monthly Calendar",
      "Short-Form Food Reels & Story Templates",
      "Geo-Targeted Meta Offer Campaigns",
      "Seasonal Menu Promo Graphics",
    ],
    result: "+185% Local Social Reach in 90 Days",
  },
  {
    id: 2,
    client: "STEEL N INK",
    industry: "Tattoo, Piercing & Lifestyle Studio",
    headline: "Bold Brand Refresh & High-Engagement Instagram Grid",
    description:
      "As a multi-location lifestyle studio, Steel N Ink needed a sharp, edgy digital identity. We refined their monochrome logo lockups, organized their Instagram grid into a sleek visual portfolio, and built booking-focused social campaigns.",
    tasks: [
      "Monochrome Logo Lockups & Watermark Kit",
      "Instagram Grid Makeover & Highlight Icons",
      "Artist Spotlight Carousel Series",
      "DM & Booking Funnel Copywriting",
    ],
    result: "3.2x Increase in Studio Booking Inquiries",
  },
  {
    id: 3,
    client: "MASTER MECHANIC",
    industry: "Automotive Service Franchise",
    headline: "Modern Logo Cleanup & Local Lead Generation Ads",
    description:
      "Master Mechanic partnered with us to modernize how they appeared online. We cleaned up their vector logo suite for digital screens and launched high-converting Facebook & Instagram ad creatives targeting local car owners.",
    tasks: [
      "Vector Logo Cleanup & Brand Color Guide",
      "Local Meta Lead Generation Ad Creatives",
      "Educational Car-Care Carousel Posts",
      "Franchise Location Social Templates",
    ],
    result: "41% Lower Cost Per Service Booking",
  },
  {
    id: 4,
    client: "THE CHOPPED LEAF",
    industry: "Healthy Fast-Casual Dining",
    headline: "Vibrant Social Storytelling & New Store Launch Kits",
    description:
      "To support rapid store openings, we created plug-and-play Canva launch kits, vibrant product photography graphics, and countdown social campaigns that drove packed opening weekends.",
    tasks: [
      "New Store Launch Social Media Kits",
      "25+ Editable Branded Canva Templates",
      "Grand Opening Countdown Reels & Ads",
      "Community & Influencer Brief Templates",
    ],
    result: "100% Consistent Branding Across Openings",
  },
];

const clientsList = [
  {
    name: "TERIYAKI EXPERIENCE",
    accent: "text-[#d91b5c] italic",
    industry: "Restaurant Franchise",
    summary:
      "Partnered on ongoing Instagram & Facebook marketing, seasonal campaign graphics, and local store promo ads to boost walk-in foot traffic.",
    tasks: [
      "Monthly Social Media Management",
      "Food Reels & Promo Carousels",
      "Targeted Meta Offer Ads",
    ],
  },
  {
    name: "PARADISE DECKS",
    accent: "text-[#4d7c0f] tracking-wider",
    industry: "Outdoor & Landscape Design",
    summary:
      "Built a refined brand identity and showcase social strategy highlighting custom backyard transformations through before-and-after carousels.",
    tasks: [
      "Custom Logo Refinement & Style Guide",
      "Before/After Project Carousels",
      "Lead-Focused Facebook Ad Creatives",
    ],
  },
  {
    name: "MASTER MECHANIC",
    accent: "text-[#111111] font-extrabold",
    industry: "Automotive Care",
    summary:
      "Modernized their digital brand kit and launched high-intent local social ad campaigns focused on seasonal maintenance bookings.",
    tasks: [
      "Vector Logo Refresh & Digital Kit",
      "Meta Lead Generation Campaigns",
      "Seasonal Promo Social Banners",
    ],
  },
  {
    name: "proflow",
    accent: "text-[#1e3a8a] font-serif lowercase",
    industry: "Industrial & Engineering",
    summary:
      "Delivered a clean B2B visual identity overhaul, LinkedIn company page branding, and technical service showcase graphics.",
    tasks: [
      "Minimalist Wordmark & Brand Palette",
      "LinkedIn Company Page Revamp",
      "B2B Authority Carousel Templates",
    ],
  },
  {
    name: "nutrition house",
    accent: "text-[#0284c7] font-bold",
    industry: "Health & Wellness Retail",
    summary:
      "Created energetic retail promotion campaigns, product highlight reels, and cohesive Instagram templates for supplement launches.",
    tasks: [
      "Product Launch Social Campaigns",
      "Packaging & Promo Label Layouts",
      "Instagram Story & Highlight System",
    ],
  },
  {
    name: "STRATUS",
    accent: "text-[#b45309] tracking-widest",
    industry: "Commercial Solutions",
    summary:
      "Developed a corporate brand identity and executive LinkedIn branding system tailored to attract B2B commercial contracts.",
    tasks: [
      "Corporate Brand Identity Kit",
      "Executive LinkedIn Banners & Bio SEO",
      "B2B Paid Lead Ad Creatives",
    ],
  },
  {
    name: "VIN BON",
    accent: "text-[#78350f] font-serif",
    industry: "Craft Beverage & Retail",
    summary:
      "Designed custom bottle labels, gift packaging concepts, and warm storytelling social media posts for seasonal wine releases.",
    tasks: [
      "Custom Label & Packaging Design",
      "Seasonal Social Content Calendar",
      "Holiday Gift Campaign Ads",
    ],
  },
  {
    name: "STEEL N INK",
    accent: "bg-black text-white px-4 py-2 text-xs tracking-widest",
    industry: "Lifestyle & Body Art Studio",
    summary:
      "Overhauled their dark-mode social presence with sharp monochrome logo watermarks, portfolio grids, and artist spotlight reels.",
    tasks: [
      "Monochrome Logo Lockups & Icons",
      "Instagram Feed Grid Redesign",
      "Short-Form Studio Reels & Copywriting",
    ],
  },
  {
    name: "THE CHOPPED LEAF",
    accent: "text-[#65a30d] font-extrabold",
    industry: "Healthy Dining Brand",
    summary:
      "Built reusable Canva brand templates and vibrant social launch kits to keep every new store announcement consistent and engaging.",
    tasks: [
      "25 Custom Canva Brand Templates",
      "Grand Opening Social Media Kits",
      "Influencer Collaboration Briefs",
    ],
  },
  {
    name: "Enersol",
    accent: "text-[#16a34a] italic font-bold",
    industry: "Clean Solar Energy",
    summary:
      "Simplified technical solar benefits into clean infographic carousels, trustworthy branding assets, and homeowner lead ads.",
    tasks: [
      "Infographic Carousel Design",
      "Brand Typography & Color Direction",
      "Homeowner Lead Generation Ads",
    ],
  },
  {
    name: "Deeth & Co. LLP",
    accent: "text-[#334155] font-serif",
    industry: "Chartered Accountants",
    summary:
      "Crafted a refined professional identity, business stationery suite, and trustworthy LinkedIn content for tax and advisory clients.",
    tasks: [
      "Professional Wordmark & Stationery Kit",
      "LinkedIn B2B Content Strategy",
      "Tax Season Social Ad Graphics",
    ],
  },
  {
    name: "CLARKE TEAM",
    accent: "text-[#475569] tracking-widest text-sm",
    industry: "Real Estate Group",
    summary:
      "Designed a luxury monogram logo, property tour reel covers, and high-converting local social listing templates.",
    tasks: [
      "Luxury Monogram & Personal Branding",
      "Property Reel Covers & Listing Templates",
      "Local Buyer/Seller Meta Ad Funnels",
    ],
  },
];

export default function Clients() {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () =>
    setSlideIndex((prev) =>
      prev === 0 ? spotlightSlides.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setSlideIndex((prev) =>
      prev === spotlightSlides.length - 1 ? 0 : prev + 1
    );

  const activeSlide = spotlightSlides[slideIndex];

  return (
    <div>
      {/* Clean Header */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our <span className="text-[#d91b5c]">Clients</span> &amp; Case Work
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl">
          Discover the brands we partner with, the exact logo and social media
          tasks we delivered, and how we help businesses grow online.
        </p>
      </PageBanner>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Section 1: What Our Company Does For Clients */}
        <section className="bg-[#111111] text-white rounded-xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d91b5c]">
              Who We Are &amp; How We Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Your Dedicated Logo Design &amp; Social Media Growth Partner
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3">
              Single Source Marketing works with startups, franchises, local
              service businesses, and growing retail brands. Whether a client
              hires us to build a custom logo from scratch, refresh an outdated
              brand identity, or take over daily Instagram, TikTok, and Meta Ad
              campaigns—we handle every creative task under one roof so your
              brand looks sharp and drives measurable leads.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/5 border border-gray-800 rounded-lg p-4">
              <p className="text-2xl font-bold text-[#d91b5c]">120+</p>
              <p className="text-[11px] text-gray-300 mt-1">Brands Served</p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-4">
              <p className="text-2xl font-bold text-white">94%</p>
              <p className="text-[11px] text-gray-300 mt-1">Client Retention</p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-4">
              <p className="text-2xl font-bold text-white">250+</p>
              <p className="text-[11px] text-gray-300 mt-1">Logos Crafted</p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-4">
              <p className="text-2xl font-bold text-[#d91b5c]">3.5x</p>
              <p className="text-[11px] text-gray-300 mt-1">Avg. Ad ROAS</p>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Client Spotlight Slider */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c]">
                Client Spotlight
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                Featured Client Partnerships
              </h2>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous client"
                className="bg-[#111111] hover:bg-[#d91b5c] text-white p-2 rounded cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next client"
                className="bg-[#111111] hover:bg-[#d91b5c] text-white p-2 rounded cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slider Card */}
          <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Story */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#111111] text-white text-xs font-bold px-3 py-1 rounded">
                    {activeSlide.client}
                  </span>
                  <span className="text-xs font-semibold text-[#d91b5c]">
                    {activeSlide.industry}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {activeSlide.headline}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {activeSlide.description}
                </p>

                <div className="inline-block bg-[#fafafa] border border-gray-200 px-4 py-2 rounded">
                  <span className="text-xs font-bold text-[#111111]">
                    Outcome:{" "}
                  </span>
                  <span className="text-xs font-bold text-[#d91b5c]">
                    {activeSlide.result}
                  </span>
                </div>
              </div>

              {/* Right Tasks Completed */}
              <div className="lg:col-span-5 bg-[#fafafa] border border-gray-200 rounded-lg p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
                  Tasks Completed For {activeSlide.client}
                </h4>
                <ul className="space-y-3">
                  {activeSlide.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-gray-700"
                    >
                      <Check
                        size={15}
                        className="text-[#d91b5c] shrink-0 mt-0.5"
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-gray-100">
              {spotlightSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`View client ${idx + 1}`}
                  className={`h-2 rounded-full cursor-pointer ${
                    slideIndex === idx ? "w-6 bg-[#d91b5c]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Complete Client List & What Work We Did */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c]">
              Client Roster &amp; Deliverables
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
              Brands We&apos;ve Worked With &amp; Tasks Performed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {clientsList.map((client) => (
              <div
                key={client.name}
                className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Brand Logo Box */}
                  <div className="h-20 bg-[#fafafa] border border-gray-100 rounded-lg flex items-center justify-center px-4 mb-5">
                    <span className={`text-lg font-bold ${client.accent}`}>
                      {client.name}
                    </span>
                  </div>

                  {/* Industry & Summary */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d91b5c]">
                    {client.industry}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2 mb-5">
                    {client.summary}
                  </p>
                </div>

                {/* Tasks Done */}
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                    Tasks Delivered
                  </h3>
                  <ul className="space-y-1.5">
                    {client.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <Check
                          size={13}
                          className="text-[#d91b5c] shrink-0 mt-0.5"
                        />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111111] text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Ready To Be Our Next Success Story?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1.5">
              Let&apos;s discuss your logo design, rebranding, or monthly social
              media growth plan.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#d91b5c] hover:bg-white hover:text-[#111111] text-white text-xs font-bold px-6 py-3.5 rounded shrink-0"
          >
            Become A Client &gt;
          </Link>
        </section>
      </div>
    </div>
  );
}