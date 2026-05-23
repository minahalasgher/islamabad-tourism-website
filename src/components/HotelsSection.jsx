// HotelsSection.jsx

import React from "react";

import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import hotel7 from "../assets/hotel7.jpg";
import hotel8 from "../assets/hotel8.jpg";

const hotels = [
  {
    id: 1,
    name: "Serena Hotel",
    image: hotel1,
  },
  {
    id: 2,
    name: "Islamabad Marriott",
    image: hotel2,
  },
  {
    id: 3,
    name: "Ramada Hotel",
    image: hotel3,
  },
  {
    id: 4,
    name: "Hotel Crown Plaza",
    image: hotel4,
  },
  {
    id: 5,
    name: "Grand Islamabad",
    image: hotel5,
  },
  {
    id: 6,
    name: "Shelton Hotel",
    image: hotel6,
  },
  {
    id: 7,
    name: "Royal Galaxy Hotel",
    image: hotel7,
  },
  {
    id: 8,
    name: "The Centaurus Hotel",
    image: hotel8,
  },
];

const HotelsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-14">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-[4px] text-sky-500 font-semibold uppercase">
          Best Hotels
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Stay In Islamabad
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Explore luxury and comfortable hotels in Islamabad for your perfect stay.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {hotel.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Luxury & Comfortable Stay ,peaceful enviroment,elegant room,fine dining.
              </p>

              <button className="mt-4 px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelsSection;