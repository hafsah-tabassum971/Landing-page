import React, { useState } from "react";
import Instructor1 from "../assets/instructor1.webp";
import Instructor2 from "../assets/instructor2.webp";
import Instructor3 from "../assets/instructor3.webp";
import Instructor4 from "../assets/instructor4.webp";

const instructors = [
  { name: "Ava Williams", role: "Hatha Yoga Expert", img: Instructor1 },
  { name: "Noah Smith", role: "Vinyasa Flow Coach", img: Instructor2 },
  { name: "Sophia Brown", role: "Meditation & Mindfulness", img: Instructor3 },
  { name: "Liam Johnson", role: "Power Yoga Trainer", img: Instructor4 },
];

const InstructorCard = ({ inst }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="rounded-2xl bg-gradient-to-br from-gray-100 to-[#CBCBCB] border border-gray-300 shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center text-black">
      <figure className="relative w-36 h-36 mb-6">
<img
  src={inst.img}
  alt={`${inst.name} — ${inst.role}`}
  loading="lazy"
  className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-md animate-imageLoad"
/>


      </figure>

      <header>
        <h3 className="text-xl font-semibold">{inst.name}</h3>
        <p className="text-gray-900 mt-2">{inst.role}</p>
      </header>
    </article>
  );
};

const Instructors = () => {
  return (
    <section
      id="instructors"
      aria-labelledby="instructors-heading"
      className="relative w-full bg-white text-gray-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <header className="text-center mb-[clamp(2rem,6vw,4rem)]">
          <h2
            id="instructors-heading"
            className="text-[clamp(1.8rem,4vw,3.3rem)] font-extrabold leading-tight"
          >
            Meet Your <span className="text-red-500">Yoga Guides</span>
          </h2>
          <div className="h-1 w-24 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-[clamp(1rem,1.5vw,1.25rem)] max-w-2xl mx-auto leading-relaxed">
            Our friendly instructors will walk you through simple, quick yoga
            routines you can do anywhere. Perfect for beginners or anyone short
            on time.
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          role="list"
        >
          {instructors.map((inst, i) => (
            <InstructorCard key={i} inst={inst} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
