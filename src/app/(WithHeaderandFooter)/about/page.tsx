"use client"
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaChartBar,
  FaShieldAlt,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

export default function About() {

const tutors = [
  {
    name: "Varun Singh",
    role: "Prop Firm Performance Strategist",
    image: "/img/varun.webp",
    desc: "Specializes in helping traders pass prop firm challenges with structured risk models and execution management."
  },
  {
    name: "Aniket Jaiswal",
    role: "Forex & Prop Firm Trader",
    image: "/img/aniket.webp",
    desc: "Helps traders successfully clear prop firm evaluations by implementing disciplined risk frameworks."
  },
  {
    name: "Nimish Jain",
    role: "Forex & Funded Account Specialist",
    image: "/img/nimish.webp",
    desc: "Designs rule-based forex systems tailored for prop firm evaluations and capital preservation."
  },
  {
    name: "Shivansh Kush",
    role: "System-Based Forex Trader",
    image: "/img/shivansh.webp",
    desc: "Transforms discretionary trading into structured systems optimized for automation."
  },
  {
    name: "Chinmay Gupta",
    role: "Consistency & Risk Management Mentor",
    image: "/img/chinmay.webp",
    desc: "Focuses on performance discipline and advanced risk control to build long-term consistency."
  },
];
 const values = [
    {
      icon: <FaChartBar />,
      title: "Transparency",
      desc: "We believe in honest communication, real results, and no false promises. What you see is what you get.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Awareness",
      desc: "Trading is about managing risk first. Capital protection always comes before profit targets.",
    },
    {
      icon: <FaBullseye />,
      title: "Long-Term Thinking",
      desc: "We focus on sustainable growth, not short-term hype. Consistency beats quick wins.",
    },
    {
      icon: <FaHandshake />,
      title: "Trader Responsibility",
      desc: "We empower traders to take ownership of their decisions, discipline, and performance.",
    },
  ];
  return (
    <>
      <Headingagebanner  pagename="About Stokzy" />
      <div className="relative py-24 bg-[#f8fafc] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
        <div className="section-container relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-1">
              Built for Traders Who Think Long Term
            </h2>
            <p className="text-gray-500 mt-3 text-[16px] max-w-3xl mx-auto">
              Stokzy is a trading technology and education platform designed for
              serious market participants. We focus on helping traders build
              structure, discipline, and repeatable systems — instead of relying
              on shortcuts, predictions, or constant activity.
            </p>
            <p className="text-gray-500 mt-3 text-[16px] max-w-3xl mx-auto">
              Our approach combines market understanding, risk management, and
              execution frameworks that adapt across equities, options, forex,
              and prop firm environments.
            </p>
          </div>
        </div>
        <div className="section-container mt-20">
          <div className="relative">
            <div className="hidden lg:block top-[50%] absolute  left-[18%] right-[18%] h-[3px] bg-gradient-to-r from-[#7ED957] via-[#A8E88C] to-[#7ED957]"></div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="relative bg-white rounded-[30px] p-8 shadow-xl border border-[#E8F5E1] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 right-6 text-6xl font-black text-[#7ED957]/10">
                  01
                </div>

                <div className="w-20 h-20 rounded-full bg-[#7ED957] text-white flex items-center justify-center text-2xl font-bold mb-8 shadow-lg">
                  01
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Learn Market Structure
                </h3>

                <p className="text-gray-600 leading-8">
                  Understand how markets move, why trends form, and how
                  professional traders analyze price action before making
                  decisions.
                </p>
              </div>

              <div className="relative bg-white rounded-[30px] p-8 shadow-xl border border-[#E8F5E1] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 right-6 text-6xl font-black text-[#7ED957]/10">
                  02
                </div>

                <div className="w-20 h-20 rounded-full bg-[#7ED957] text-white flex items-center justify-center text-2xl font-bold mb-8 shadow-lg">
                  02
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Build A Trading System
                </h3>

                <p className="text-gray-600 leading-8">
                  Create clear rules, risk management frameworks, and repeatable
                  processes that remove emotional decision-making.
                </p>
              </div>

              <div className="relative bg-white rounded-[30px] p-8 shadow-xl border border-[#E8F5E1] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 right-6 text-6xl font-black text-[#7ED957]/10">
                  03
                </div>

                <div className="w-20 h-20 rounded-full bg-[#7ED957] text-white flex items-center justify-center text-2xl font-bold mb-8 shadow-lg">
                  03
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Execute With Discipline
                </h3>

                <p className="text-gray-600 leading-8">
                  Follow your strategy consistently, manage risk effectively,
                  and focus on long-term performance instead of short-term
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="relative py-24 bg-black overflow-hidden">
  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/10 blur-[150px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/10 blur-[150px]" />

  <div className="section-container relative z-10">

    {/* Heading */}
    <div className=" text-center">

      <h2 className="text-3xl font-bold  text-white mb-1">
        Our Mission & Vision
      </h2>

      <p className="text-gray-400 text-lg leading-8">
        Stokzy is built with a long-term perspective — focused on creating
        disciplined traders and sustainable trading practices.
      </p>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-8 mt-16">

      {/* Mission */}
      <div className="group relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 hover:border-[#7ED957]/50 transition-all duration-500">

        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7ED957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">
          <span className="text-[#7ED957] text-sm uppercase tracking-[3px]">
            Our Mission
          </span>

          <h3 className="text-white text-3xl font-bold mt-5 mb-6">
            Bring Structure and Discipline to Trading
          </h3>

          <p className="text-gray-400 leading-9 text-lg">
            Our mission is to help traders move away from randomness,
            emotional decision-making, and shortcut-driven behavior. We focus
            on teaching structured thinking, risk awareness, and rule-based
            execution across markets.
          </p>

          <p className="text-gray-400 leading-9 text-lg mt-6">
            Every product, system, and educational program at Stokzy is built
            to reinforce consistency, accountability, and long-term survival
            in the markets.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="group relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 hover:border-[#7ED957]/50 transition-all duration-500">

        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7ED957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">
          <span className="text-[#7ED957] text-sm uppercase tracking-[3px]">
            Our Vision
          </span>

          <h3 className="text-white text-3xl font-bold mt-5 mb-6">
            Build a Professional Trading Ecosystem
          </h3>

          <p className="text-gray-400 leading-9 text-lg">
            Our vision is to create a comprehensive ecosystem where traders
            can learn, build, test, and execute systems with clarity and
            confidence regardless of market conditions.
          </p>

          <p className="text-gray-400 leading-9 text-lg mt-6">
            We aim to raise the standard of retail trading by promoting
            professional frameworks, responsible risk-taking, and a mindset
            focused on longevity rather than short-term outcomes.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="relative py-24 bg-[#f8fafc] overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

  <div className="section-container relative z-10">

    {/* Heading */}
    <div className="text-center">
      
      <h2 className="text-3xl font-bold mb-1">
        Founders & Directors
      </h2>

      <p className="text-gray-600 text-lg leading-8">
        Stokzy is led by its founders with a long-term focus on discipline,
        structure, and responsible participation in financial markets.
      </p>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-8 mt-16">

      {/* Founder */}
      <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="flex justify-center">
          <img
            src="/img/ashishweb.webp"
            alt="Founder"
            className="w-52 h-52 rounded-full object-cover border-4 border-[#7ED957]/20"
          />
        </div>

        <div className="text-center mt-4">
          <h3 className="text-3xl font-bold text-gray-900">
            Ashish Aggarwal
          </h3>

          <p className="text-[#7ED957] font-medium mt-2">
            Founder & Director
          </p>
        </div>

        <p className="text-gray-600 leading-7 text-lg mt-8">
          Ashish Aggarwal founded Stokzy with the vision of building a
          professional trading ecosystem focused on structure, discipline,
          and long-term consistency.
        </p>

        <p className="text-gray-600 leading-7 text-lg mt-4">
          He leads product direction, system design, and educational
          philosophy across the platform.
        </p>
      </div>

      {/* Co-Founder */}
      <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="flex justify-center">
          <img
            src="/img/nitin.webp"
            alt="Co Founder"
            className="w-52 h-52 rounded-full object-cover border-4 border-[#7ED957]/20"
          />
        </div>

        <div className="text-center mt-4">
          <h3 className="text-3xl font-bold text-gray-900">
            Nitin Nand Joshi
          </h3>

          <p className="text-[#7ED957] font-medium mt-2">
            Co-Founder & Director
          </p>
        </div>

        <p className="text-gray-600 leading-7 text-lg mt-8">
          Nitin Nand Joshi co-founded Stokzy with a strong focus on
          strategy, operations, and execution.
        </p>

        <p className="text-gray-600 leading-7 text-lg mt-4">
          He plays a key role in shaping the company's roadmap,
          governance, and long-term business foundations.
        </p>
      </div>

    </div>
  </div>
</section>
  <section className="relative py-12 bg-[#f8fafc] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

      <div className="section-container relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-1 mt-5">
            Our Tutors
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Learn from experienced traders and educators focused on
            structured thinking, risk awareness, and disciplined execution.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, ]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {tutors.map((item, index) => (
            <SwiperSlide key={index} className="mb-10">
              <div className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full">

                <div className="flex justify-center">
                    <div className="relative h-48 w-48 mb-6 overflow-hidden rounded-full bg-zinc-800">

                  <Image
                    src={item.image}
                    alt={item.name}
                       fill
      className="object-cover"
                    // width={180}
                    // height={10}
                    // fill
                    // className="rounded-full border-4 border-[#7ED957]/20  w-[180px] h-[180px] object-cover"
                    />
                    </div>
                </div>

                <div className="text-center mt-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-[#7ED957] font-medium mt-2">
                    {item.role}
                  </p>
                </div>

                <p className="text-gray-600 text-center leading-6 mt-6">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
 
    <section className="relative py-12 bg-[#f8fafc] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-1">
            What We Stand For
          </h2>

          <p className="max-w-3xl mx-auto mt-1 text-gray-600 leading-8">
            Our foundation is built on discipline, integrity, and long-term
            performance — not shortcuts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-7 border border-gray-100 shadow-lg hover:-translate-y-2 hover:border-[#7ED957]/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7ED957]/10 flex items-center justify-center text-[#7ED957] text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  




<section className="relative py-24 bg-[#0B0B0B] overflow-hidden">
  {/* Glow Effect */}
  <div className="absolute left-0 top-0 w-96 h-96 bg-[#7ED957]/10 blur-[180px]" />
  <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#7ED957]/10 blur-[180px]" />

  <div className="section-container relative z-10">

    <div className="max-w-5xl mx-auto">

      <div className="bg-gradient-to-br from-[#111111] to-[#181818] border border-white/10 rounded-[32px] p-10 md:p-16 text-center">
{/* 
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#7ED957]/10 text-[#7ED957] text-sm font-medium mb-6">
          RESPONSIBILITY FIRST
        </span> */}

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Responsibility & Transparency
        </h2>

        <p className="text-gray-400 text-lg leading-9 max-w-4xl mx-auto">
          Stokzy provides education, tools, and trading frameworks only.
          We do not provide investment advice, guarantees, portfolio
          management, or brokerage services.
        </p>

        <div className="w-24 h-[2px] bg-[#7ED957] mx-auto my-8"></div>

        <p className="text-gray-500 leading-8 max-w-3xl mx-auto">
          Trading involves substantial risk. Outcomes depend on individual
          decisions, market conditions, risk management, and execution.
          Past performance should never be considered a guarantee of future
          results.
        </p>

      </div>

    </div>

  </div>
</section>

    </>
  );
}
