import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export default function About() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  // Animated Counters
  const [counters, setCounters] = useState({
    launches: 0,
    rockets: 0,
    users: 0,
    features: 0,
  });
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = {
      launches: 150,
      rockets: 20,
      users: 1000000,
      features: 25,
    };
    const duration = 2000;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounters({
        launches: Math.floor(progress * targets.launches),
        rockets: Math.floor(progress * targets.rockets),
        users: Math.floor(progress * targets.users),
        features: Math.floor(progress * targets.features),
      });
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\nName: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`
    );
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-16 flex flex-col">
      {/* Galaxy Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-galaxy
          bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,128,0.25),transparent_40%),
              radial-gradient(circle_at_80%_70%,rgba(0,128,255,0.25),transparent_50%),
              radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"
        ></div>
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
      </div>

      {/* Header Section */}
      <header className="text-center py-10 md:py-16 relative z-10 flex flex-col items-center">
        <img
          src={logo}
          alt="SpaceXplorer Logo"
          className="w-24 sm:w-32 md:w-48 mx-auto mb-4 md:mb-6"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-4">
          Space<span className="text-red-500">Xplorer</span>
        </h1>
        <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Exploring the cosmos, documenting every mission, and inspiring the
          world to reach for the stars.
        </p>
      </header>

      {/* About Sections */}
      <section className="max-w-5xl mx-auto grid gap-8 md:gap-12 relative z-10 grid-cols-1 md:grid-cols-3">
        {/* Our Story */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 border border-gray-700 shadow-xl text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            SpaceXplorer was founded with a vision to document the journey of
            humanity into space. We aim to make space exploration accessible and
            inspiring, bringing each mission’s story closer to enthusiasts and
            learners worldwide.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30 border border-gray-700 shadow-xl text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our vision is to be the most comprehensive and engaging platform for
            space exploration. We want to educate, inspire, and connect people
            through the wonders of the cosmos.
          </p>
        </div>

        {/* Goals */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-pink-900/30 via-black/50 to-purple-800/30 border border-gray-700 shadow-xl text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
          <ul className="text-gray-300 text-lg list-disc list-inside space-y-2 text-left inline-block">
            <li>Track all SpaceX launches with detailed information.</li>
            <li>Create interactive mission visualizations.</li>
            <li>Inspire future generations to pursue space exploration.</li>
            <li>Provide accurate and updated space-related data worldwide.</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section
        ref={counterRef}
        className="max-w-6xl mx-auto py-10 md:py-16 text-center relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="p-4 sm:p-6 bg-gray-900/80 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold text-pink-500">
              {counters.launches}+
            </h3>
            <p className="text-gray-400 mt-2">Launches Tracked</p>
          </div>
          <div className="p-6 bg-gray-900/80 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-4xl font-bold text-blue-400">
              {counters.rockets}+
            </h3>
            <p className="text-gray-400 mt-2">Rockets Cataloged</p>
          </div>
          <div className="p-6 bg-gray-900/80 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-4xl font-bold text-green-400">
              {Math.floor(counters.users / 1000000)}M+
            </h3>
            <p className="text-gray-400 mt-2">Users Inspired</p>
          </div>
          <div className="p-6 bg-gray-900/80 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-4xl font-bold text-purple-400">
              {counters.features}+
            </h3>
            <p className="text-gray-400 mt-2">Features Built</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto py-8 sm:py-10 md:py-12 relative z-10 px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 p-4 sm:p-6 md:p-8 rounded-xl flex flex-col gap-4 sm:gap-6 shadow-lg backdrop-blur-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-pink-500 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-pink-500 text-sm sm:text-base"
            required
          />
          <textarea
            placeholder="Your Message"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
            className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-pink-500 resize-none text-sm sm:text-base"
            rows={4}
            required
          />
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 rounded-lg font-semibold transition text-white text-sm sm:text-base">
            Send Message
          </button>
        </form>
      </section>

      {/* Tailwind Galaxy Animations */}
      <style>{`
        .animate-galaxy { animation: galaxyMove 40s infinite alternate ease-in-out; }
        .stars { position: absolute; inset: 0; background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); background-repeat: repeat; }
        .stars1 { animation: drift1 120s linear infinite, shine1 3s ease-in-out infinite alternate; opacity: 0.7; }
        .stars2 { animation: drift2 200s linear infinite, shine2 4s ease-in-out infinite alternate; opacity: 0.5; }
        .stars3 { animation: drift3 300s linear infinite, shine3 5s ease-in-out infinite alternate; opacity: 0.3; }

        @media (max-width: 768px) {
          .grid-cols-1.md\:grid-cols-3 { grid-template-columns: 1fr !important; }
        }
        @keyframes galaxyMove { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(-40px,40px); } }
        @keyframes drift1 { from { background-position: 0 0; } to { background-position: -1000px 1000px; } }
        @keyframes drift2 { from { background-position: 0 0; } to { background-position: 1500px -1500px; } }
        @keyframes drift3 { from { background-position: 0 0; } to { background-position: -2000px -2000px; } }
        @keyframes shine1 { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes shine2 { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shine3 { 0%,100% { opacity: 0.2; } 50% { opacity: 0.6; } }
      `}</style>
    </div>
  );
}
