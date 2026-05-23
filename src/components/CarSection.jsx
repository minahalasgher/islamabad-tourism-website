import React from "react";

// Local Images
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

const cars = [
  {
    id: 1,
    image: car1,
    location: "Islamabad",
    title: "Luxury SUV Ride",
    desc: "Experience premium comfort and enjoy smooth travel around Islamabad with luxury SUV services.",
    days: "5 Days",
    people: "4 People",
  },

  {
    id: 2,
    image: car2,
    location: "Islamabad",
    title: "Sports Car Drive",
    desc: "Enjoy a stylish and exciting drive through the beautiful roads and destinations of Islamabad.",
    days: "7 Days",
    people: "2 People",
  },

  {
    id: 3,
    image: car3,
    location: "Islamabad",
    title: "Family Car Tour",
    desc: "Perfect family travel option with comfortable seating and unforgettable tourism experience.",
    days: "6 Days",
    people: "6 People",
  },
];

const CarSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 px-5 md:px-12">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[5px] text-blue-600 text-sm font-medium mb-3">
          Featured Cars
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">
          Explore Luxury Cars
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-8">
          Discover amazing car rides and create unforgettable memories with our
          premium travel experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            
            {/* Image */}
            <div className="relative overflow-hidden">
              
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-[320px] object-cover hover:scale-110 transition-all duration-500"
              />

              {/* Location */}
              <div className="absolute top-5 right-5 bg-white px-5 py-2 rounded-2xl shadow-md">
                <p className="text-gray-700 text-sm font-medium">
                  📍 {car.location}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {car.title}
              </h2>

              <p className="text-gray-500 leading-8 mb-7">
                {car.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                
                <div className="flex items-center gap-5 text-gray-500 text-sm">
                  <span>🕒 {car.days}</span>
                  <span>👥 {car.people}</span>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300">
                  Explore Now →
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CarSection;