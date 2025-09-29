import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import LaunchCard from "../components/LaunchCard";

export default function BrowseLaunches() {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [page, setPage] = useState(1);
  const [started, setStarted] = useState(false);
  const launchesPerPage = 9; 
  const launchRefs = useRef([]);

  // Fetch launches and rockets
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.spacexdata.com/v5/launches");
        setLaunches(res.data);

        const rocketIds = [...new Set(res.data.map(l => l.rocket))];
        const rocketsData = {};
        await Promise.all(
          rocketIds.map(async (id) => {
            const r = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`);
            rocketsData[id] = r.data.name;
          })
        );
        setRockets(rocketsData);
      } catch (err) {
        setError("Failed to fetch launches.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = useRef(debounce((val) => {
    setSearch(val);
    setPage(1);
  }, 500)).current;

  const toggleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filteredLaunches = useMemo(() => {
    return launches
      .filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
      .filter(l => yearFilter ? l.date_utc.startsWith(yearFilter) : true)
      .filter(l => showSuccess ? l.success === true : true)
      .filter(l => showFavorites ? favorites.includes(l.id) : true);
  }, [launches, search, yearFilter, showSuccess, showFavorites, favorites]);

  const paginatedLaunches = useMemo(() => {
    if (!started) return [];
    const dataToPaginate =
      filteredLaunches.length > 0 || search || yearFilter || showSuccess || showFavorites
        ? filteredLaunches
        : launches;

    const start = (page - 1) * launchesPerPage;
    return dataToPaginate.slice(start, start + launchesPerPage);
  }, [launches, filteredLaunches, search, yearFilter, showSuccess, showFavorites, page, started]);

  const totalPages = useMemo(() => {
    const dataToPaginate =
      filteredLaunches.length > 0 || search || yearFilter || showSuccess || showFavorites
        ? filteredLaunches
        : launches;
    return Math.ceil(dataToPaginate.length / launchesPerPage);
  }, [launches, filteredLaunches, search, yearFilter, showSuccess, showFavorites]);

  useEffect(() => {
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    launchRefs.current.forEach(el => el && animObserver.observe(el));
  }, [paginatedLaunches]);

  return (
  <div className="relative min-h-screen bg-black text-white px-2 sm:px-6 md:px-16 py-6 md:py-10 overflow-hidden flex flex-col">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-galaxy bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,128,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,128,255,0.25),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
        <div className="stars stars4"></div>
        <div className="stars stars5"></div>
      </div>

  <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Explore SpaceX Launches</h1>

      {/* Controls */}
  <div className="relative z-10 flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center mb-4 sm:mb-6 w-full">
        <input
          type="text"
          placeholder="Search by mission name"
          onChange={(e) => handleSearch(e.target.value)}
          className="px-3 py-2 rounded-lg text-black w-full sm:w-64 text-sm sm:text-base"
        />
        <input
          type="number"
          placeholder="Filter by year"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="px-3 py-2 rounded-lg text-black w-full sm:w-32 text-sm sm:text-base"
        />
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={showSuccess} onChange={() => setShowSuccess(!showSuccess)} />
          Only Successful
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />
          Favorites Only
        </label>
      </div>

      {!started ? (
        <div className="relative z-10 text-center">
          <button
            onClick={() => setStarted(true)}
            disabled={loading || error}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white font-semibold text-base sm:text-lg disabled:opacity-50"
          >
            {loading ? "Loading..." : "Click Me to Start Exploring!"}
          </button>
        </div>
      ) : (
        <>
          {/* Launches List */}
          {error ? (
            <div className="text-red-500 text-center mt-6 sm:mt-10">{error}</div>
          ) : (launches.length === 0) ? (
            <div className="text-gray-400 text-center mt-6 sm:mt-10">No launches available yet.</div>
          ) : (
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {paginatedLaunches.map((launch, idx) => (
                <LaunchCard
                  key={launch.id}
                  ref={el => launchRefs.current[idx] = el}
                  launch={launch}
                  rocketName={rockets[launch.rocket]}
                  isFavorite={favorites.includes(launch.id)}
                  toggleFavorite={toggleFavorite}
                  onClick={() => setSelectedLaunch(launch)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 items-center w-full">
            <div className="flex gap-2 sm:gap-3">
              <button onClick={() => setPage(1)} className="px-4 py-2 sm:px-6 bg-green-600 rounded text-white hover:bg-green-500 transition font-semibold text-sm sm:text-base">First Page</button>
              <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} className="px-4 py-2 sm:px-6 bg-gray-700 rounded text-white hover:bg-gray-600 transition text-sm sm:text-base" disabled={page === 1}>Prev</button>
              <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} className="px-4 py-2 sm:px-6 bg-gray-700 rounded text-white hover:bg-gray-600 transition text-sm sm:text-base" disabled={page === totalPages}>Next</button>
            </div>
            <p className="text-gray-300 mt-2 md:mt-0 text-sm sm:text-base">Page {page} of {totalPages}</p>
          </div>
        </>
      )}

      {/* Modal */}
      {selectedLaunch && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-2 sm:px-4">
          <div className="bg-gray-900 rounded-xl max-w-lg sm:max-w-2xl md:max-w-3xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] animate-slide-in-modal">
            <button onClick={() => setSelectedLaunch(null)} className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-lg sm:text-xl font-bold">✕</button>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{selectedLaunch.name} | {rockets[selectedLaunch.rocket] || selectedLaunch.rocket}</h2>
            {selectedLaunch.links?.patch?.small && (
              <img src={selectedLaunch.links.patch.small} alt="Mission Patch" className="w-20 h-20 sm:w-32 sm:h-32 object-contain mb-2 sm:mb-4 mx-auto" />
            )}
            <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{selectedLaunch.details}</p>
            <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Rocket: {rockets[selectedLaunch.rocket] || selectedLaunch.rocket}</p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
              {selectedLaunch.links?.wikipedia && <a href={selectedLaunch.links.wikipedia} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Wikipedia</a>}
              {selectedLaunch.links?.webcast && <a href={selectedLaunch.links.webcast} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Webcast</a>}
              {selectedLaunch.links?.article && <a href={selectedLaunch.links.article} target="_blank" className="text-blue-400 hover:underline text-sm sm:text-base">Article</a>}
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .slide-in { opacity: 1 !important; transform: translateX(0) !important; transition: all 0.7s ease-out; }
        [class*="slide-delay-0"] { transition-delay: 0.1s; }
        [class*="slide-delay-1"] { transition-delay: 0.2s; }
        [class*="slide-delay-2"] { transition-delay: 0.3s; }

        @media (max-width: 768px) {
          .md\:flex-row { flex-direction: column !important; }
          .md\:px-16 { padding-left: 1rem !important; padding-right: 1rem !important; }
          .md\:py-10 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
        }

        @keyframes slideInModal { 0% { opacity: 0; transform: translateY(-40px); } 100% { opacity:1; transform: translateY(0); } }
        .animate-slide-in-modal { animation: slideInModal 0.5s ease-out forwards; }

        @keyframes galaxyMove { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.2) translate(-40px,40px); } }
        .animate-galaxy { animation: galaxyMove 40s infinite alternate ease-in-out; }

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
        @keyframes shine4 { 0%,100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes shine5 { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}
