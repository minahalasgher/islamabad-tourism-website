// File Name: TourismServices.jsx

import React from "react";

const TourismServices = () => {
  return (
    <section className="w-full bg-[#f8f8f6] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
          Islamabad Tourism
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111827]">
          Discover the beauty {" "}
          <span className="text-slate-500 italic font-semibold">
            Islamabad
          </span>{" "}
          unforgettable journeys
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-2xl text-gray-500 leading-relaxed max-w-4xl mx-auto">
          From breathtaking hills to modern city attractions — explore nature,
          culture, food, and adventure all in one beautiful capital city of
          Pakistan.
        </p>

       </div>
    </section>
  );
};

export default TourismServices;