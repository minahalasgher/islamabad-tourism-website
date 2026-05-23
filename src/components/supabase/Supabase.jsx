import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Paris",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    title: "Dubai",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    title: "New York",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    title: "Tokyo",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "London",
  },
];

function App() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Countries 
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <h2 className="text-xl font-semibold text-center py-4">
                {card.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;