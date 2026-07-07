"use client";
import React, { useState } from "react";

export default function Community() {

   const [gainsection, setGainsection] = useState([
  {
    title: "Live Trade Discussions",
    description:
      "Structured breakdowns of setups, risk logic, and execution decisions.",
    icon: "chart",
  },
  {
    title: "Market Review Sessions",
    description:
      "Weekly reviews of indices, options flow, and forex structure.",
    icon: "search",
  },
  {
    title: "Accountability System",
    description:
      "Encourages rule-following and disciplined participation.",
    icon: "shield",
  },
  {
    title: "Prop Firm Preparation",
    description:
      "Evaluation-focused system refinement and risk frameworks.",
    icon: "bank",
  },
]);


  return (
    <>
      <div className="relative py-24 bg-[#f8fafc] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]"></div>

        <div className="section-container">
          <div className="text-center">
            <h3 className="text-primary moving-gradient text-5xl font-bold">
              Where Serious Traders Build <br /> Discipline Together
            </h3>
            <p className="text-[#515151] text-[18px] my-8">
              Real trade discussions. Structured thinking. Live market reviews.
              A focused ecosystem for <br /> traders who value consistency over
              noise.
            </p>
            <button className="bg-primary px-8 py-3 mt-5 text-white rounded-md">
              Apply to Join
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F8FAFC]">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-4xl font-bold  mb-5">Inside the Community</h3>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div className="col-span-1">
              <div className="iamgesectin">
                <img
                  src="/img/community1.webp"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="iamgesectin">
                <img
                  src="/img/community2.webp"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="iamgesectin">
                <img
                  src="/img/community3.webp"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-4xl font-bold  mb-5">What You Gain</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="relative min-h-[310px] overflow-hidden group bg-[#F7F9FB] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#7ED957]/50 transition-all duration-500 hover:-translate-y-3">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-md mb-9 bg-[#EAF0F9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v18h18" />
                      <rect x="7" y="10" width="3" height="7" />
                      <rect x="12" y="6" width="3" height="11" />
                      <rect x="17" y="13" width="3" height="4" />
                    </svg>
                  </div>
                  <h5 className="text-[20px] my-4 font-semibold">
                    Live Trade Discussions
                  </h5>
                  <p className="text-[#515151] text-lg leading-8 mt-8">
                   Structured breakdowns of setups, risk logic, and execution decisions.


                  </p>
                </div>

                {/* SVG Graph */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
                  <svg
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                  >
                    <path
                      className="graph-line"
                      d="M10 100 L50 85 L90 90 L130 45 L170 55 L210 15"
                      fill="none"
                      stroke="#7ED957"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="50" cy="85" r="3" fill="#7ED957" />
                    <circle cx="130" cy="45" r="3" fill="#7ED957" />

                    <circle
                      className="pulse-dot"
                      cx="210"
                      cy="15"
                      r="4"
                      fill="#7ED957"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7ED957]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative min-h-[310px] overflow-hidden group bg-[#F7F9FB] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#7ED957]/50 transition-all duration-500 hover:-translate-y-3">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-md mb-9 bg-[#EAF0F9]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <polyline points="3 17 9 11 13 15 21 7"/>
  <circle cx="10" cy="10" r="2"/>
  <circle cx="17" cy="17" r="4"/>
  <line x1="20" y1="20" x2="22" y2="22"/>
</svg>
                  </div>


                  <h5 className="text-[20px] my-4 font-semibold">
                    Market Review Sessions

                  </h5>
                  <p className="text-[#515151] text-lg leading-8 mt-8">
                  Weekly reviews of indices, options flow, and forex structure.



                  </p>
                </div>

                {/* SVG Graph */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
                  <svg
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                  >
                    <path
                      className="graph-line"
                      d="M10 100 L50 85 L90 90 L130 45 L170 55 L210 15"
                      fill="none"
                      stroke="#7ED957"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="50" cy="85" r="3" fill="#7ED957" />
                    <circle cx="130" cy="45" r="3" fill="#7ED957" />

                    <circle
                      className="pulse-dot"
                      cx="210"
                      cy="15"
                      r="4"
                      fill="#7ED957"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7ED957]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative min-h-[310px] overflow-hidden group bg-[#F7F9FB] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#7ED957]/50 transition-all duration-500 hover:-translate-y-3">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-md mb-9 bg-[#EAF0F9]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
  <path d="M9 12l2 2 4-4"/>
</svg>
                  </div>
                  <h5 className="text-[20px] my-4 font-semibold">
                    Accountability System

                  </h5>
                  <p className="text-[#515151] text-lg leading-8 mt-8">
                 Encourages rule-following and disciplined participation.



                  </p>
                </div>

                {/* SVG Graph */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
                  <svg
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                  >
                    <path
                      className="graph-line"
                      d="M10 100 L50 85 L90 90 L130 45 L170 55 L210 15"
                      fill="none"
                      stroke="#7ED957"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="50" cy="85" r="3" fill="#7ED957" />
                    <circle cx="130" cy="45" r="3" fill="#7ED957" />

                    <circle
                      className="pulse-dot"
                      cx="210"
                      cy="15"
                      r="4"
                      fill="#7ED957"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7ED957]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative min-h-[310px] overflow-hidden group bg-[#F7F9FB] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#7ED957]/50 transition-all duration-500 hover:-translate-y-3">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-md mb-9 bg-[#EAF0F9]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path d="M3 10h18"/>
  <path d="M5 10v7"/>
  <path d="M9 10v7"/>
  <path d="M15 10v7"/>
  <path d="M19 10v7"/>
  <path d="M2 21h20"/>
  <path d="M12 3l10 5H2l10-5z"/>
</svg>
                  </div>
                  <h5 className="text-[20px] my-4 font-semibold">
                   Prop Firm Preparation


                  </h5>
                  <p className="text-[#515151] text-lg leading-8 mt-8">
                Evaluation-focused system refinement and risk frameworks.



                  </p>
                </div>

                {/* SVG Graph */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
                  <svg
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                  >
                    <path
                      className="graph-line"
                      d="M10 100 L50 85 L90 90 L130 45 L170 55 L210 15"
                      fill="none"
                      stroke="#7ED957"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="50" cy="85" r="3" fill="#7ED957" />
                    <circle cx="130" cy="45" r="3" fill="#7ED957" />

                    <circle
                      className="pulse-dot"
                      cx="210"
                      cy="15"
                      r="4"
                      fill="#7ED957"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7ED957]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>


          </div>
        </div>
      </div>






      <section className="py-20 bg-[#F8FAFC]">
  <div className="section-container">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div>
        <div className="rounded-2xl  relative overflow-hidden shadow-2xl">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl"></div>

          <img
            src="/img/community4.webp"
            alt="Trading Community"
            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl font-bold  mb-5">
          Structured Conversations.
          <br />
          Real Market Context.
        </h2>

        <p className="text-[#515151] text-lg leading-8 mt-8">
          Every discussion revolves around logic — not hype. Members
          review trades, question reasoning, and refine systems with
          discipline. This isn't just a chat; it's a digital trading floor
          designed for serious professionals.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-lg text-[#1E293B]">
              Peer-to-peer logic validation
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-lg text-[#1E293B]">
              Real-time risk management critiques
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-lg text-[#1E293B]">
              Historical database of trade case studies
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>










<section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="section-container">
    <div className="max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

        {/* Left */}
        <div className="p-10 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <div className="relative z-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-8">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                ✓
              </div>
              This Community Is For
            </h3>

            <div className="space-y-5">
              {[
                "Traders committed to learning",
                "System-oriented thinkers",
                "Risk-aware participants",
                "Long-term focused individuals",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-green-50 hover:translate-x-2 transition-all duration-300"
                >
                  <span className="min-w-[42px] h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 text-white font-bold text-sm">
                    0{index + 1}
                  </span>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="    "></div> */}

        {/* Right */}
        <div className="p-10 border-t md:border-t-0 md:border-l border-slate-200 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <div className="relative z-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500">
                ✕
              </div>
              This Community Is Not For
            </h3>

            <div className="space-y-5">
              {[
                "Shortcut seekers",
                "Signal-only traders",
                "High-risk gamblers",
                "Impulsive decision-makers",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-50 hover:translate-x-2 transition-all duration-300"
                >
                  <span className="min-w-[42px] h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-rose-400 text-white font-bold">
                    ✕
                  </span>

                  <span className="font-medium text-slate-500">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
    </>

  );
}
