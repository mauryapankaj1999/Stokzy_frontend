"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const traders = [
  {
    name: "Rob D.",
    amount: "Export for Trading",
    image: "/img/courseimg.png",
  },
  {
    name: "Adam B.",
    amount: "Export for Trading",
    image: "/img/courseimg1.png",
  },
  {
    name: "John D.",
    amount: "Export for Trading",
    image: "/img/courseimg2.png",
  },
  {
    name: "Mike D.",
    amount: "Export for Tradingx",
    image: "/img/courseimg1.png",
  },
];

export default function CourseSlider() {
  return (
    <section className="bg-black py-24 overflow-hidden mb-16 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]"></div>

      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="ms-[16%]">
            <span className="text-lime-400 text-2xl">
              Trader Stories
            </span>

            <h2 className="text-white text-5xl font-bold mt-4">
              Real Traders Real Course
              <br />
              Real Results
            </h2>

            <p className="text-gray-300 mt-5 text-lg max-w-xl">
              Meet the traders who transformed their trading
              journey with our funding programs and turned
              skill into real results.
            </p>
          </div>

          {/* RIGHT */}
          <div>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={2.2}
              spaceBetween={25}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {traders.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[350px] object-cover"
                      />
                    </div>

                    <h3 className="text-white text-lg font-bold mt-4">
                      {item.name}
                    </h3>

                    <p className="text-gray-300 text-[15px] mt-1">
                      Payouts of {item.amount}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
}