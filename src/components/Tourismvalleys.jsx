// File Name: ValleysSection.jsx

import React, { useState } from "react";

import margalla from "../assets/margalla1.jpg";
import pirsohawa from "../assets/pirsohawa.jpg";
import saidpur from "../assets/saidpur.jpg";
import neelasandh from "../assets/neelasandh.jpg";
import murree from "../assets/murree.jpg";
import naran from "../assets/naran.jpg";
import kaghan from "../assets/kaghan.jpg";
import hunza from "../assets/hunza2.jpg";

const places = [
  {
    id: 1,
    title: "Margalla Hills",
    description:
      "Enjoy breathtaking mountain views and peaceful hiking trails near Islamabad.",
    image: margalla,
  },

  {
    id: 2,
    title: "Pir Sohawa",
    description:
      "A famous hilltop destination with cool weather and stunning city views.",
    image: pirsohawa,
  },

  {
    id: 3,
    title: "Saidpur Valley",
    description:
      "Discover the cultural beauty and traditional village atmosphere of Saidpur.",
    image: saidpur,
  },

  {
    id: 4,
    title: "Neela Sandh",
    description:
      "Experience crystal blue water surrounded by natural rocks and greenery.",
    image: neelasandh,
  },

  {
    id: 5,
    title: "Murree Hills",
    description:
      "Explore beautiful pine forests, cool breeze, and scenic hill landscapes.",
    image: murree,
  },

  {
    id: 6,
    title: "Naran Valley",
    description:
      "A heavenly valley famous for rivers, lakes, and snow-covered mountains.",
    image: naran,
  },

  {
    id: 7,
    title: "Kaghan Valley",
    description:
      "Enjoy lush green valleys and mesmerizing natural beauty all around.",
    image: kaghan,
  },

  {
    id: 8,
    title: "Hunza Valley",
    description:
      "Witness majestic mountains, historic culture, and unforgettable landscapes.",
    image: hunza,
  },
];

const ValleysSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="w-full bg-white py-20 px-5 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-sm text-[#8B6F47]">
          Islamabad Tourism
        </p>

        

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mt-3">
          Top Attractions
        </h2>

        <div className="w-20 h-[3px] bg-[#8B6F47] mx-auto mt-5 rounded-full"></div>
      </div>

      

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-5">
        {places.map((place, index) => (
          <div
            key={place.id}
            onMouseEnter={() => setActiveCard(index)}
            className={`
              relative overflow-hidden rounded-[38px]
              transition-all duration-500 ease-in-out
              shadow-2xl cursor-pointer

              ${
                activeCard === index
                  ? "w-[300px] h-[400px]"
                  : "w-[190px] h-[300px]"
              }
            `}
          >
            {/* Image */}
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Text */}
            <div className="absolute bottom-8 left-6 z-10">
              <h3
                className={`
                  text-white font-semibold leading-tight
                  transition-all duration-500

                  ${
                    activeCard === index
                      ? "text-3xl"
                      : "text-xl"
                  }
                `}
              >
                {place.title}
              </h3>
              <p className="text-white/90 text-sm mt-3 leading-6 max-w-[250px]">
            {place.description}
              </p>

              <div className="w-14 h-[3px] bg-white mt-4 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValleysSection;