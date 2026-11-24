// src/pages/Clients.jsx
import PageBanner from "../components/PageBanner";

const clients = [
  { name: "TERIYAKI EXPERIENCE", accent: "text-[#d91b5c] italic" },
  { name: "PARADISE DECKS", accent: "text-[#4d7c0f] tracking-wider" },
  { name: "Master MECHANIC", accent: "text-[#00529b] font-extrabold" },
  { name: "proflow", accent: "text-[#1e3a8a] font-serif lowercase" },
  { name: "nutrition house", accent: "text-[#0284c7] font-bold" },
  { name: "STRATUS", accent: "text-[#b45309] tracking-widest" },
  { name: "VIN BON", accent: "text-[#78350f] font-serif" },
  { name: "STEEL N INK", accent: "bg-black text-white px-4 py-3 text-xs tracking-widest" },
  { name: "THE CHOPPED LEAF", accent: "text-[#84cc16] font-extrabold" },
  { name: "Enersol", accent: "text-[#16a34a] italic font-bold" },
  { name: "Deeth & Co. LLP", accent: "text-[#334155] font-serif" },
  { name: "CLARKE TEAM", accent: "text-[#475569] tracking-widest text-sm" },
];

export default function Clients() {
  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#222222]">
          Clients
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          we have worked with
        </p>
      </PageBanner>

      {/* 3-Column Logo Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-24 w-48 flex items-center justify-center text-center p-4 hover:scale-105 transition-transform"
            >
              {/* Baad mein aap inki jagah <img> tags laga sakte hain */}
              <span className={`text-lg font-bold ${client.accent}`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}