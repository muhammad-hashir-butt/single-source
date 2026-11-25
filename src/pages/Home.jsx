
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

const slides = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1726711245904-dbfb58d37634?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag: "CUSTOM LOGO DESIGN",
    headline: "Logos That Make Your Brand Unforgettable.",
    subtext:
      "Minimal, timeless, and custom-crafted brand marks engineered for instant recognition.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag: "SOCIAL MEDIA MARKETING",
    headline: "Turn Daily Scrollers Into Loyal Customers.",
    subtext:
      "Consistent content calendars, high-retention reels, and community growth built for real sales.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=80",
    tag: "BRAND IDENTITY SYSTEMS",
    headline: "Cohesive Visuals Across Every Touchpoint.",
    subtext:
      "From typography and color palettes to packaging and social grids, every detail works together.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    tag: "PAID SOCIAL ADVERTISING",
    headline: "Smart Meta & TikTok Ads That Scale ROI.",
    subtext:
      "Data-backed ad funnels, split-tested creatives, and razor-sharp targeting for lower lead costs.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1610966976042-44342b61a03f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag: "REELS & SHORT-FORM VIDEO",
    headline: "Hook Viewers In The First 2 Seconds.",
    subtext:
      "Dynamic short-form video concepts and branded templates designed for viral organic reach.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    tag: "FULL AGENCY PARTNER",
    headline: "Your Brand Identity & Growth Under One Roof.",
    subtext:
      "15 specialized logo design and social media services tailored to scale your business.",
  },
];

const featuredWork = [
  {
    title: "Kova Craft Roasters — Emblem & Packaging",
    category: "Logo Design",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Nova Social — Instagram Campaign",
    category: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Atelier Architecture — Brand Identity",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Verve Audio Gear — Paid Social Ads",
    category: "Paid Social Ads",
    image:
      "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?auto=format&fit=crop&w=800&q=80",
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

      {/* 6-Slide Hero Slider */}
      <div className="relative border border-gray-300 bg-black overflow-hidden rounded-lg">
        <div className="relative h-72 sm:h-96 md:h-[460px]">
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
              Explore All 15 Services
            </Link>
          </div>
        </div>

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

        {/* 6 Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2 rounded-full cursor-pointer ${
                current === index
                  ? "w-6 bg-[#d91b5c]"
                  : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 15 Black Category Cards */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c]">
              15 Specialized Solutions
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
              Social Media Marketing &amp; Logo Design Services
            </h2>
          </div>

          <Link
            to="/services"
            className="text-xs font-semibold text-[#111111] hover:text-[#d91b5c]"
          >
            View Detailed Breakdown &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-[#111111] text-white p-6 rounded-lg flex flex-col justify-between min-h-[200px] border border-gray-800 hover:border-[#d91b5c]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#d91b5c] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>

                    <h3 className="text-base font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-gray-300">
                    {item.short}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="text-xs font-semibold text-white hover:text-[#d91b5c] mt-5 inline-block"
                >
                  Read More &gt;
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Agency Stats Strip */}
      <section className="bg-[#f5f5f5] border border-gray-200 rounded-lg p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-[#111111]">
            2000+
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Custom Logos Designed
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold text-[#d91b5c]">
            1500+
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Social Brands Managed
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold text-[#111111]">
            3.5x
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Avg. Engagement Boost
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold text-[#d91b5c]">
            100%
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Original Creative Work
          </p>
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
            See Full Work &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWork.map((work) => (
            <Link
              key={work.title}
              to="/work"
              className="group block"
            >
              <div className="aspect-[16/11] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
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
      <section className="bg-[#111111] text-white rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
          className="bg-[#d91b5c] hover:bg-white hover:text-[#111111] text-white text-xs font-bold px-7 py-3.5 rounded shrink-0"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
