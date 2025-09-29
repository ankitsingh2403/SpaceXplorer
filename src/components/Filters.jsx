import React from "react";

export default function Filters({ searchValue, onSearch, yearFilter, setYearFilter, showSuccess, setShowSuccess, showFavorites, setShowFavorites }) {
  return (
    <div className="relative z-10 flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center mb-4 sm:mb-6 w-full">
      <input
        type="text"
        placeholder="Search by mission name"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        className="px-3 py-2 rounded-lg text-black w-full sm:w-64 text-sm sm:text-base"
      />
      <input
        type="number"
        placeholder="Filter by year"
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
        className="px-3 py-2 rounded-lg text-black w-full sm:w-32 text-sm sm:text-base"
      />
      <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base">
        <input type="checkbox" checked={showSuccess} onChange={() => setShowSuccess(!showSuccess)} />
        Only Successful
      </label>
      <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base">
        <input type="checkbox" checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />
        Favorites Only
      </label>
    </div>
  );
}
