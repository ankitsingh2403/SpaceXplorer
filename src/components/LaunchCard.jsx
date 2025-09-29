import React, { forwardRef } from "react";

const LaunchCard = forwardRef(({ launch, rocketName, isFavorite, toggleFavorite, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-black/60 backdrop-blur-md border border-blue-500/40 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.3)] cursor-pointer transform opacity-0 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition duration-500 p-5 flex flex-col justify-between overflow-hidden relative z-10"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
          {launch.name} | {rocketName || "Unknown Rocket"}
        </h2>
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(launch.id); }}
          className={`px-2 py-1 rounded ${isFavorite ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"}`}
        >
          ★
        </button>
      </div>
      <p className="text-gray-300 text-sm mb-1">{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p className={`font-semibold ${launch.success ? "text-green-400" : "text-red-500"}`}>
        {launch.success ? "Success" : "Failure"}
      </p>
    </div>
  );
});

export default LaunchCard;
