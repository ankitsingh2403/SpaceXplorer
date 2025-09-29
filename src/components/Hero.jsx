import React from "react";
import idFront from "../assets/id-front.jpg";
import idBack from "../assets/id-back.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-0">
      {/* Galaxy & Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-galaxy bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,128,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,128,255,0.25),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>

        {/* Multi-layer Stars */}
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
        <div className="stars stars4"></div>
        <div className="stars stars5"></div>

        {/* Tiny Random Flickering Stars */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 1}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Left Content */}
      <div className="relative z-20 max-w-xl w-full space-y-4 sm:space-y-6 text-white flex flex-col items-start md:items-start md:justify-center py-4 md:py-0">
        <h1 className=" pt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Embark on a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-pulse">
            Cosmic Journey
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Navigate through the{" "}
          <span className="text-red-400 font-semibold">infinite universe</span>{" "}
          of possibilities. Connect, innovate, and shine beyond the stars. 🚀
        </p>
        <Link to="/browse-launches">
          <button className="mt-4 sm:mt-6 px-4 py-2 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105 text-sm sm:text-base md:text-lg">
            Explore Now
          </button>
        </Link>
      </div>

      {/* Right Side - Ribbon + Card */}
      <div className="relative flex flex-col items-center justify-center h-auto md:h-full z-20 md:mr-32 mt-8 md:mt-0 w-full md:w-auto">
        <div className="swing-wrapper relative flex flex-col items-center w-64 sm:w-72 perspective">
          {/* Ribbon tied through card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-64 z-10 flex flex-col items-center">
            <div className="relative w-full h-6">
              <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-500 to-gray-800 rounded-b-2xl shadow-md"></div>
              <div className="absolute -top-2 left-0 w-full h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
              <span className="text-white text-xs font-bold rotate-90 tracking-[0.3em] absolute top-2 left-1/2 -translate-x-1/2">
                SpaceXplorer
              </span>
            </div>
          </div>

          {/* Card */}
          <div className="relative top-12 sm:top-16 card-container w-full h-[18rem] sm:h-[22rem] transform-style cursor-pointer">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-sm z-30 shadow-inner"></div>

            {/* Card Inner for flipping */}
            <div className="card-inner w-full h-full absolute transform-style transition-transform duration-700 hover:rotate-y-180">
              {/* Front Side */}
              <div className=" pb-4 absolute inset-0 backface-hidden rounded-xl shadow-2xl overflow-hidden">
                <img
                  src={idFront}
                  alt="ID Front"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-4 left-0 w-full text-center text-black font-bold text-2xl">
                  SpaceXplorer
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-2xl overflow-hidden">
                <img
                  src={idBack}
                  alt="ID Back"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-4 left-0 w-full text-center text-black font-bold text-2xl">
                  SpaceXplorer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Shared Swing Animation for ribbon + card */
          @keyframes swing {
            0%,100% { transform: rotateZ(-12deg); }
            50% { transform: rotateZ(12deg); }
          }
          .swing-wrapper { transform-origin: top center; animation: swing 4s ease-in-out infinite; }

          /* Card Flip */
          .perspective { perspective: 1000px; }
          .transform-style { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .transition-transform { transition: transform 0.7s; }

          @media (max-width: 768px) {
            .md\:flex-row { flex-direction: column !important; }
            .md\:mr-32 { margin-right: 0 !important; }
            .md\:items-start { align-items: center !important; }
            .md\:py-0 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
          }

          /* Galaxy */
          @keyframes galaxyMove { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(-40px,40px); } }
          .animate-galaxy { animation: galaxyMove 40s infinite alternate ease-in-out; }

          /* Stars */
          .stars {
            position: absolute;
            inset: 0;
            background-color: black;
            background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
            background-repeat: repeat;
          }

          .stars1 { animation: drift1 120s linear infinite, shine1 3s ease-in-out infinite alternate; opacity: 0.7; }
          .stars2 { animation: drift2 200s linear infinite, shine2 4s ease-in-out infinite alternate; opacity: 0.5; }
          .stars3 { animation: drift3 300s linear infinite, shine3 5s ease-in-out infinite alternate; opacity: 0.3; }
          .stars4 { animation: drift1 150s linear infinite, shine4 2s ease-in-out infinite alternate; opacity: 0.4; }
          .stars5 { animation: drift2 180s linear infinite, shine5 1.5s ease-in-out infinite alternate; opacity: 0.6; }

          @keyframes drift1 { from { background-position: 0 0; } to { background-position: -1000px 1000px; } }
          @keyframes drift2 { from { background-position: 0 0; } to { background-position: 1500px -1500px; } }
          @keyframes drift3 { from { background-position: 0 0; } to { background-position: -2000px -2000px; } }

          @keyframes shine1 { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes shine2 { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
          @keyframes shine3 { 0%,100% { opacity: 0.2; } 50% { opacity: 0.6; } }
          @keyframes shine4 { 0%,100% { opacity: 0.4; } 50% { opacity: 0.9; } }
          @keyframes shine5 { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }

          /* Tiny Flickering Stars */
          @keyframes twinkle { 
            0%, 100% { opacity: 0; transform: scale(0.5);} 
            25% { opacity: 0.3; transform: scale(0.7);}
            50% { opacity: 1; transform: scale(1);} 
            75% { opacity: 0.5; transform: scale(0.6);}
          }
          .animate-twinkle { animation: twinkle infinite ease-in-out; }
        `}
      </style>
    </section>
  );
}
