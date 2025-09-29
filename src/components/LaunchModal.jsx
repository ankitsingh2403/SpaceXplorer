import React from "react";

export default function LaunchModal({ launch, rocketName, onClose }) {
  if (!launch) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh] animate-slide-in-modal">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl font-bold">✕</button>
        <h2 className="text-3xl font-bold mb-4">{launch.name} | {rocketName || launch.rocket}</h2>
        {launch.links?.patch?.small && (
          <img src={launch.links.patch.small} alt="Mission Patch" className="w-32 h-32 object-contain mb-4" />
        )}
        <p className="text-gray-300 mb-2">{launch.details}</p>
        <p className="text-gray-300 mb-2">Rocket: {rocketName || launch.rocket}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          {launch.links?.wikipedia && <a href={launch.links.wikipedia} target="_blank" className="text-blue-400 hover:underline">Wikipedia</a>}
          {launch.links?.webcast && <a href={launch.links.webcast} target="_blank" className="text-blue-400 hover:underline">Webcast</a>}
          {launch.links?.article && <a href={launch.links.article} target="_blank" className="text-blue-400 hover:underline">Article</a>}
        </div>
      </div>
    </div>
  );
}
