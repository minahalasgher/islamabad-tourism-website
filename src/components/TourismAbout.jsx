// File Name: TourismAbout.jsx

import React from "react";
import islamabadImg from "../assets/islamabad-about.jpg";

const TourismAbout = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="grid lg:grid-cols-2 bg-[#f8f8f8] rounded-[30px] md:rounded-[40px] overflow-hidden items-center">

          {/* Left Content */}
          <div className="px-5 sm:px-8 md:px-14 py-10 sm:py-14">

            {/* Small Heading */}
            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm text-[#B3873B] font-semibold">
              Tourism About
            </p>

            {/* Main Heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[55px] leading-[42px] sm:leading-[52px] md:leading-[72px] font-semibold text-[#1d2736] mt-5 sm:mt-6">

              <span className="block">
                Iconic Beauty of
              </span>

              <span className="block">
                Faisal Mosque
              </span>

            </h2>

            {/* Small Line */}
            <div className="w-14 sm:w-16 h-[3px] bg-[#B3873B] rounded-full mt-6 sm:mt-7"></div>

            {/* Paragraph */}
            <p className="text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-[30px] sm:leading-[34px] md:leading-[36px] mt-7 sm:mt-8 max-w-[560px]">
              Islamabad is one of the most peaceful and beautiful capitals in
              Pakistan, surrounded by the breathtaking Margalla Hills and lush
              green landscapes.
            </p>

            <p className="text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-[30px] sm:leading-[34px] md:leading-[36px] mt-4 sm:mt-5 max-w-[560px]">
              From scenic viewpoints and famous tourist attractions to relaxing
              weather and stunning night views, Islamabad provides unforgettable
              experiences for travelers seeking adventure, comfort, and nature.
            </p>

            {/* Button */}
            <button className="mt-8 sm:mt-10 bg-[#B3873B] hover:bg-[#9a7431] duration-300 text-white px-7 sm:px-9 py-3 sm:py-4 rounded-full text-sm sm:text-[15px] font-medium shadow-lg">
              Discover More →
            </button>

          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-full">

            {/* Main Image */}
            <img
              src={islamabadImg}
              alt="Islamabad Tourism"
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-transparent to-transparent"></div>

            {/* Floating Info Card */}
            <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 left-5 sm:left-8 md:left-10 bg-white px-4 sm:px-6 md:px-7 py-3 sm:py-4 md:py-5 rounded-[22px] md:rounded-[28px] shadow-2xl flex items-center gap-3 sm:gap-4 max-w-[90%]">

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#B3873B] flex items-center justify-center text-white text-xl sm:text-2xl">
                📍
              </div>

              {/* Card Text */}
              <div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1d2736]">
                  Islamabad
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  The Green Capital Of Pakistan
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TourismAbout;