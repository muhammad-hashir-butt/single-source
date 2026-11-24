// src/pages/Services.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { servicesData } from "../data/servicesData";

const filterCategories = [
  "All",
  "Logo & Branding",
  "Social Media",
  "Paid Ads & Growth",
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Clean Header */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our 15 <span className="text-[#d91b5c]">Services</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl">
          Complete solutions in Custom Logo Design, Brand Identity, and Social
          Media Marketing.
        </p>
      </PageBanner>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111] border-gray-300 hover:border-[#111111]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Zig-Zag Clean Cards (Left -> Right -> Left -> Right) */}
        <div className="space-y-10">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={service.id}
                className={`w-full lg:w-[88%] rounded-xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-6 lg:gap-8 items-start ${
                  isEven
                    ? "lg:ml-auto lg:flex-row-reverse border-r-4 border-r-[#d91b5c]"
                    : "lg:mr-auto lg:flex-row border-l-4 border-l-[#111111]"
                }`}
              >
                {/* Clean Framed Image (No Stretching, No Stickers) */}
                <div className="w-full lg:w-[340px] shrink-0">
                  <div className="w-full h-56 sm:h-60 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500 px-1">
                    <span className="font-bold text-[#111111]">
                      Timeline: {service.timeline}
                    </span>
                    <span className="font-semibold text-[#d91b5c]">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Headings & Detailed Paragraphs */}
                <div className="flex-1 space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <span className="inline-block bg-[#111111] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                      Service {String(service.id).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-2">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                      {service.short}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d91b5c] mb-1">
                      Service Overview &amp; Process
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {service.overview}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Why It Matters For Your Brand
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {service.whyItMatters}
                    </p>
                  </div>

                  {/* Deliverables Box */}
                  <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                      Key Deliverables Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <Check
                            size={14}
                            className="text-[#d91b5c] shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-block bg-[#111111] hover:bg-[#d91b5c] text-white text-xs font-bold px-5 py-2.5 rounded"
                    >
                      Book This Service &gt;
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}