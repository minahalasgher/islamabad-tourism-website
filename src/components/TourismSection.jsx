// TourismSection.jsx

import React from "react";

function TourismSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      
      {/* Small Heading */}
      <p className="text-center uppercase tracking-[4px] sm:tracking-[6px] text-gray-400 text-xs sm:text-sm mb-4">
        Islamabad Tourism
      </p>

      {/* Main Heading */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Places I{" "}
        <span className="text-slate-500 italic">
          explore
        </span>{" "}
        in Islamabad
      </h1>

      {/* Description */}
      <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-5 sm:mt-6 leading-7 sm:leading-8 px-2">
        Discover breathtaking mountains, peaceful parks,
        famous landmarks, and unforgettable tourist
        attractions in the capital city of Pakistan.
      </p>

    </section>
  );
}

export default TourismSection;