import React, { forwardRef } from "react";

const LaunchCard = forwardRef(({ launch, rocketName, isFavorite, toggleFavorite, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-black/60 backdrop-blur-md border border-blue-500/40 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.3)] cursor-pointer transform opacity-0 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition duration-500 p-3 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden relative z-10 w-full min-w-0"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3 gap-2 sm:gap-0">
        <h2 className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 break-words">
          {launch.name} | {rocketName || "Unknown Rocket"}
        </h2>
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(launch.id); }}
          className={`px-2 py-1 rounded ${isFavorite ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"} text-base sm:text-lg`}
        >
          ★
        </button>
      </div>
      <p className="text-gray-300 text-xs sm:text-sm mb-1">{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p className={`font-semibold ${launch.success ? "text-green-400" : "text-red-500"} text-xs sm:text-sm md:text-base`}>
        {launch.success ? "Success" : "Failure"}
      </p>
    </div>
  );
});

export default LaunchCard;
