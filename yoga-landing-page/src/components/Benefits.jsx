import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import {
  FaRegSmile,
  FaUsers,
  FaChalkboardTeacher,
  FaRegClock,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";
import yogaPose from "../assets/benefits.webp";
import avatar1 from "../assets/Review1.webp";
import avatar2 from "../assets/Review2.webp";
import avatar3 from "../assets/Review3.webp";

const Benefits = () => {
  return (
    <section id="benefits" className="w-full bg-white text-gray-900">
      {/* ---------- Top Section ---------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* ---------- Right Content (Image + CTA + Avatars) ---------- */}
        <figure className="relative order-1 lg:order-none flex flex-col justify-center">
          {/* Avatars row */}
          <figcaption className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-3" aria-hidden="true">
              <img
                src={avatar1}
                alt="Happy client"
                loading="lazy"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={avatar2}
                alt="Satisfied client"
                loading="lazy"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={avatar3}
                alt="Smiling client"
                loading="lazy"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">
              20k+ Happy Downloaders
            </p>
          </figcaption>

          {/* Yoga Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full flex items-center justify-center">
            <img
              src={yogaPose}
              alt="Person doing yoga pose"
              loading="lazy"
              className="w-full h-full object-cover"
            />

{/* Floating CTA Card */}
<aside
  className="absolute -right-4 bottom-4 bg-red-500 text-white 
             p-6 rounded-2xl shadow-lg max-w-xs
             max-sm:p-3 max-sm:max-w-[70%] max-sm:text-sm"
  aria-label="Call to action"
>
  <p className="opacity-90 leading-relaxed">
    Get instant access to your <strong>5-Minute Yoga Guide</strong> and feel refreshed every morning.
  </p>
</aside>

          </div>
        </figure>

        {/* ---------- Left Content ---------- */}
        <article className="flex flex-col justify-center">
          <header>
            <h2
              id="benefits-heading"
              className="text-[clamp(1.8rem,4vw,3.3rem)] font-extrabold leading-snug mb-6"
            >
              Why You’ll Love the{" "}
              <span className="text-red-500">5-Minute Yoga Guide</span>
            </h2>
          </header>

          <p className="text-gray-500 text-[clamp(1rem,1.5vw,1.25rem)] mb-8">
            This free guide was designed to help you make yoga a simple, daily
            habit — even on your busiest mornings. No equipment, no stress —
            just calm, clarity, and a burst of energy to start your day right.
          </p>

          {/* Benefits Cards */}
          <div className="flex flex-col sm:flex-row gap-6" role="list">
            <article
              className="flex-1 p-6 rounded-2xl bg-white border shadow hover:shadow-lg transition"
              role="listitem"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-500">
                  <FaRegHeart size={20} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg">Feel Energized Fast</h3>
              </div>
              <p className="text-gray-500 text-sm">
                A simple 5-minute sequence to wake up your body and clear your
                mind before work or study.
              </p>
            </article>

            <article
              className="flex-1 p-6 rounded-2xl bg-white border shadow hover:shadow-lg transition"
              role="listitem"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-500">
                  <FaRegSmile size={20} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg">Reduce Stress</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Learn quick breathing and stretching techniques to calm your
                nervous system anytime, anywhere.
              </p>
            </article>
          </div>
        </article>
      </div>

      {/* ---------- Bottom Stats / Benefits Section ---------- */}
      <section
        className="bg-gradient-to-br from-black via-[#111] to-black text-white py-20"
        aria-label="Yoga guide statistics and benefits"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: (
                <FaDownload size={30} className="mx-auto text-red-400 mb-4" />
              ),
              title: "50K+ Downloads",
              desc: "Join thousands transforming their mornings with mindful movement.",
            },
            {
              icon: (
                <FaChalkboardTeacher
                  size={30}
                  className="mx-auto text-red-400 mb-4"
                />
              ),
              title: "Expertly Designed",
              desc: "Created by certified yoga instructors with beginners in mind.",
            },
            {
              icon: (
                <FaRegClock size={30} className="mx-auto text-red-400 mb-4" />
              ),
              title: "Only 5 Minutes",
              desc: "A short, powerful flow that fits into any busy schedule.",
            },
            {
              icon: <FaUsers size={30} className="mx-auto text-red-400 mb-4" />,
              title: "For All Levels",
              desc: "Whether you’re new or experienced, these poses are accessible to everyone.",
            },
            {
              icon: (
                <FaLaptopCode size={30} className="mx-auto text-red-400 mb-4" />
              ),
              title: "Instant Access",
              desc: "Download immediately and start your mindful routine today.",
            },
            {
              icon: <FaUsers size={30} className="mx-auto text-red-400 mb-4" />,
              title: "Global Community",
              desc: "Join a movement of yoga lovers bringing balance to everyday life.",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              {item.icon}
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Benefits;
