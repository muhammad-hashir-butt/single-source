// src/pages/Team.jsx
import PageBanner from "../components/PageBanner";

const teamMembers = [
  {
    name: "Terry",
    role: "PROJECT CREATIVE MGR.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Successful promotional projects are made up of hundreds of little pieces. This manager stays on top of the objectives.",
  },
  {
    name: "Corinne",
    role: "PRODUCTION MGR.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    bio: "Meet our printing fulfilment and project co-coordinator. Give her a deadline, and then stand back and watch things happen.",
  },
  {
    name: "Tyler",
    role: "ART & DESIGN MGR.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Ty says; A design is correct when it fulfills its purpose efficiently and simply. A good design needs no explanation or further information.",
  },
];

const interests = [
  { label: "Broadcast/Online", percent: 70 },
  { label: "Print", percent: 100 },
  { label: "Branding", percent: 65 },
  { label: "SEO", percent: 31 },
  { label: "Video", percent: 51 },
  { label: "Web Design", percent: 75 },
];

export default function Team() {
  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#222222]">
          Agents
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          for change. Sales change.
        </p>
      </PageBanner>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        {/* 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#222222]">
                {member.name}
              </h2>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Pink Divider Line */}
        <hr className="border-t border-[#d91b5c] my-14" />

        {/* 3-Column Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Our Philosophy */}
          <div>
            <h3 className="text-2xl font-semibold text-[#222222] mb-4">
              Our Philosophy
            </h3>
            <p className="text-xs font-bold text-gray-700 leading-relaxed mb-4">
              The Single Source Marketing Team is a Sales Team. Our advertising
              and marketing concepts are just the tools we use to help you
              increase sales. We embrace and follow this simple philosophy:
            </p>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5 mb-4">
              <li>interest the prospect</li>
              <li>be brief and compelling</li>
              <li>show a new way</li>
              <li>solve a problem</li>
              <li>look at the situation from a different viewpoint</li>
              <li>be original</li>
            </ul>
            <p className="text-xs text-gray-600 leading-relaxed">
              We believe in working closely with our clients to learn everything
              we can about their products and services before we start crafting
              any solutions. We also believe that clients have insights that can
              help make a campaign great. We like working on great campaigns.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-[#222222] mb-4">
              Our Mission
            </h3>
            <p className="text-xs font-bold text-gray-700 leading-relaxed mb-4">
              Let&apos;s start increasing your business together. Since 1990,
              Single Source Business Services and now Single Source Marketing,
              have provided business help to both the franchise and general
              business communities.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              We get excited about a lot of things, but what gets us excited
              most is seeing your bottom line improve. Think of us as your
              &apos;on call&apos; business promotion department. Whether
              it&apos;s a tradeshow, promotional campaign, commercial, video or
              printed piece, just add Single Source to your marketing mix.
              We&apos;ll make it work.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              In concert with our strategic partners, our mission is to continue
              to provide the level of performance that inspires your vote of
              confidence. Some of our original customers have looked to Single
              Source to help them reach their business improvement goals, year
              after year.
            </p>
          </div>

          {/* Client Interests Progress Bars */}
          <div>
            <h3 className="text-2xl font-semibold text-[#222222] mb-4">
              Client Interests
            </h3>
            <div className="space-y-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="w-full bg-[#ededed] h-7 relative overflow-hidden"
                >
                  <div
                    className="bg-[#00529b] h-full flex items-center px-3 text-[11px] font-semibold text-white whitespace-nowrap"
                    style={{ width: `${item.percent}%` }}
                  >
                    {item.label} {item.percent}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}