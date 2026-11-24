// src/pages/Work.jsx
import PageBanner from "../components/PageBanner";

const workSamples = [
  {
    title: "Chorizo Show Booth",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    height: "h-56",
  },
  {
    title: "Enersol Signage",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    height: "h-80",
  },
  {
    title: "Proflow Client Brochure",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    height: "h-44",
  },
  {
    title: "Steel N Ink Show Booth",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80",
    height: "h-36",
  },
  {
    title: "Kiddie Proofers Show Booth",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
    height: "h-60",
  },
  {
    title: "Stratus Exhibit",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    height: "h-36",
  },
  {
    title: "Master Mechanic Insert",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    height: "h-72",
  },
  {
    title: "Benkei Hime Franchise",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    height: "h-40",
  },
  {
    title: "Nutrition House Direct Mail",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
    height: "h-40",
  },
  {
    title: "Reno Magic Logo",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    height: "h-32",
  },
  {
    title: "Chorizo Brochure",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    height: "h-44",
  },
  {
    title: "Benkei Hime",
    image:
      "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=600&q=80",
    height: "h-80",
  },
  {
    title: "Paradise Decks Logo",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    height: "h-36",
  },
  {
    title: "Paradise Decks Video Series",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    height: "h-36",
  },
  {
    title: "Master Mechanic Show Booth",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    height: "h-56",
  },
];

export default function Work() {
  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#222222]">
          <span className="text-[#d91b5c]">Work</span> Samples
        </h1>
      </PageBanner>

      {/* Masonry Portfolio Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {workSamples.map((item, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div
                className={`w-full ${item.height} bg-gray-100 overflow-hidden border border-gray-200`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[11px] text-gray-600 mt-1.5">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Media Row (Videos & Radio Ad) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-start">
          {/* Video 1 */}
          <div className="aspect-video bg-black overflow-hidden border border-gray-200">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
            >
              <source src="" type="video/mp4" />
            </video>
          </div>

          {/* Video 2 */}
          <div className="aspect-video bg-black overflow-hidden border border-gray-200">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            >
              <source src="" type="video/mp4" />
            </video>
          </div>

          {/* Radio Audio Ad */}
          <div>
            <div className="bg-[#111111] p-2 rounded-sm">
              <audio controls className="w-full h-8">
                <source src="" type="audio/mpeg" />
              </audio>
            </div>
            <p className="text-[11px] font-semibold text-[#222222] mt-2">
              Award Winning 21 Points Radio AD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}