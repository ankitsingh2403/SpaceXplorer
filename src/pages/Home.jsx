import React from "react";
import Hero from "../components/Hero";
import SpaceXInfoGalaxy1 from "../components/SpaceXInfoGalaxy";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* SpaceX Info Section */}
      <SpaceXInfoGalaxy1 />
    </div>
  );
};

export default Home;
