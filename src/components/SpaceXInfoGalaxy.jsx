import React, { useEffect, useRef } from "react";
import spacexImg1 from "../assets/spacex-launch.jpg";
import spacexImg2 from "../assets/spacex-rocket.jpg";

export default function SpaceXInfoGalaxy() {
  const infoRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    infoRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [infoRefs]);

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">

      {/* Galaxy & Stars Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 animate-galaxy bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,128,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,128,255,0.2),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]"></div>
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
        <div className="stars stars4"></div>
        <div className="stars stars5"></div>
      </div>

      {/* === First Section: Image Left, Info Right === */}
      <section className="relative w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-20 gap-12 z-10">
        <div className="w-full md:w-1/3">
          <img
            src={spacexImg1}
            alt="SpaceX Launch"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        <div
          ref={infoRefs[0]}
          className="w-full md:w-2/3 opacity-0 transform translate-x-12 transition-all duration-700 space-y-4"
          data-direction="right"
        >
          <h2 className="text-4xl font-bold mb-4">SpaceX Missions & Launches</h2>
          <p className="text-gray-300 text-lg">
            SpaceX has conducted numerous launches since its first Falcon 1 mission in 2006. Key milestones include the first privately-funded spacecraft to reach orbit, the first commercial spacecraft to dock with the International Space Station (Dragon in 2012), and the development of reusable Falcon 9 rockets that land vertically after launch.
          </p>
          <p className="text-gray-300 text-lg">
            The Falcon Heavy, SpaceX's super heavy-lift launch vehicle, successfully carried payloads to orbit in 2018, including the famous Tesla Roadster. The company continues to conduct Starlink satellite launches, deploying constellations to provide global broadband internet.
          </p>
        </div>
      </section>

      {/* === Second Section: Image Right, Info Left === */}
      <section className="relative w-full flex flex-col md:flex-row-reverse items-center px-6 md:px-16 py-20 gap-12 z-10">
        <div className="w-full md:w-1/3">
          <img
            src={spacexImg2}
            alt="SpaceX Rocket"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        <div
          ref={infoRefs[1]}
          className="w-full md:w-2/3 opacity-0 transform -translate-x-12 transition-all duration-700 space-y-4"
          data-direction="left"
        >
          <h2 className="text-4xl font-bold mb-4">Recent SpaceX Launch Highlights</h2>
          <p className="text-gray-300 text-lg">
            Crew missions like Crew-1, Crew-2, and beyond have safely transported astronauts to the ISS, making SpaceX the first private company to perform crewed orbital flights. Each mission advances commercial human spaceflight and international collaboration in orbit.
          </p>
          <p className="text-gray-300 text-lg">
            Starship test launches continue to push reusable rocket technology to new limits, aiming for interplanetary missions. Starlink launches are performed regularly, adding thousands of satellites for global connectivity.
          </p>
          <p className="text-gray-300 text-lg">
            SpaceX also supports governmental and commercial satellite missions worldwide, contributing to science, Earth observation, and communications. The company’s vision for Mars colonization drives innovation in rapid launch cadence, spacecraft design, and mission planning.
          </p>
        </div>
      </section>

      {/* === Styles === */}
      <style>
        {`
          /* Scroll fade-slide animations */
          .animate-slide-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }

          /* Galaxy movement */
          @keyframes galaxyMove { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(-40px,40px); } }
          .animate-galaxy { animation: galaxyMove 40s infinite alternate ease-in-out; }

          /* Stars layers */
          .stars { position: absolute; inset: 0; background-color: black; background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); background-repeat: repeat; }
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
        `}
      </style>
    </div>
  );
}
