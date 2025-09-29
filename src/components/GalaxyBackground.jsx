import React from "react";

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full min-h-screen">
      <div className="absolute inset-0 animate-galaxy bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,128,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,128,255,0.25),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)] w-full h-full"></div>
      <div className="stars stars1 w-full h-full"></div>
      <div className="stars stars2 w-full h-full"></div>
      <div className="stars stars3 w-full h-full"></div>
      <div className="stars stars4 w-full h-full"></div>
      <div className="stars stars5 w-full h-full"></div>
      <style>{`
        .animate-galaxy { animation: galaxyMove 40s infinite alternate ease-in-out; }
        .stars { position: absolute; inset: 0; width: 100vw; height: 100vh; min-height: 100%; background-color: black; background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); background-repeat: repeat; }
        .stars1 { animation: drift1 120s linear infinite, shine1 3s ease-in-out infinite alternate; opacity: 0.7; }
        .stars2 { animation: drift2 200s linear infinite, shine2 4s ease-in-out infinite alternate; opacity: 0.5; }
        .stars3 { animation: drift3 300s linear infinite, shine3 5s ease-in-out infinite alternate; opacity: 0.3; }
        .stars4 { animation: drift1 150s linear infinite, shine4 2s ease-in-out infinite alternate; opacity: 0.4; }
        .stars5 { animation: drift2 180s linear infinite, shine5 1.5s ease-in-out infinite alternate; opacity: 0.6; }

        @media (max-width: 768px) {
          .stars, .animate-galaxy { width: 100vw !important; height: 100vh !important; min-height: 100% !important; }
        }

        @keyframes galaxyMove { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(-40px,40px); } }
        @keyframes drift1 { from { background-position: 0 0; } to { background-position: -1000px 1000px; } }
        @keyframes drift2 { from { background-position: 0 0; } to { background-position: 1500px -1500px; } }
        @keyframes drift3 { from { background-position: 0 0; } to { background-position: -2000px -2000px; } }
        @keyframes shine1 { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes shine2 { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shine3 { 0%,100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes shine4 { 0%,100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes shine5 { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}
