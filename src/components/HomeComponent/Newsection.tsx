"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useEffect, useState } from "react";

export default function Newsection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://finnhub.io/api/v1/news?category=general&token=YOUR_API_KEY")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.slice(0, 20));
      })
      .catch((err) => console.log(err));
  }, []);
  const newsData = [
    {
      id: 1,
      title: "Forex Basics To Advance",
      image: "/img/Forex-dashboard.webp",
    },
    {
      id: 2,
      title: "Algo Trading Mastery",
      image: "/img/options-dashboard.webp",
    },
    {
      id: 3,
      title: "Options Trading",
      image: "/img//options-dashboard.webp",
    },
    {
      id: 4,
      title: "Price Action Course",
      image: "/img/img-frame-1.webp",
    },
    {
      id: 5,
      title: "Crypto Trading",
      image: "/img/Maskgroup.png",
    },
    {
      id: 6,
      title: "Swing Trading",
      image: "/img/Algo.webp",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-center text-4xl font-bold">Today News</h2>
      </div>

      {/* TOP */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        allowTouchMove={false}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {newsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group relative overflow-hidden rounded-[14px] bg-white shadow-md mb-2">
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  console.log("Image Error:", item.image);
                }}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <span className="inline-block text-xs bg-[#7ED957] text-black font-semibold px-3 py-1 rounded-full mb-3">
                  Trading
                </span>

                <h3 className="text-xl font-bold leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mt-2">
                  Learn advanced trading strategies and market insights.
                </p>

                <button className="mt-4 text-sm font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTTOM */}
    </section>
  );
}
