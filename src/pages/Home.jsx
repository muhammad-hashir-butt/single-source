// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PenTool,
  Share2,
  Megaphone,
  Layers,
  TrendingUp,
  Smartphone,
  Sparkles,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
    tag: "SOCIAL MEDIA MARKETING",
    headline: "Turn Scrollers Into Loyal Customers.",
    subtext:
      "Data-driven social media campaigns, reels, and targeted ads built to grow your brand.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80",
    tag: "LOGO & BRAND DESIGN",
    headline: "Logos That Make Your Brand Unforgettable.",
    subtext:
      "Minimal, timeless, and custom-crafted brand marks tailored for modern businesses.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    tag: "CREATIVE STRATEGY",
    headline: "Consistent Visuals Across Every Platform.",
    subtext:
      "From brand guidelines to daily social content, we keep your identity sharp everywhere.",
  },
];

const categories = [
  {
    title: "Logo Design",
    icon: PenTool,
    description:
      "Custom, memorable wordmarks, monograms, and brand symbols designed from scratch for lasting impact.",
    link: "/services",
  },
  {
    title: "Brand Identity",
    icon: Layers,
    description:
      "Complete color palettes, typography systems, and brand guidelines that keep your business consistent.",
    link: "/services",
  },
  {
    title: "Social Media Strategy",
    icon: Share2,
    description:
      "Monthly content calendars, audience targeting, and platform growth roadmaps for real engagement.",
    link: "/services",
  },
  {
    title: "Paid Social Ads",
    icon: Megaphone,
    description:
      "High-converting Meta, Instagram, and TikTok ad campaigns focused on leads, clicks, and ROI.",
    link: "/services",
  },
  {
    title: "Content Creation",
    icon: Sparkles,
    description:
      "Scroll-stopping graphics, carousels, and short-form video reels designed specifically for your niche.",
    link: "/services",
  },
  {
    title: "Instagram & TikTok Growth",
    icon: Smartphone,
    description:
      "Organic reach strategies, trend-aligned creative, and community management that builds real followers.",
    link: "/services",
  },
  {
    title: "Rebranding",
    icon: TrendingUp,
    description:
      "Refresh outdated logos and social feeds into a sleek, modern identity that attracts premium clients.",
    link: "/services",
  },
  {
    title: "Ad Copywriting",
    icon: FileText,
    description:
      "Sharp headlines, captions, and calls-to-action that speak directly to your audience and drive sales.",
    link: "/services",
  },
];

const featuredWork = [
  {
    title: "Luxe Brew Coffee — Logo & Packaging",
    category: "Logo Design",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Urban Fit — Instagram Launch Campaign",
    category: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Nordic Studio — Minimal Brand Identity",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Glow Skincare — Paid Social Creatives",
    category: "Social Ads",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-16">
      {/* Hero Slider (Seedha Top Par) */}
      <div className="relative border border-gray-300 bg-black overflow-hidden">
        <div className="relative h-72 sm:h-96 md:h-[460px]">
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          {/* Slider Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#d91b5c] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 mb-3">
                {slides[current].tag}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                {slides[current].headline}
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mt-2">
                {slides[current].subtext}
              </p>
            </div>

            <Link
              to="/services"
              className="bg-white text-[#111111] hover:bg-[#d91b5c] hover:text-white text-xs font-bold px-5 py-3 shrink-0 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Left / Right Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#d91b5c] text-white p-2.5 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#d91b5c] text-white p-2.5 cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 8 Black Category Cards (4 + 4) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c]">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
              Social Media &amp; Logo Design Categories
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-[#111111] hover:text-[#d91b5c]"
          >
            View All Services &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#111111] text-white p-6 flex flex-col justify-between min-h-[220px] border border-gray-800 hover:border-[#d91b5c]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#d91b5c] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="text-xs font-semibold text-white hover:text-[#d91b5c] mt-6 inline-block"
                >
                  Read More &gt;
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Agency Highlights Strip */}
      <section className="bg-[#f5f5f5] border border-gray-200 p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-[#111111]">250+</p>
          <p className="text-xs text-gray-600 mt-1">Custom Logos Designed</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#d91b5c]">120+</p>
          <p className="text-xs text-gray-600 mt-1">Social Brands Managed</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#111111]">3.5x</p>
          <p className="text-xs text-gray-600 mt-1">Avg. Engagement Boost</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#d91b5c]">100%</p>
          <p className="text-xs text-gray-600 mt-1">Original Creative Work</p>
        </div>
      </section>

      {/* Featured Work Showcase */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c]">
              Recent Projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
              Featured Branding &amp; Social Work
            </h2>
          </div>
          <Link
            to="/work"
            className="text-xs font-semibold text-[#111111] hover:text-[#d91b5c]"
          >
            See Full Portfolio &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWork.map((work) => (
            <Link key={work.title} to="/work" className="group block">
              <div className="aspect-[16/11] bg-gray-100 overflow-hidden border border-gray-200">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#d91b5c] mt-2.5">
                {work.category}
              </p>
              <h3 className="text-xs font-bold text-[#111111] mt-0.5 leading-snug group-hover:text-[#d91b5c]">
                {work.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="bg-[#111111] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Upgrade Your Logo &amp; Social Media?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Let&apos;s build a recognizable brand and a social presence that
            brings consistent clients.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-[#d91b5c] hover:bg-white hover:text-[#111111] text-white text-xs font-bold px-7 py-3.5 shrink-0"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}