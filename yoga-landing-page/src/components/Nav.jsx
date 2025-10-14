import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#benefits", label: "Benefits" },
  { href: "#instructors", label: "Instructors" },
  { href: "#testimonials", label: "Testimonials" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = `
    relative hover:text-gray-900
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-black
    after:scale-x-0 after:origin-left
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `;

  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="relative z-10 m-4 h-20 px-6 flex items-center justify-between
                 rounded-3xl bg-white border border-black/10 text-black"
    >
      {/* Left: Logo */}
      <a className="text-center text-lg font-semibold" href="#hero">
        SerenFlow
      </a>

      {/* Center: Nav Links (Desktop only) */}
      <ul className="hidden md:flex gap-10 text-md absolute left-1/2 -translate-x-1/2">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={linkClasses}
              onClick={(e) => handleScroll(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Download button (Desktop) & Mobile menu button */}
      <div className="flex items-center gap-3">
        {/* Desktop Download Button */}
        <a
          href="#download"
          className="hidden md:inline-block px-5 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white font-bold transition"
          onClick={(e) => handleScroll(e, "#download")}
        >
          Download Guide
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full mt-2 rounded-2xl
                     bg-white backdrop-blur-sm border border-black/10
                     md:hidden"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-lg ">
            {[...navLinks, { href: "#download", label: "Download Guide" }].map(
              ({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={linkClasses}
                    onClick={(e) => handleScroll(e, href)}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
