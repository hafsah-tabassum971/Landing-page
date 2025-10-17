import React, { useState } from "react";

const DownloadGuide = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://landing-page-backend-beige.vercel.app/send-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <section
      id="download"
      className="relative w-full py-[clamp(5rem,10vw,9rem)] bg-white text-black overflow-hidden"
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
        blur-3xl opacity-70 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-10 relative z-10">
        <h2 className="text-[clamp(1.8rem,4vw,3.3rem)] font-extrabold tracking-tight leading-tight text-gray-900">
          Download Your{" "}
          <span className="text-red-500">5-Minute Yoga Guide</span>
        </h2>

        <p className="text-gray-600 mt-6 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed max-w-2xl mx-auto">
          A calm, beginner-friendly routine to help you breathe deeper, stretch
          better, and feel more centered — in just 5 minutes a day.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-[90%] md:w-[80%] mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-5 py-4 rounded-xl border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
              shadow-sm text-gray-800 placeholder-gray-400 transition-all text-base sm:text-lg"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              } text-white px-10 py-4 rounded-xl font-semibold shadow-lg 
              transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto text-base sm:text-lg`}
            >
              {loading ? "Sending..." : "Get My Guide"}
            </button>
          </form>
        ) : (
          <div className="mt-10 text-green-600 font-semibold text-lg sm:text-xl animate-fade-in leading-relaxed px-4">
            Thank you! Your SerenFlow Yoga Guide will arrive in your inbox
            shortly.
          </div>
        )}

        {error && (
          <p className="text-red-500 mt-4 text-sm sm:text-base">{error}</p>
        )}
      </div>
    </section>
  );
};

export default DownloadGuide;
