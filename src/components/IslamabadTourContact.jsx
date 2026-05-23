import React from "react";

const IslamabadTourContact = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Heading */}
        <p className="text-sm tracking-[6px] uppercase text-gray-400 mb-6">
          Islamabad Tourism
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Let's explore the beauty of{" "}
          <span className="text-gray-500 italic">
            Islamabad.
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-500 text-lg mt-8 max-w-2xl mx-auto leading-8">
          Discover peaceful hills, beautiful parks, modern architecture,
          and unforgettable tour experiences in the heart of Pakistan.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10 flex-wrap">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 duration-300">
            Explore Tours
          </button>

          <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 duration-300">
            View Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default IslamabadTourContact;