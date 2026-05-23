import React from "react";

import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";
import tour4 from "../assets/tour4.jpg";

const tours = [
  {
    id: 1,
    image: tour1,
    title: "Cherry Blossom Hunza & Nagar Valley Tour (BY AIR)",
    location: "Gilgit Baltistan",
    category: "Ecotourism",
    oldPrice: "Rs 60,000.00",
    price: "Rs 50,000.00",
    duration: "6 Hours",
  },
  {
    id: 2,
    image: tour2,
    title: "Fairy Meadows, Hunza & Skardu Valley Tour (BY AIR)",
    location: "Gilgit Baltistan",
    category: "Ecotourism",
    oldPrice: "Rs 60,000.00",
    price: "Rs 50,000.00",
    duration: "9 Hours",
  },
  {
    id: 3,
    image: tour3,
    title: "Naran, Shogran, Siri Paye & Neelum Valley Tour",
    location: "Khyber Pakhtunkhwa",
    category: "Scenic Nature Tour",
    oldPrice: "Rs 60,000.00",
    price: "Rs 50,000.00",
    duration: "7 Hours",
  },
  {
    id: 4,
    image: tour4,
    title: "Murree, Nathia Gali & Thandiani Tour",
    location: "Punjab",
    category: "Scenic Nature Tour",
    oldPrice: "Rs 80,000.00",
    price: "Rs 40,000.00",
    duration: "8 Hours",
  },
];

const TrendingTour = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-semibold text-[#222]">
              Trending Tour
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              One way to vertically center is to use my-auto
            </p>
          </div>

          <button className="text-gray-500 text-sm hover:text-black transition-all duration-300">
            More
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">

                  <span className="bg-white text-[#222] text-xs font-medium px-4 py-2 rounded-full">
                    Featured
                  </span>

                  <span className="bg-white text-[#222] text-xs font-medium px-4 py-2 rounded-full">
                    16%
                  </span>

                </div>

                {/* Bottom content */}
                <div className="absolute bottom-4 left-4 text-white">

                  <p className="text-sm opacity-90 mb-1">
                    {tour.category}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">

                    <span className="text-sm line-through text-gray-300">
                      {tour.oldPrice}
                    </span>

                    <span className="text-[32px] font-bold leading-none">
                      Rs
                    </span>

                    <span className="text-2xl font-bold">
                      {tour.price.replace("Rs ", "")}
                    </span>

                  </div>

                </div>

              </div>

              {/* Card Content */}
              <div className="p-6">

                {/* Location */}
                <div className="text-gray-400 text-sm mb-4">
                  {tour.location}
                </div>

                {/* Title */}
                <h3 className="text-[18px] leading-[32px] font-semibold text-[#222] mb-5">
                  {tour.title}
                </h3>

                {/* Time */}
                <div className="text-gray-500 text-sm">
                  {tour.duration}
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrendingTour;