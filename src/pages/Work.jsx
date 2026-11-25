
import PageBanner from "../components/PageBanner";

const portfolioItems = [
  {
    title: "Kova Coffee Branding",
    category: "Logo Design & Packaging",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium coffee branding concept featuring minimalist logo inspiration, distinctive packaging aesthetics, and a cohesive visual identity for specialty coffee products.",
  },
  {
    title: "Nova Social — Instagram Campaign",
    category: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern Instagram marketing campaign concept featuring engaging social media content, visually consistent post designs, creative storytelling, and audience-focused digital marketing strategies.",
  },
  {
    title: "Atelier Luxury Living",
    category: "Brand Identity & Logo Design",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    description:
      "A sophisticated visual identity concept for a luxury interior design brand, combining elegant typography, a refined color palette, and premium brand positioning.",
  },
  {
    title: "Verve Headphones Campaign",
    category: "Product Marketing & Social Ads",
    image:
      "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?auto=format&fit=crop&w=900&q=80",
    description:
      "A product-focused advertising concept featuring premium headphone photography, engaging promotional content, Instagram creatives, and Meta advertising ideas.",
  },
  {
    title: "Apex Digital Identity",
    category: "Tech Branding & Logo Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern technology branding concept featuring clean logo direction, digital-first visual styling, professional LinkedIn graphics, and consistent brand communication.",
  },
  {
    title: "Chroma Creative Campaign",
    category: "Creative Branding & Social Media",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80",
    description:
      "A vibrant creative campaign concept built around energetic colors, bold visual storytelling, eye-catching social media graphics, and engaging promotional content.",
  },
  {
    title: "Lumen Workspace Branding",
    category: "Corporate Branding & Identity",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    description:
      "A contemporary workspace branding concept featuring minimalist identity design, sophisticated corporate visuals, branded stationery ideas, and professional social content.",
  },
  {
    title: "MetricFlow Digital Marketing",
    category: "B2B Marketing & Social Media",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description:
      "A data-driven B2B marketing concept featuring analytical dashboards, LinkedIn campaign ideas, engaging business graphics, and performance-focused advertising creatives.",
  },
  {
    title: "Studio Forma Creative",
    category: "Logo Design & Brand Development",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&q=80",
    description:
      "A creative studio identity concept featuring logo development, artistic brand direction, coordinated visual elements, and a consistent social media design system.",
  },
];

export default function Work() {
  return (
    <div>
      {/* Clean Header */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111]">
          Our <span className="text-[#d91b5c]">Work</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Selected Logo Designs, Brand Identities &amp; Social Media Campaigns.
        </p>
      </PageBanner>

      {/* Portfolio Grid with Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
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
