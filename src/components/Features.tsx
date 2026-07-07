// "use client";
// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Features() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const sections = gsap.utils.toArray(".panel");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1,
//         pin: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <section ref={containerRef} className="relative h-screen overflow-hidden">
//       <div className="flex h-full w-[400vw]">
//         {/* Section 1 */}
//         <div className="panel w-screen h-screen bg-white">
//           <div className="w-[95%] h-[92vh] overflow-hidden relative mt-7 rounded-[32px] border border-gray-100 bg-white shadow-xl mx-auto  p-10">
//            <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

//             <div className="container mx-auto h-full">
//               <div className="grid grid-cols-2 h-full  gap-7">
//                 <div>
//                   {/* <h2 className="text-6xl font-bold"></h2> */}
//                   <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
//                     Options Trading with{" "}
//                     <span className="text-primary moving-gradient">
//                       Logic, Not Guesswork{" "}
//                     </span>
//                   </h2>
//                   <h4 className="text-gray-500 mt-2 text-[15px] italic">
//                     Options trading rewards discipline and structure — not
//                     prediction. Stokzy helps you trade options using
//                     probability, context, and predefined risk instead of chasing
//                     random moves.
//                   </h4>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Whether you are an option buyer, option seller, or trade
//                     non-directional strategies, success in options depends on
//                     understanding market bias, volatility, and timing.
//                   </p>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Stokzy focuses on helping traders identify when to
//                     participate, when to stay out, and how to structure trades
//                     with clearly defined risk — especially important in
//                     fast-moving weekly expiry markets.
//                   </p>
//                   <ul className="mt-5 list-disc pl-5">
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Directional clarity for option buying
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Range & volatility logic for option selling
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Structure-based models for hedged strategies
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Risk-defined execution for weekly expiries
//                     </li>
//                   </ul>
//                   <button className="mt-8 bg-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
//                     Get Started Today
//                   </button>
//                 </div>

//                 <div className="">
//                   {/* <div className="w-[350px] h-[500px] rounded-3xl bg-white" /> */}
//                   <img src="/img/options-dashboard.webp" alt=""  className="rounded-2xl"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div className="panel w-screen h-screen bg-[#F7FAFF]">
//           <div className="w-[95%] h-[92vh]  relative overflow-hidden mt-7 rounded-[32px] border border-gray-100 bg-white shadow-xl mx-auto  p-10">
//                 <div className="absolute top-0 bottom-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//             <div className="container mx-auto h-full">
//               <div className="grid grid-cols-2 h-full  gap-7">
              
               
              
//                 <div>
//                   {/* <h2 className="text-6xl font-bold"></h2> */}
//                   <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
//                     Trinetra™ — See{" "}
//                     <span className="text-primary moving-gradient">
//                       the Market in Context
//                     </span>
//                   </h2>
//                   <h4 className="text-gray-500 mt-2 text-[15px] italic">
//                     Most indicators show isolated signals. Trinetra is built to
//                     show the bigger picture — combining structure, trend, and
//                     momentum into a single, decision-ready framework.
//                   </h4>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Trading without context leads to confusion. Trinetra helps
//                     traders understand where the market is, not just where it
//                     might go next.
//                   </p>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     By aligning higher timeframe structure with current trend
//                     strength and momentum participation, Trinetra filters out
//                     low-quality trades and highlights areas where probability
//                     favors disciplined execution.
//                   </p>
//                   <ul className="mt-5 list-disc pl-5">
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Market structure to define context
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Trend strength to confirm direction
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Momentum alignment to time entries
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Works across equity, options, forex & systems
//                     </li>
//                   </ul>
//                   <button className="mt-8 bg-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
//                     Get Started Today
//                   </button>
//                 </div>

//                <div className="">
//                   <img
//                     src="/img/Trintera.webp"
//                     alt=""
//                     className="w-full h-[500px] object-cover rounded-2xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section 3 */}
//         <div className="panel w-screen h-screen bg-white">
//           <div className="w-[95%] h-[92vh] relative overflow-hidden mt-7 rounded-[32px] border border-gray-100 bg-white shadow-xl mx-auto  p-10">
//                <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//             <div className="container mx-auto h-full">
//               <div className="grid grid-cols-2 h-full  gap-7">
//                 <div>
//                   {/* <h2 className="text-6xl font-bold"></h2> */}
//                   <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
//                     Forex Trading — Strategy First,{" "}
//                     <span className="text-primary moving-gradient">
//                       Execution Second
//                     </span>
//                   </h2>
//                   <h4 className="text-gray-500 mt-2 text-[15px] italic">
//                     Successful forex trading is not about leverage or speed — it
//                     is about structure, liquidity, and disciplined risk
//                     management. Stokzy focuses on building strategies, not
//                     selling execution.
//                   </h4>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Stokzy does not act as a broker, does not provide leverage,
//                     and does not execute trades. Instead, we help traders design
//                     structured forex strategies that focus on probability, risk
//                     limits, and consistency.
//                   </p>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Our frameworks are designed for traders who operate in
//                     global forex environments — including those trading with
//                     international prop firms — where rule-following and drawdown
//                     control matter more than aggressive returns.
//                   </p>
//                   <ul className="mt-5 list-disc pl-5">
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Strategy models based on market structure & liquidity
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Session-based logic for London & New York
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Risk-first systems suitable for prop firm evaluations
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Designed for manual or automated execution
//                     </li>
//                   </ul>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Stokzy provides educational and analytical tools only. Trade
//                     execution and brokerage services are handled independently
//                     by the user.
//                   </p>
//                   <button className="mt-8 bg-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
//                     Get Started Today
//                   </button>
//                 </div>

//                 <div className="">
//                   <img
//                     src="/img/Forex-dashboard.webp"
//                     alt=""
//                     className="w-full h-[500px] object-cover rounded-2xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section 4 */}
//         <div className="panel w-screen h-screen  bg-[#F3F8F5] relative">
//           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//           <div className="w-[95%] relative  h-[92vh] mt-7 rounded-[32px] border border-gray-100 bg-white shadow-xl mx-auto  p-10">
//                 <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
//             <div className="container mx-auto h-full">
//               <div className="grid grid-cols-2 h-full  gap-7">
//                 <div>
//                   {/* <h2 className="text-6xl font-bold"></h2> */}
//                   <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
//                     No-Code Strategy Automation —{" "}
//                     <span className="text-primary moving-gradient">
//                       You Define the Logic
//                     </span>
//                   </h2>
//                   <h4 className="text-gray-500 mt-2 text-[15px] italic">
//                     Automation is not about removing control — it is about
//                     removing emotion. Stokzy allows traders to convert
//                     well-defined strategies into rule-based systems without
//                     writing a single line of code.
//                   </h4>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Most traders already know what to trade — the challenge is
//                     executing the same rules consistently. Automation helps
//                     eliminate hesitation, impulsive decisions, and execution
//                     errors that destroy performance over time.
//                   </p>
//                   <p className="text-gray-500 mt-2 text-[16px]">
//                     Stokzy’s no-code automation framework is designed to follow
//                     your logic, not replace it. You decide the strategy, risk
//                     limits, and conditions — automation simply enforces
//                     discipline.
//                   </p>
//                   <ul className="mt-5 list-disc pl-5">
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Convert manual setups into rule-based systems
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Define entries, exits, and risk parameters
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Reduce emotional and over-trading errors
//                     </li>
//                     <li className="text-gray-500 mt-2 text-[15px]">
//                       Suitable for manual + prop firm trading
//                     </li>
//                   </ul>
//                   <button className="mt-8 bg-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
//                     Get Started Today
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <img
//                     src="/img/Algo.webp"
//                     alt=""
//                     className="w-full h-[500px] object-cover  rounded-2xl"
//                   />
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#57A846]/10 blur-[100px]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorySection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const slides = [
    {
      title: "Track Charts & Positions",
      description:
        "Monitor markets with real-time charts and advanced trading tools. Monitor markets with real-time charts and advanced trading tools.",
      image: "/img/bigimg.webp",
      glow: "#7ED957",
    },
    {
      title: "Analyse Option Chains",
      description:
               "Monitor markets with real-time charts and advanced trading tools. Monitor markets with real-time charts and advanced trading tools.",

      image: "/img/bigimg1.webp",
      glow: "#00BFFF",
    },
    {
      title: "Build Algo Strategies",
      description:
               "Monitor markets with real-time charts and advanced trading tools. Monitor markets with real-time charts and advanced trading tools.",

      image: "/img/bigimg2.webp",
      glow: "#8B5CF6",
    },
    {
      title: "Portfolio Insights",
      description:
             "Monitor markets with real-time charts and advanced trading tools. Monitor markets with real-time charts and advanced trading tools.",

      image: "/img/bigimg.webp",
      glow: "#F97316",
    },
    {
      title: "Trade With Confidence",
      description:
               "Monitor markets with real-time charts and advanced trading tools. Monitor markets with real-time charts and advanced trading tools.",

      image: "/img/bigimg1.webp",
      glow: "#22C55E",
    },
  ];

  useEffect(() => {
    const totalSlides = slides.length;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${totalSlides * 100}%`,
      pin: true,
      scrub: 1,

      onUpdate: (self) => {
        const index = Math.min(
          totalSlides - 1,
          Math.floor(self.progress * totalSlides)
        );

        setActive(index);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".slide-content",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    );

    gsap.fromTo(
      ".slide-image",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
      }
    );
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full transition-all duration-1000"
        style={{
          background: slides[active].glow,
          transform: "translate(-50%, -50%)",
          filter: "blur(220px)",
          opacity: 0.22,
        }}
      />

      <div
        className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] rounded-full transition-all duration-1000"
        style={{
          background: slides[active].glow,
          filter: "blur(180px)",
          opacity: 0.15,
        }}
      />

      <div
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full transition-all duration-1000"
        style={{
          background: slides[active].glow,
          filter: "blur(160px)",
          opacity: 0.12,
        }}
      /> */}

      {/* Content */}
      <div className="relative z-10 h-full">

        <div className="container mx-auto h-full ">

          <div className="grid lg:grid-cols-2 h-full items-center gap-6">

            {/* Left Content */}
            <div className="slide-content ms-[16%]">

              <span
                className="uppercase tracking-[4px] font-medium text-primary"
                // style={{
                //   color: slides[active].glow,
                // }}
              >
                Trading Platform
              </span>

              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mt-5">
                {slides[active].title}
              </h2>

              <p className="text-gray-300 text-[16px] leading-8 mt-6 max-w-xl">
                {slides[active].description}
              </p>

              <button
                className="mt-10 px-6 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-105"
                // style={{
                //   backgroundColor: slides[active].glow,
                // }}
              >
                Explore Now
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center mt-[5%]">

              <img
                key={active}
                src={slides[active].image}
                alt=""
                className="slide-image w-full h-[85vh] object-cover"
                // style={{
                //   filter: `drop-shadow(0 0 80px ${slides[active].glow})`,
                // }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Progress */}
      {/* <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">

        {slides.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              active === index
                ? "w-4 h-4"
                : "w-3 h-3 bg-white/30"
            }`}
            style={
              active === index
                ? {
                    backgroundColor: slides[active].glow,
                  }
                : {}
            }
          />
        ))}

      </div> */}
    </section>
  );
}