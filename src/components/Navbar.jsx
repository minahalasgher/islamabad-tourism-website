import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Wander Islamabad
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Destinations</li>
          <li className="hover:text-gray-300 cursor-pointer">Flights</li>
          <li className="hover:text-gray-300 cursor-pointer">Offers</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>

          <li>
            <button
              onClick={() => navigate("/booking")}
              className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Book Tour
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Destinations</li>
            <li className="hover:text-gray-300 cursor-pointer">Flights</li>
            <li className="hover:text-gray-300 cursor-pointer">Offers</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>

            <li>
              <button
                onClick={() => navigate("/booking")}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Book Tour
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;