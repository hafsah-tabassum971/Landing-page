import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-gray-300 relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      {/* Main Footer */}
      <div
        className="max-w-7xl mx-auto 
                   px-[clamp(1rem,5vw,3rem)] 
                   py-[clamp(3rem,6vw,5rem)] 
                   grid grid-cols-1 md:grid-cols-4 
                   gap-[clamp(2rem,4vw,3rem)] 
                   text-center md:text-left"
      >
        {/* Brand */}
        <section aria-labelledby="footer-brand" className="md:col-span-2">
          <h2 id="footer-heading" className="sr-only">
            SerenFlow
          </h2>
          <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-white">
            SerenFlow
          </h3>
          <div className="h-1 w-20 bg-red-500 mt-4 mb-6 mx-auto md:mx-0 rounded-full shadow-lg" />
          <p
            className="text-gray-400 
                      text-[clamp(0.9rem,1.5vw,1rem)] 
                      leading-relaxed 
                      max-w-sm mx-auto md:mx-0"
          >
            Find your inner peace and strength with our guided yoga classes and
            mindful practices.
          </p>
        </section>

      {/* Explore */}
<nav aria-label="Explore" className="md:col-span-1">
  <h3 className="text-[clamp(1.1rem,2vw,1.25rem)] font-semibold text-white mb-4 text-center md:text-left">
    Explore
  </h3>
  <ul
    className="flex flex-wrap justify-center md:flex-col md:justify-start gap-4 md:gap-1 text-[clamp(0.8rem,1.5vw,1rem)]"
    role="list"
  >
    {[
      { href: "#benefits", label: "Benefits" },
      { href: "#instructors", label: "Instructors" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#download", label: "Download Guide" },
    ].map(({ href, label }, idx) => (
      <li key={idx} role="listitem">
        <a
          href={href}
          onClick={(e) => handleScroll(e, href)}
          className="hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
</nav>

        {/* Follow Us */}
        <section aria-labelledby="social-links" className="md:col-span-1">
          <h3
            id="social-links"
            className="text-[clamp(1.1rem,2vw,1.25rem)] font-semibold text-white mb-4 text-center md:text-left"
          >
            Follow Us
          </h3>
          <ul
            className="flex justify-center md:justify-start gap-[clamp(0.8rem,2vw,1rem)]"
            role="list"
            aria-label="Social media links"
          >
            {[
              { icon: FaFacebookF, label: "Facebook" },
              { icon: FaTwitter, label: "Twitter" },
              { icon: FaInstagram, label: "Instagram" },
            ].map(({ icon: Icon, label }, idx) => (
              <li key={idx} role="listitem">
                <a
                  href="#"
                  aria-label={`Visit our ${label} page`}
                  className="flex items-center justify-center 
                             w-[clamp(2.5rem,5vw,2.75rem)] 
                             h-[clamp(2.5rem,5vw,2.75rem)] 
                             rounded-full bg-gray-800 
                             hover:bg-red-500 
                             transition-all duration-300 shadow-md"
                >
                  <Icon className="text-white w-[clamp(0.9rem,2vw,1rem)] h-[clamp(0.9rem,2vw,1rem)]" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div
          className="max-w-7xl mx-auto 
                     px-[clamp(1rem,4vw,3rem)] 
                     py-[clamp(1rem,2vw,1.5rem)] 
                     flex flex-col md:flex-row 
                     justify-between items-center 
                     text-[clamp(0.8rem,1.3vw,0.95rem)] 
                     text-gray-400 text-center md:text-left"
        >
          <p>© {year} SerenFlow. All rights reserved.</p>
         <p className="hidden md:block mt-2 md:mt-0">
  Designed with <span className="text-red-500">❤️</span> for Yoga enthusiasts
</p>

        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-32 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[radial-gradient(circle,_rgba(255,0,0,0.1)_0%,_transparent_70%)] rounded-full pointer-events-none blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-[radial-gradient(circle,_rgba(255,0,0,0.08)_0%,_transparent_70%)] rounded-full pointer-events-none blur-3xl" />
    </footer>
  );
};

export default Footer;
