// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Image as ImageIcon,
  Video,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageBanner from "../components/PageBanner";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80",
    headline: "We'll help you find a direction.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    headline: "Compelling ideas that drive real sales.",
  },
];

const services = [
  {
    title: "Branding",
    icon: Check,
    description:
      "Who are you? We'll help you build a recognizable brand that stands out.",
    link: "/work",
  },
  {
    title: "Print",
    icon: ImageIcon,
    description:
      "Our print ideas are big & bold & brassy and direct readers to respond.",
    link: "/work",
  },
  {
    title: "Video",
    icon: Video,
    description:
      "We create a promotional strategy for your video. Then, we create your video.",
    link: "/work",
  },
  {
    title: "Copywriting",
    icon: ClipboardList,
    description:
      "Emotional or Technical. An offer or an instruction manual. We're accurate and on the money.",
    link: "/your-story",
  },
];

const featuredWork = [
  {
    title: "Paradise Decks Video Series",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "35th Annual Telly Awards",
    image:
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Deeth & Co. LLP Chartered Professional Accountants",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "HCA Franchise Brochure",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div>
      {/* Gray Header Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#222222]">
          Where do <span className="text-[#d91b5c]">sales</span> come from?
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-3">
          From compelling offers, persuasive language, real reasons, and images
          that demand attention. We promise.
        </p>
      </PageBanner>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Slider Section */}
        <div className="relative border border-gray-300 bg-white overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-[360px]">
            <img
              src={slides[current].image}
              alt="Single Source Marketing Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30" />

            {/* Bottom Caption Bar matching screenshot */}
            <div className="absolute bottom-0 inset-x-0 bg-white/90 px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xl sm:text-3xl font-bold text-[#d91b5c]">
                {slides[current].headline}
              </p>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-[#222222] uppercase">
                Single Source Marketing
              </span>
            </div>
          </div>

          {/* Left / Right Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1.5"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1.5"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* 4 Blue Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[#00529b] text-white p-6 flex flex-col justify-between min-h-[230px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-xs leading-relaxed text-blue-50">
                    {service.description}
                  </p>
                </div>

                <Link
                  to={service.link}
                  className="text-xs font-medium text-white hover:underline mt-6 inline-block"
                >
                  Read More &gt;
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom 4 Featured Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {featuredWork.map((item) => (
            <Link key={item.title} to="/work" className="group block">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden border border-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs font-bold text-[#222222] mt-2 leading-snug group-hover:text-[#d91b5c]">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}