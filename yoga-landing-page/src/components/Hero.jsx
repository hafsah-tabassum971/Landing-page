import React from "react";
import Nav from "./Nav";
import heroImage from "../assets/hero.webp";

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative py-14 w-full overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-black"
    >
      {/* --- Header (Navigation) --- */}
      <header>
        <Nav />
      </header>

      {/* --- Hero Content --- */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between h-full py-10 lg:px-24">
        {/* --- Left: Text Content --- */}
        <article
          className="lg:w-1/2 text-left text-white space-y-6 max-sm:mx-5"
          aria-label="Yoga introduction"
        >
          <h1
            id="hero-heading"
            className="text-[clamp(2.5rem,4vw,3.75rem)] lg:text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-tight max-sm:mx-2"
          >
            Find Your Inner Peace with Yoga
          </h1>

          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-300 leading-relaxed max-sm:mx-2">
            Unlock calm, focus, and flexibility with our free yoga guide.
            Download your <strong>5-Minute Morning Flow</strong> and start each
            day with energy and mindfulness.
          </p>

          <div className="flex justify-start mt-8 max-sm:mx-2">
            <a
              href="#download"
              aria-label="Download your free yoga guide"
              className="px-[clamp(2rem,4vw,3rem)] py-[clamp(0.8rem,1.5vw,1.2rem)] cursor-pointer bg-red-500 hover:bg-red-600 rounded-2xl text-white font-bold shadow-lg transition-all transform hover:scale-105"
              onClick={(e) => handleScroll(e, "#download")}
            >
              Download Free Guide
            </a>
          </div>

          {/* ---- Stats Row ---- */}
          <section
            className="mt-[clamp(2rem,4vw,3rem)] grid grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] max-w-[clamp(18rem,40vw,28rem)] max-sm:max-w-full max-sm:mx-2"
            aria-label="Yoga platform statistics"
          >
            {[
              { num: "50K+", label: "Guides Downloaded" },
              { num: "20K+", label: "Happy Practitioners" },
              { num: "3.5M+", label: "Minutes of Calm" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <p className="text-[clamp(1.65rem,3vw,2.5rem)] font-bold text-white">
                  {stat.num}
                </p>
                <p className="text-gray-400 mt-1 text-[clamp(0.6rem,1vw,2rem)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>
        </article>

        {/* --- Right: Image --- */}
        <figure className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end pt-8">
          <div className="w-72 lg:w-88 h-[28rem] lg:h-[34rem] overflow-hidden rounded-full flex items-center justify-center shadow-2xl">
            <img
              src={heroImage}
              alt="A woman performing a yoga pose"
              decoding="async"
              fetchpriority="high"
              loading="eager"
              className="h-full w-auto object-cover object-center"
            />
          </div>
          <figcaption className="sr-only">
            A yoga practitioner demonstrating mindfulness and balance from the
            free yoga guide.
          </figcaption>
        </figure>
      </div>

      {/* --- Gentle overlay effect --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Hero;
