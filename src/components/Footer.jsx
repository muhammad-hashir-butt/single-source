// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-300 mt-auto border-t-4 border-[#d91b5c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand Info */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide">
            SINGLE SOURCE
          </h3>
          <p className="text-[11px] font-semibold text-[#d91b5c] tracking-widest uppercase mb-4">
            Marketing &amp; Logo Studio
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            We help ambitious brands stand out with custom-crafted logos,
            cohesive brand identities, and ROI-focused social media marketing
            campaigns.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/" className="hover:text-[#d91b5c]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-[#d91b5c]">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Services (15)
              </Link>
            </li>
            <li>
              <Link to="/our-story" className="hover:text-[#d91b5c]">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/clients" className="hover:text-[#d91b5c]">
                Clients
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#d91b5c]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Popular Services */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Core Expertise
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Custom Logo Design
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Complete Brand Identity
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Social Media Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Instagram &amp; TikTok Reels
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Meta &amp; TikTok Paid Ads
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d91b5c]">
                Packaging &amp; Rebranding
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[#d91b5c] shrink-0 mt-0.5" />
              <span>
                2628 Credit Valley Road,
                <br />
                Mississauga, ON L5M 4J6
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#d91b5c] shrink-0" />
              <a href="tel:4165607221" className="hover:text-white">
                416 560 7221
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-[#d91b5c] shrink-0" />
              <a
                href="mailto:hello@singlesource.media"
                className="hover:text-white"
              >
                hello@singlesource.media
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-5 bg-[#d91b5c] hover:bg-white hover:text-[#111111] text-white text-xs font-bold px-4 py-2.5"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#0a0a0a] border-t border-gray-800 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
          <span>Copyright 2026 | Single Source Marketing. All Rights Reserved.</span>
          <span>Social Media Marketing • Custom Logo Design • Brand Strategy</span>
        </div>
      </div>
    </footer>
  );
}