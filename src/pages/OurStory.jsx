// src/pages/OurStory.jsx
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageBanner from "../components/PageBanner";

const values = [
  {
    title: "Design With Purpose",
    desc: "We never design random graphics. Every logo curve, color choice, and social post is built to earn trust and drive real business results.",
  },
  {
    title: "Consistency Builds Brands",
    desc: "A great logo only works when backed by consistent social presence. We align your visual identity with daily social storytelling.",
  },
  {
    title: "Transparent & Collaborative",
    desc: "No confusing agency jargon. You get clear timelines, honest strategy, and direct communication from concept to launch.",
  },
  {
    title: "Built For Modern Platforms",
    desc: "From tiny mobile profile icons to full-screen vertical reels, our designs are engineered to look sharp everywhere your customers scroll.",
  },
];

export default function OurStory() {
  return (
    <div>
      {/* Clean Header */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our <span className="text-[#d91b5c]">Story</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Who we are, what drives us, and why brands trust us with their
          identity and growth.
        </p>
      </PageBanner>

      {/* About Us Intro */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#d91b5c] mb-2">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-snug mb-4">
              Where Memorable Logo Design Meets High-Impact Social Media
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Single Source Marketing was founded on a simple observation: too
              many businesses have a great product, but their logo looks outdated
              and their social media feels invisible.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Instead of hiring one freelancer for a logo and another agency for
              social media, we bring both under one roof. We craft an iconic
              brand identity first—and then turn that identity into engaging
              posts, reels, and ad campaigns that convert.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Whether you are launching a brand-new startup or refreshing an
              established business, our mission is to make you impossible to
              ignore online.
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
              alt="Single Source Creative Studio Workshop"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Pink Divider */}
        <hr className="border-t border-[#d91b5c]" />

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold text-[#111111] text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex items-start gap-4 p-6 border border-gray-200 bg-[#fafafa]"
              >
                <span className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#111111]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1.5">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#111111] text-white p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            Want to Write Your Brand&apos;s Next Chapter With Us?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl mx-auto">
            Let&apos;s talk about your logo, brand identity, and social media
            goals.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-[#d91b5c] hover:bg-white hover:text-[#111111] text-white text-xs font-bold px-6 py-3"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}