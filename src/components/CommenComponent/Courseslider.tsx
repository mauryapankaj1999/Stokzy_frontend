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
    <section className="bg-black px-2 py-24 overflow-hidden mb-16 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]"></div>

      <div className="container mx-auto px-4">
        {/*
          Desktop wala "grid lg:grid-cols-2" bilkul waisa hi hai.
          Sirf "max-lg:grid-cols-1" add kiya — ye SIRF 1024px se neeche
          apply hota hai. Yahi asli bug tha: bina kisi grid-cols ke,
          grid item ki width auto/content-based ho jaati thi aur Swiper
          apni width nahi bhaanp paata tha, isliye mobile pe gayab dikh raha tha.
        */}
        <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 lg:gap-20 gap-10 items-center">
          {/* LEFT - original classes untouched */}
          <div className="col-span-1 lg:ms-[16%]">
            <span className="text-lime-400 text-2xl">Trader Stories</span>

            <h2 className="text-white lg:text-3xl text-2xl font-bold mt-4">
              Real Traders Real Course
              <br className="lg:block hidden" />
              Real Results
            </h2>

            <p className="text-gray-300 mt-5 lg:text-lg text-sm max-w-xl">
              Meet the traders who transformed their trading journey with our
              funding programs and turned skill into real results.
            </p>
          </div>

          {/* RIGHT - Swiper */}
          <div className="col-span-1 min-w-0">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1.3}
              spaceBetween={16}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                // 1024px aur usse upar = bilkul original desktop values
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 25,
                },
              }}
            >
              {traders.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[350px] max-lg:h-[220px] object-cover"
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