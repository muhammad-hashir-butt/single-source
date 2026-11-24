// src/pages/Services.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const servicesList = [
  {
    id: 1,
    title: "1. Custom Logo Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80",
    short:
      "Unique, scalable logos built to make your brand instantly recognizable.",
    details:
      "We design 100% original logos tailored to your industry and audience. You receive multiple initial concepts, revisions, and final vector files (AI, SVG, EPS, PNG, PDF) ready for web, social media, signage, and print.",
  },
  {
    id: 2,
    title: "2. Complete Brand Identity Kit",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=700&q=80",
    short:
      "Everything your brand needs to look cohesive across digital and print.",
    details:
      "Beyond just a logo, we build your complete visual system: primary & secondary logo variations, curated color palettes, font pairings, social media profile kits, and a clear brand style guide.",
  },
  {
    id: 3,
    title: "3. Social Media Strategy & Management",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80",
    short:
      "Consistent posting, audience growth, and monthly content calendars.",
    details:
      "We take social media off your plate. Our team plans your monthly content calendar, designs branded posts, writes engaging captions, researches hashtags, and schedules posts across Instagram, Facebook, LinkedIn, and TikTok.",
  },
  {
    id: 4,
    title: "4. Instagram & TikTok Reels Creation",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80",
    short:
      "Short-form video concepts and branded templates that boost organic reach.",
    details:
      "Short-form video dominates social feeds. We craft hook-driven reel scripts, motion graphics, custom reel covers, and edit-ready layouts so your brand stays visible and relevant.",
  },
  {
    id: 5,
    title: "5. Paid Social Media Advertising",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    short:
      "Targeted Meta & TikTok ad campaigns designed for leads and sales.",
    details:
      "Stop boosting posts blindly. We build structured ad funnels with audience targeting, A/B tested ad creatives, persuasive ad copy, pixel tracking, and clear monthly ROI reporting.",
  },
  {
    id: 6,
    title: "6. Social Media Brand Templates",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
    short:
      "Reusable Canva & Figma templates so your team can post effortlessly.",
    details:
      "Want to manage posting in-house while looking like an agency runs your page? We create a custom pack of 20–30 editable post, carousel, and story templates matched strictly to your brand identity.",
  },
  {
    id: 7,
    title: "7. Logo Refresh & Rebranding",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=80",
    short:
      "Modernize your outdated visual identity without losing brand equity.",
    details:
      "If your current logo feels dated or doesn't scale well on mobile screens and social avatars, we refine and modernize your mark, clean up your typography, and relaunch your brand look.",
  },
  {
    id: 8,
    title: "8. Social Copywriting & Campaign Messaging",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
    short:
      "Clear, persuasive bios, captions, and ad hooks that convert followers.",
    details:
      "Great visuals need strong words. We write optimized social media bios, storytelling captions, promotional offer copy, and clear calls-to-action that turn profile visitors into paying customers.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleService = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Clean Modern Header */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our <span className="text-[#d91b5c]">Services</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Focused solutions in Social Media Marketing &amp; Logo Design.
        </p>
      </PageBanner>

      {/* Services List with Images - Simple, No Animation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {servicesList.map((service) => {
          const isOpen = openId === service.id;
          return (
            <div
              key={service.id}
              className="border border-gray-200 bg-white flex flex-col sm:flex-row overflow-hidden"
            >
              {/* Left Service Image */}
              <div className="sm:w-64 h-48 sm:h-auto bg-gray-100 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content + Dropdown */}
              <div className="p-6 flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5">
                  {service.short}
                </p>

                {/* Simple Toggle Button */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="bg-[#111111] hover:bg-[#d91b5c] text-white text-xs font-semibold px-4 py-2 cursor-pointer"
                  >
                    {isOpen ? "Hide Details ▲" : "View Details ▼"}
                  </button>
                </div>

                {/* Simple Dropdown Description (No Animation) */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {service.details}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block mt-3 text-xs font-bold text-[#d91b5c] hover:underline"
                    >
                      Book This Service &gt;
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}