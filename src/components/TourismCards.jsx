import React from "react";

import img1 from "../assets/faisal3.jpg";
import img2 from "../assets/monal.jpg";
import img3 from "../assets/daman.jpg";
import img4 from "../assets/lok.jpg";
import img5 from "../assets/rawal.jpg";
import img6 from "../assets/monument .jpg";

const places = [
  {
    title: "Faisal Mosque",
    image: img1,
  },
  {
    title: "Monal Islamabad",
    image: img2,
  },
  {
    title: "Daman-e-Koh",
    image: img3,
  },
  {
    title: "Lok Virsa Museum",
    image: img4,
  },
  {
    title: "Rawal Lake",
    image: img5,
  },
  {
    title: "Monument Museum",
    image: img6,
  },
];

const TourismCards = () => {
  return (
    <div className="w-full py-14 sm:py-16 bg-white">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14 text-gray-900">
        Explore Islamabad
      </h2>

      {/* Cards Container */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 md:px-10 scrollbar-hide">
        
        {places.map((place, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] 
            bg-white rounded-3xl shadow-lg overflow-hidden 
            hover:scale-105 transition duration-300 flex-shrink-0"
          >
            
            {/* Image */}
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {place.title}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TourismCards;