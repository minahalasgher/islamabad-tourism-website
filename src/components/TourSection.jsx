import React from "react";

// Local Images Import
import faisalImg from "../assets/faisal2.jpg";
import margallaImg from "../assets/margalla2.jpg";
import monumentImg from "../assets/monument2.jpg";
import lakeviewImg from "../assets/lakeview2.jpg";

const tours = [
  {
    id: 1,
    title: "Faisal Mosque Tour",
    image: faisalImg,
    description:
      "Explore the beauty of Faisal Mosque with peaceful views and stunning architecture.",
  },
  {
    id: 2,
    title: "Margalla Hills Tour",
    image: margallaImg,
    description:
      "Enjoy hiking, fresh air, and beautiful nature views at Margalla Hills.",
  },
  {
    id: 3,
    title: "Pakistan Monument Tour",
    image: monumentImg,
    description:
      "Visit the iconic Pakistan Monument and discover the history of Pakistan.",
  },
  {
    id: 4,
    title: "Lake View Park Tour",
    image: lakeviewImg,
    description:
      "Spend a relaxing day with family activities, boating, and green scenery.",
  },
];

const TourSection = () => {
  return (
    <section className="w-full py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#0f766e] font-semibold uppercase tracking-wider">
            Explore Islamabad
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Popular City Tours
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover the most beautiful and famous places of Islamabad with our
            amazing tour experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {tour.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  {tour.description}
                </p>

                <button className="mt-5 bg-[#0f766e] hover:bg-[#115e59] text-white px-5 py-2 rounded-full transition">
                  Explore Tour
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TourSection;