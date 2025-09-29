import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LaunchContext = createContext();

export const LaunchProvider = ({ children }) => {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState({});
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);
  const launchesPerPage = 9;

  useEffect(() => {
    const fetchLaunches = async () => {
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
    fetchLaunches();
  }, []);

  const toggleFavorite = (id) => {
    let updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // Filter launches
  const filteredLaunches = launches
    .filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
    .filter(l => yearFilter ? l.date_utc.startsWith(yearFilter) : true)
    .filter(l => showSuccess ? l.success === true : true)
    .filter(l => showFavorites ? favorites.includes(l.id) : true);

  const totalPages = Math.ceil(filteredLaunches.length / launchesPerPage);

  const paginatedLaunches = filteredLaunches.slice(
    (page - 1) * launchesPerPage,
    (page - 1) * launchesPerPage + launchesPerPage
  );

  return (
    <LaunchContext.Provider
      value={{
        launches,
        rockets,
        favorites,
        toggleFavorite,
        loading,
        error,
        search,
        setSearch,
        yearFilter,
        setYearFilter,
        showSuccess,
        setShowSuccess,
        showFavorites,
        setShowFavorites,
        page,
        setPage,
        totalPages,
        paginatedLaunches,
        launchesPerPage,
        filteredLaunches,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
