"use client"
import React from "react";
import {
  AiFillThunderbolt,
  AiOutlineSafety,
  AiOutlineLineChart,
  AiOutlineRobot,
} from "react-icons/ai";
export default function WhyStokzy(){
    const features = [
  {
    icon: <AiFillThunderbolt />,
    title: "Diversification",
    description:
      "Access a wide range of asset classes and trading strategies to diversify your portfolio.",
  },
  {
    icon: <AiOutlineSafety />,
    title: "Risk Management",
    description:
      "Protect your investments with advanced risk management tools and real-time monitoring.",
  },
  {
    icon: <AiOutlineLineChart />,
    title: "Market Insights",
    description:
      "Stay ahead with comprehensive market analysis and expert commentary.",
  },
  {
    icon: <AiOutlineRobot />,
    title: "Automated Trading",
    description:
      "Maximize efficiency with intelligent automated trading solutions.",
  },
];

    return(
        <>
  <section className="py-20 bg-[#f8fafc]">
      <div className="section-container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
         

          <h2 className="text-4xl font-bold text-center mb-1 ">
            Smart Trading Starts Here
          </h2>

          <p className="text-gray-600 mt-4">
            We provide powerful tools, market intelligence and
            automation to help traders make smarter decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7ED957] to-[#4CAF50] text-white flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Line */}
              <div className="h-[3px] w-0 bg-[#7ED957] mt-6 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}

        </div>
      </div>
    </section>       
        </>
    )
}