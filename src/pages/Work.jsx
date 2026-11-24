// src/pages/Work.jsx
import PageBanner from "../components/PageBanner";

const portfolioItems = [
  {
    title: "Luxe Brew Roasters",
    category: "Logo Design & Packaging",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    description:
      "Crafted a minimalist geometric emblem and custom coffee bag packaging system that helped Luxe Brew stand out on retail shelves and Instagram.",
  },
  {
    title: "Urban Fit Athletics",
    category: "Social Media Campaign",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
    description:
      "Built a 90-day Instagram & TikTok launch strategy with daily workout reels, influencer hooks, and paid lead ads—generating 420+ new gym memberships.",
  },
  {
    title: "Nordic Architecture Studio",
    category: "Brand Identity & Wordmark",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=700&q=80",
    description:
      "Designed a clean typographic wordmark, monochrome color palette, and social portfolio grid tailored for high-end residential architecture clients.",
  },
  {
    title: "Glow Pure Skincare",
    category: "Paid Social Ads & Reels",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
    description:
      "Produced high-converting carousel ads and UGC-style product reels for Meta Ads, achieving a 3.8x return on ad spend during their summer launch.",
  },
  {
    title: "Apex Tech Solutions",
    category: "Logo Rebrand",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80",
    description:
      "Modernized a 15-year-old B2B tech logo into a sharp, app-icon friendly brand mark alongside LinkedIn banner templates and pitch deck styling.",
  },
  {
    title: "Saffron Kitchen",
    category: "Social Content & Branding",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
    description:
      "Created a warm, appetizing visual identity, menu icons, and weekly foodie reel series that doubled weekend table reservations in 6 weeks.",
  },
  {
    title: "Veloce Cycling Club",
    category: "Logo & Merch Identity",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80",
    description:
      "Developed a bold crest logo, jersey graphics, and Strava/Instagram community templates for an urban cycling brand.",
  },
  {
    title: "Elevate Real Estate Group",
    category: "Social Media Management",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
    description:
      "Designed cohesive property tour templates, market update carousels, and personal branding graphics for a 12-agent brokerage.",
  },
  {
    title: "SoundWave Audio",
    category: "Logo Design & Launch Kit",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80",
    description:
      "Crafted a dynamic waveform monogram and dark-mode social media launch kit for an independent podcast and audio studio.",
  },
];

export default function Work() {
  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our <span className="text-[#d91b5c]">Work</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-700 mt-2">
          Selected Logo Designs, Brand Identities &amp; Social Media Campaigns.
        </p>
      </PageBanner>

      {/* Portfolio Grid with Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 bg-white flex flex-col"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d91b5c]">
                  {item.category}
                </span>
                <h2 className="text-base font-bold text-[#111111] mt-1">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}