import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

export default function BannerSection() {
  return (
    <div className=" h-[100vh] overflow-hidden flex justify-center relative">
      
      <div className="absolute top-10 left-10 opacity-20">
  {/* <svg width="220" height="220" viewBox="0 0 220 220">
    <g className="animate-pulse">
      <line x1="30" y1="140" x2="30" y2="60" stroke="#22c55e" strokeWidth="3" />
      <rect x="20" y="80" width="20" height="40" fill="#22c55e" rx="3" />

      <line x1="80" y1="170" x2="80" y2="70" stroke="#ef4444" strokeWidth="3" />
      <rect x="70" y="100" width="20" height="50" fill="#ef4444" rx="3" />

      <line x1="130" y1="120" x2="130" y2="30" stroke="#22c55e" strokeWidth="3" />
      <rect x="120" y="50" width="20" height="40" fill="#22c55e" rx="3" />
    </g>
  </svg> */}


<svg
  className="absolute left-0 top-[40%] opacity-96"
  width="500"
  height="300"
>
  <path
    d="M20 220 L100 180 L180 190 L260 100 L340 120 L420 50"
    fill="none"
    stroke="#7ED957"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="1000"
    strokeDashoffset="1000"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="1000"
      to="0"
      dur="5s"
      repeatCount="indefinite"
    />
  </path>
</svg>

</div>


      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
      <div className="grid grid-cols-2 relative">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-tight">
            Scale your business with <br />{" "}
            <span className="text-primary moving-gradient">
              {" "}
              Sustainable Intelligence
            </span>
          </h2>
          <p className="text-gray-600 mt-4 leading-tight">
            A complete trading ecosystem for Indian traders — covering equities,{" "}
            <br /> options, forex strategies, prop firm systems, and automation.
          </p>

          <ul className="mt-10 flex gap-4 items-center">
            <li>
              <a href="#" className="startbtn w-full inline-flex">
                Start Your Journey <AiFillThunderbolt />
              </a>
            </li>
            <li>
              <a href="#" className="getstartedbtn">
                Live Class
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className="hero-bg_wrap-cols">
            <div className="hero-bg_wrap-col">
              <div className="hero-bg_wrap-slides v-scroll">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg2.jpg" alt="Hero Slide 1" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg3.jpg" alt="Hero Slide 2" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg4.jpg" alt="Hero Slide 3" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg5.jpg" alt="Hero Slide 4" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg6.jpg" alt="Hero Slide 5" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg19.jpg" alt="Hero Slide 6" />
                </div>
              </div>
              <div className="hero-bg_wrap-slides v-scroll">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg7.png" alt="Hero Slide 7  " />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg8.jpg" alt="Hero Slide 8" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg9.jpg" alt="Hero Slide 9" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg6.jpg" alt="Hero Slide 10" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg2.jpg" alt="Hero Slide 11" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg7.png" alt="Hero Slide 12" />
                </div>
              </div>
            </div>
            <div className="hero-bg_wrap-col">
              <div className="hero-bg_wrap-slides scroll2">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg11.jpg" alt="Hero Slide 13" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg12.jpg" alt="Hero Slide 14" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg13.jpg" alt="Hero Slide 15" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg33.jpg" alt="Hero Slide 16" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg15.jpg" alt="Hero Slide 17" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg16.png" alt="Hero Slide 18" />
                </div>
              </div>
              <div className="hero-bg_wrap-slides scroll2">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg17.jpg" alt="Hero Slide 19" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg18.jpg" alt="Hero Slide 20" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg19.jpg" alt="Hero Slide 21" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg20.jpg" alt="Hero Slide 22" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg21.jpg" alt="Hero Slide 23" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg2.jpg" alt="Hero Slide 24" />
                </div>
              </div>
            </div>
            <div className="hero-bg_wrap-col">
              <div className="hero-bg_wrap-slides scroll3">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg22.jpg" alt="Hero Slide 25" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg23.png" alt="Hero Slide 26" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg24.png" alt="Hero Slide 27" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg25.jpg" alt="Hero Slide 28" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg26.jpg" alt="Hero Slide 29" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg7.png" alt="Hero Slide 30" />
                </div>
              </div>
              <div className="hero-bg_wrap-slides scroll3">
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg27.jpg" alt="Hero Slide 31" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg28.jpg" alt="Hero Slide 32" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg29.jpg" alt="Hero Slide 33" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg30.jpg" alt="Hero Slide 34" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg31.jpg" alt="Hero Slide 35" />
                </div>
                <div className="hero-bg_wrap_slide">
                  <img src="/img/graphimg/tradeimg32.jpg" alt="Hero Slide 36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
