// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Work", path: "/work" },
  { name: "Promotion", path: "/promotion" },
  { name: "Your Story", path: "/your-story" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Blue Bar (Patti) */}
      <div className="w-full bg-[#00529b] text-white py-2.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-end items-center text-[11px] sm:text-xs tracking-wide">
          <span>
            Call Today!{" "}
            <a href="tel:4165607221" className="hover:underline">
              416 560 7221
            </a>
          </span>
          <span className="mx-2 text-white/70">|</span>
          <a
            href="mailto:Terry@singlesource.media"
            className="hover:underline"
          >
            Terry@singlesource.media
          </a>
        </div>
      </div>

      {/* Main White Navbar */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <svg
              viewBox="0 0 64 72"
              className="w-11 h-12 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 4C19.6 4 10 13.8 10 26.5C10 31.2 11.4 35.4 13.6 39L7 47.5L13.5 50.5L12.5 56.5C12.5 59.5 15 61 18.5 61H24V68H42V56.5C49 52 54 41.5 54 27C54 13.5 45.5 4 34 4Z"
                stroke="#d91b5c"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M27 25C27 20 31 17 35.5 17C40 17 44 20.5 44 25C44 29 41 32 38 34.5V43H31V34.5C28.5 32 27 29 27 25Z"
                stroke="#d91b5c"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <path
                d="M31 47H38M32 51H37"
                stroke="#d91b5c"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M32 26C32 24 33.5 23 35.5 23C37.5 23 39 24.5 39 26C39 28 36 29 36 32"
                stroke="#d91b5c"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>

            <div className="leading-tight">
              <div className="text-[15px] sm:text-[17px] font-bold tracking-wide text-[#222222]">
                SINGLE SOURCE
              </div>
              <div className="text-[15px] sm:text-[17px] font-bold tracking-wide text-[#222222] -mt-1">
                MARKETING
              </div>
              <div className="text-[10px] text-gray-400 tracking-wide mt-0.5">
                media • web • video • mobile • print
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#d91b5c]"
                      : "text-[#222222] hover:text-[#d91b5c]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700 hover:text-[#d91b5c]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 ${
                    isActive ? "text-[#d91b5c]" : "text-[#222222]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}