import React from "react";

export default function LaunchModal({ launch, rocketName, onClose }) {
  if (!launch) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-gray-900 rounded-xl max-w-lg sm:max-w-2xl md:max-w-3xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] animate-slide-in-modal">
        <button onClick={onClose} className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-lg sm:text-xl font-bold">✕</button>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{launch.name} | {rocketName || launch.rocket}</h2>
        {launch.links?.patch?.small && (
          <img src={launch.links.patch.small} alt="Mission Patch" className="w-20 h-20 sm:w-32 sm:h-32 object-contain mb-2 sm:mb-4 mx-auto" />
        )}
        <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{launch.details}</p>
        <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Rocket: {rocketName || launch.rocket}</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
          {launch.links?.wikipedia && <a href={launch.links.wikipedia} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Wikipedia</a>}
          {launch.links?.webcast && <a href={launch.links.webcast} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Webcast</a>}
          {launch.links?.article && <a href={launch.links.article} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Article</a>}
        </div>
      </div>
    </div>
  );
}
