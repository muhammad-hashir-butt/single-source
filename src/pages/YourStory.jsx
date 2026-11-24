// src/pages/YourStory.jsx
import { Check } from "lucide-react";
import PageBanner from "../components/PageBanner";

const leftPoints = [
  "All successful endeavours have an interesting and informative history. We're experts at making yesterday a part of today.",
  "Put down in writing your organization's key values, mission, and vision for a productive and active future.",
  "Showcase in clear terms how you are different from others in your field, and how you approach your work differently.",
];

const rightPoints = [
  "Tell your community about your good works, and how your organization plays an important role in the lives of community members.",
  "Let the world know about your accomplishments. Are you sure that they really know exactly what you do, and the value you add by doing it well?",
  "Set yourself apart from competitors by communicating directly with your customers in a friendly 'unadvertising' method.",
];

const faqs = [
  {
    q: "HOW?",
    a: "You have a story to tell, and prospects want to hear it – in your words. We will write your story with your input. We use your history, an intensive questionnaire, plus an interview session (if required) to bring out the interesting facts of your service to the community.",
  },
  {
    q: "HOW LONG?",
    a: "A corporate story book need not be lengthy. In fact, a shorter book almost guarantees a complete and thorough read through. We get right to the point from the first page. Often, 40 – 60 pages will do the job quite well.",
  },
  {
    q: "WHO?",
    a: "Your story will be written by Terry Straker; an award winning writer and published author. He has also published articles with the Toronto Star, Financial Post, the CFA, Canadian Franchise Magazine, and other industry trade publications.",
  },
  {
    q: "OPTIONS?",
    a: "Your inclusive book fee includes title development, basic cover layout and all creative writing to bring your book to print stage. We also supervise the printing of your cover, the individual pages, the final binding, and delivery to your door. Fee includes your author copy.",
  },
];

export default function YourStory() {
  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#222222]">
          <span className="text-[#d91b5c]">Your</span> Own Book
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          TELL the story of your mission, your Brand and your people.
        </p>
      </PageBanner>

      {/* 3-Column Book Showcase */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left 3 Checkmarks */}
          <div className="space-y-8">
            {leftPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#d91b5c] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Center Book Cover */}
          <div className="flex justify-center">
            <div className="border border-gray-800 bg-white shadow-md w-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80"
                alt="10 Surefire Ways Book Cover"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center bg-white">
                <p className="text-sm font-bold text-[#222222] uppercase">
                  10 Surefire Ways
                </p>
                <p className="text-xs text-[#f97316] uppercase leading-tight mt-0.5">
                  To Sell Your Home For More Money
                </p>
                <p className="text-[10px] text-gray-500 mt-3">
                  by David Collier
                </p>
              </div>
            </div>
          </div>

          {/* Right 3 Checkmarks */}
          <div className="space-y-8">
            {rightPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#d91b5c] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Here's how it works Section */}
      <section className="bg-[#f5f5f5] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#222222] mb-10">
            Here&apos;s how it works
          </h2>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-[#222222] uppercase mb-1">
                  {item.q}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl sm:text-2xl font-bold text-center text-[#222222] mt-10">
            Call us today for all details at 416 560 7221
          </p>
        </div>
      </section>
    </div>
  );
}