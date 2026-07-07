import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AlgoTradingSection() {
  const features = [
    "No Coding Required",
    "Real-Time Signals",
    "Strategy Builder",
    "Auto Trade Execution",
    "Historical Backtesting",
    "Advanced Risk Controls",
  ];

  return (
    <section className=" py-4  overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 z-[-1] bg-[#7ED957]/20 blur-[150px]" />

      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div className="relative">
              {/* <video
              className="w-full h-[100vh] object-cover "
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/img/trading1.mp4" type="video/mp4" />
            </video> */}

            <img src="/img/Algo.webp" alt="" className="w-full h-[100vh] object-cover " />

            {/* Floating Card */}
            {/* <div className="absolute top-5 right-5 bg-[#7ED957] text-black px-5 py-3 rounded-xl font-bold shadow-lg">
              Win Rate 78%
            </div> */}

            {/* <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
              <p className="text-sm text-gray-300">
                Live Strategy Running
              </p>
              <h4 className="font-semibold">
                NIFTY Breakout Algo
              </h4>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="me-[16%]">
            <span className="inline-block text-[#7ED957] font-semibold uppercase tracking-wider">
              Algo Trading
            </span>

            <h2 className="text-3xl font-bold mb-1">
              Automate Your Trading
              With Smart Algorithms
            </h2>

            <p className="text-gray-400 mt-4 text-[16px] leading-relaxed">
              Build, test and deploy automated trading strategies
              that execute trades instantly based on your predefined
              rules. Eliminate emotions and trade with speed,
              precision and consistency.
              
              Build, test and deploy automated trading strategies <br/>
              that execute trades instantly based on your predefined
              rules. Eliminate emotions and trade with speed,
              precision and consistency.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-[#f8fafc] rounded-2xl p-3 border hover:bg-[#ecfdf5] hover:border-[#1ca045]">
                <h3 className="text-lg font-bold text-[#000]">
                  78%
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Win Rate
                </p>
              </div>

                            <div className="bg-[#f8fafc] rounded-2xl p-3 border hover:bg-[#ecfdf5] hover:border-[#1ca045]">

                <h3 className="text-lg font-bold">
                  12K+
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Trades Executed
                </p>
              </div>

                          <div className="bg-[#f8fafc] rounded-2xl p-3 border hover:bg-[#ecfdf5] hover:border-[#1ca045]">

                <h3 className="text-lg font-bold ">
                  24/7
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Monitoring
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#f8fafc] border border-[#e0e0e08a] rounded-xl p-3 hover:bg-[#ecfdf5] hover:border-[#1ca045]"
                >
                  <FaCheckCircle className="text-[#7ED957] text-md" />
                  <span className="text-[13px] font-semibold  text-black">{item}</span>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}