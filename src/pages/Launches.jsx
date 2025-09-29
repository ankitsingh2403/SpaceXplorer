import React from "react";
import BrowseHero from "../components/BrowseHero";
import BrowseLaunches from "../components/BrowseLaunches";

const Launches = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col">
      <BrowseHero />
      <BrowseLaunches />
    </div>
  );
};

export default Launches;
