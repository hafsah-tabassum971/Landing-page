import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import emilyImg from "../assets/Review1.webp";
import jamesImg from "../assets/Review2.webp";
import sophiaImg from "../assets/Review3.webp";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Busy Professional",
    text: "The 5-minute yoga guide fits perfectly into my mornings. I feel energized and calm without taking much time.",
    img: jamesImg,
    rating: 5,
  },
  {
    name: "Liam Walker",
    role: "College Student",
    text: "I never thought yoga could be this quick and effective! These short sessions make a huge difference in my day.",
    img: sophiaImg,
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Beginner Yogi",
    text: "I'm new to yoga, and this guide is so simple to follow. Just 5 minutes a day and I already feel more relaxed and focused.",
    img: emilyImg,
    rating: 5,
  },
];

// Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next testimonial"
    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10
               bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3
               shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105"
  >
    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous testimonial"
    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10
               bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3
               shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105"
  >
    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
);

const Testimonials = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 800, // slightly slower = smoother
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false, // prevents layout jump
    lazyLoad: "progressive", // preloads next image for smoother transition
    cssEase: "ease-in-out", // natural easing curve
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
          cssEase: "ease-in-out",
        },
      },
    ],
  };



  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-[clamp(3rem,7vw,8rem)] w-full bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-black text-white overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[500px] h-[500px]
        bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]
        blur-2xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-[clamp(1rem,4vw,3rem)] relative">
        {/* Section Header */}
        <header className="text-center mb-[clamp(2rem,6vw,4rem)]">
          <h2
            id="testimonials-heading"
            className="text-[clamp(1.8rem,4vw,3.3rem)] font-extrabold leading-tight"
          >
            What Our Students Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-[clamp(0.9rem,1.6vw,1.25rem)] leading-relaxed">
            Honest reflections from people who found balance and strength
            through yoga.
          </p>
        </header>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="px-[clamp(0.3rem,2vw,1rem)] focus:outline-none"
                aria-label={`Testimonial from ${t.name}, ${t.role}`}
              >
                <div
                  className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl 
                  p-[clamp(1.2rem,3vw,2.5rem)] text-center border border-white/10 
                  hover:bg-white/10 transition relative max-w-3xl mx-auto"
                >
                  {/* Badge */}
                  <div
                    aria-hidden="true"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 
                    bg-red-500 text-white text-[clamp(0.65rem,1vw,0.8rem)] 
                    font-semibold px-[clamp(0.6rem,1.2vw,1rem)] py-[clamp(0.25rem,0.6vw,0.4rem)] 
                    rounded-full shadow-md tracking-wide"
                  >
                    + More Practitioners
                  </div>

                  {/* Profile image */}
                  <figure>
                    <img
                      src={t.img}
                      alt={`Photo of ${t.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-[clamp(5.5rem,13vw,9rem)] h-[clamp(5.5rem,13vw,9rem)] 
                      object-cover rounded-full ring-4 ring-white/20 shadow-xl mx-auto 
                      mb-[clamp(1rem,2.5vw,2rem)] transition-transform duration-300 hover:scale-105 will-change-transform"
                    />
                    <figcaption className="sr-only">{t.name}</figcaption>
                  </figure>

                  {/* Name & Role */}
                  <h3 className="font-semibold text-[clamp(1.1rem,2.2vw,1.6rem)]">
                    {t.name}
                  </h3>
                  <p className="text-gray-400 mb-[clamp(0.8rem,1.8vw,1.3rem)] text-[clamp(0.85rem,1.2vw,1rem)]">
                    {t.role}
                  </p>

                  {/* Star Rating */}
                  <div
                    className="flex justify-center mb-[clamp(0.8rem,2vw,1.3rem)]"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className="text-yellow-400 mx-[clamp(0.2rem,0.4vw,0.35rem)] text-[clamp(0.9rem,1.8vw,1.3rem)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <blockquote className="italic text-gray-100 leading-relaxed text-[clamp(0.9rem,2vw,1.3rem)] max-w-2xl mx-auto">
                    “{t.text}”
                  </blockquote>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
