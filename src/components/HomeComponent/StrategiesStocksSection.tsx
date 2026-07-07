import React from "react";

export default function StrategiesStocksSection() {
  return (
    <>
      <div className="section-container mx-auto pt-14">
        <div className="grid grid-cols-2 gap-12">
          <div className="col-span-1">
            {/* <img src="/img/frame-img.webp" alt="" className="w-full h-[500px] object-cover rounded-lg" /> */}
            <video
              className="w-full h-[500px] object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/img/trading2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
              Learn Proven Strategies for{" "}
              <span className="text-primary moving-gradient">
                Stocks and Options{" "}
              </span>
            </h2>
            <p className="mb-8 text-gray-500 mt-2 text-[14px]">
              We built this platform to help investors and traders make smarter
              decisions through real-time data and modern analytics
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <img
                  src="/img/trend-up-growth-stock.webp"
                  alt=""
                  className="w-[35px] h-[35px]"
                />
                <h5 className="mt-4 text-md font-bold mb-1  leading-tight text-[#0F172A]">
                  Real-Time Market Insights
                </h5>
                <p className="text-gray-500 mt-1 text-[14px]">
                  Stay updated with live data and stock movements
                </p>
              </div>
              <div className="col-span-1">
                <img
                  src="/img/shield-secure-protection-1.webp"
                  alt=""
                  className="w-[35px] h-[35px]"
                />
                <h5 className="mt-4 text-md font-bold mb-1  leading-tight text-[#0F172A]">
                  Secure & Reliable
                </h5>
                <p className="text-gray-500 mt-2 text-[14px]">
                  Enterprise-level protection for all transactions.
                </p>
              </div>
              <div className="col-span-1 mt-2">
                <img
                  src="/img/seo-3d-icon-png-template-1.webp"
                  alt=""
                  className="w-[35px] h-[35px]"
                />
                <h5 className="mt-4 text-md font-bold mb-1  leading-tight text-[#0F172A]">
                  Customizable Dashboard
                </h5>
                <p className="text-gray-500 mt-2 text-[14px]">
                  Personalized trading experience for every investor.
                </p>
              </div>
              <div className="col-span-1 mt-2">
                <img
                  src="/img/download-3-1.webp"
                  alt=""
                  className="w-[35px] h-[35px]"
                />
                <h5 className="mt-4 text-md font-bold mb-1  leading-tight text-[#0F172A]">
                  Multi-Market Coverage
                </h5>
                <p className="text-gray-500 mt-2 text-[14px]">
                  Access global stock indices, ETFs, and commodities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
