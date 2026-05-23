import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-black/40 backdrop-blur-md text-white">

      <h1 className="text-2xl font-bold tracking-wide">
        Wander Islamabad
        </h1>

      <ul className="flex items-center gap-8 text-lg font-semibold">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Destinations</li>
        <li className="hover:text-gray-300 cursor-pointer">Flights</li>
        <li className="hover:text-gray-300 cursor-pointer">Offers</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>

        <li>
        <button
          onClick={() => navigate("/booking")}
          className="bg-white text-black px-5 py-2 rounded-full"
           >
         Book Tour
        </button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;