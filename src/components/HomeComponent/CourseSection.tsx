"use client";
import { IMAGE_URL } from "@/config";
import { useCourses } from "@/hooks/useCourses";
import { useRouter } from "next/navigation";

import React from "react";

const courses = [
  {
    id: 1,
    title: "Forex Basics To Advance",
    image: "/img/graphimg/tradeimg2.jpg",
    description:
      "Master forex trading from beginner to advanced level with live market examples and practical strategies.",
    duration: "4 Weeks Course",
    mode: "Live Classes",
    level: "Beginner Friendly",
  },
  {
    id: 2,
    title: "Algo Trading Mastery",
    image: "/img/graphimg/tradeimg3.jpg",
    description:
      "Learn algorithmic trading, automation, backtesting and strategy deployment without coding experience.",
    duration: "8 Weeks Course",
    mode: "Live Classes",
    level: "Beginner To Advance",
  },
  {
    id: 3,
    title: "Options Trading Pro",
    image: "/img/graphimg/tradeimg4.jpg",
    description:
      "Build confidence in options trading with risk management, strategy building and live market execution.",
    duration: "8 Weeks Course",
    mode: "Live Classes",
    level: "Advanced",
  },
];

export default function CourseSection() {
  const { data, isLoading, isFetching } = useCourses();

  const router = useRouter();

  return (
    <section className="relative  lg:py-24 py-16 bg-black overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]" />

      <div className="section-container  mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="lg:text-4xl text-2xl font-bold text-center mb-1 text-white">
            What You Will Learn In Our Program
          </h2>
          <p className="text-gray-400 mt-6 lg:text-lg text-sm">
            Master trading fundamentals, technical analysis, risk management and
            professional execution through our structured learning programs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-8 lg:mt-16 mt-4">
          {data?.data?.slice(0, 4).map((course: any, index: number) => (
            <div
              key={course.id}
              className="group bg-[#111111] border border-white/10 rounded-[30px] overflow-hidden hover:border-[#7ED957]/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`${course.thumbnail}`}
                  alt={course.title}
                  className="w-full lg:h-[170px] h-[120px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="lg:p-4 p-2">
                <h3 className="lg:text-[18px] text-[14px] font-medium text-white lg:line-clamp-1 line-clamp-2">
                  {course.title}
                </h3>

                <div
                  className="text-gray-400 lg:mt-5 mt-2 lx:text-[16px] text-[12px] leading-relaxed lg:my-3 my-1 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: course.description,
                  }}
                />

                <button
                  onClick={() => router.push(`/courses/${course.slug}`)}
                  //  onClick={() => router.push(`/blog/${el.slug}`)}
                  className="w-full mt-4 bg-[#7ED957] lg:text-[15px] text-[12px] text-black py-3 rounded-2xl font-medium hover:bg-white transition-all duration-300"
                >
                  View Course Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
