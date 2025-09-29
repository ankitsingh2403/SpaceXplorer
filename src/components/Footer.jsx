import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  const stats = [
    "🚀 150+ Launches tracked",
    "🛰️ 20 Rockets in database",
    "🌌 Millions of followers inspired",
    "⭐ Always reaching for the stars"
  ];

  return (
    <footer className="relative bg-gradient-to-t from-purple-900 via-black to-purple-800 text-white pt-16 pb-12 overflow-hidden">
      {/* Galaxy Glow & Shooting Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
        <div className="shooting-star shooting-star1"></div>
        <div className="shooting-star shooting-star2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="SpaceXplorer Logo" className="w-28 md:w-36" />
          <p className="text-gray-300 max-w-xs">
            SpaceXplorer: Discover every mission, rocket, and milestone in the SpaceX universe.
          </p>
        </div>

        {/* Quick Stats / Fun Facts */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-2 relative after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full after:shadow-pink-500/50 after:animate-glow-underline">
            Quick Stats
          </h3>
          <ul className="text-gray-300 space-y-2">
            {stats.map((s, idx) => (
              <li
                key={idx}
                className="hover:text-pink-400 transition-all duration-300 hover:scale-105 relative"
              >
                {s}
                <span className="absolute top-0 left-0 w-full h-full pointer-events-none animate-sparkle"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2 relative after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-blue-400 after:rounded-full after:shadow-blue-400/50 after:animate-glow-underline">
            Stay Connected
          </h3>
          <p className="text-gray-300">Subscribe to our newsletter for updates on new launches and space news.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 flex-1"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r-lg transition font-semibold">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition text-2xl glow-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition text-2xl glow-icon">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-300 transition text-2xl glow-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition text-2xl glow-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-sm text-center mt-12 relative z-10">
        &copy; {new Date().getFullYear()} SpaceXplorer. All rights reserved.
      </div>

      {/* Tailwind Animations & Custom Styles */}
      <style>{`
        .stars { position: absolute; inset: 0; background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); background-repeat: repeat; }
        .stars1 { animation: drift1 120s linear infinite, shine1 3s ease-in-out infinite alternate; opacity: 0.7; }
        .stars2 { animation: drift2 200s linear infinite, shine2 4s ease-in-out infinite alternate; opacity: 0.5; }
        .stars3 { animation: drift3 300s linear infinite, shine3 5s ease-in-out infinite alternate; opacity: 0.3; }

        @keyframes drift1 { from { background-position: 0 0; } to { background-position: -1000px 1000px; } }
        @keyframes drift2 { from { background-position: 0 0; } to { background-position: 1500px -1500px; } }
        @keyframes drift3 { from { background-position: 0 0; } to { background-position: -2000px -2000px; } }

        @keyframes shine1 { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes shine2 { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shine3 { 0%,100% { opacity: 0.2; } 50% { opacity: 0.6; } }

        /* Shooting Stars */
        .shooting-star { position: absolute; width: 2px; height: 100px; background: linear-gradient(white, transparent); opacity: 0.7; transform: rotate(45deg); animation: shoot 3s infinite linear; }
        .shooting-star1 { top: 10%; left: 20%; animation-delay: 0s; }
        .shooting-star2 { top: 50%; left: 70%; animation-delay: 2s; }
        @keyframes shoot { 0% { transform: translateX(0) translateY(0) rotate(45deg); opacity:1; } 100% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity:0; } }

        /* Glowing Underline */
        @keyframes glow-underline { 0%,100% { box-shadow: 0 0 5px currentColor; } 50% { box-shadow: 0 0 20px currentColor; } }
        .animate-glow-underline { animation: glow-underline 2s infinite alternate; }

        /* Sparkle effect on stats */
        @keyframes sparkle { 0%,100% { opacity:0; transform: scale(0); } 50% { opacity:1; transform: scale(1.2); } }
        .animate-sparkle { position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; animation: sparkle 1.5s infinite; }
        
        /* Glow icons */
        .glow-icon { filter: drop-shadow(0 0 4px currentColor); }
      `}</style>
    </footer>
  );
}
