
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="SpaceXplorer Logo" 
            className="h-12 w-12 object-contain drop-shadow-lg"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            Space<span className="text-red-500">Xplorer</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-10 text-lg font-medium">
          {["Home", "Browse Launches", "About"].map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={
                  item === "Browse Launches"
                    ? "/browse-launches"
                    : item === "About"
                    ? "/about-us"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="text-white transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500"
              >
                {item}
              </a>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

