
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = ["Home", "Browse Launches", "About"];
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src={logo} 
            alt="SpaceXplorer Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-lg"
          />
          <h1 className="text-lg sm:text-2xl font-bold tracking-wide">
            Space<span className="text-red-500">Xplorer</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 sm:gap-10 text-base sm:text-lg font-medium">
          {navItems.map((item, idx) => (
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg w-full py-4 px-4 flex flex-col gap-4 text-base font-medium shadow-lg">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={
                item === "Browse Launches"
                  ? "/browse-launches"
                  : item === "About"
                  ? "/about-us"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className="text-white py-2 px-2 rounded transition duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

