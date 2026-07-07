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
    <section className="relative py-24 bg-black overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7ed95747] blur-[150px]" />

      <div className="section-container  mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-1 text-white">
            What You Will Learn
            In Our Program
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Master trading fundamentals, technical analysis,
            risk management and professional execution through
            our structured learning programs.
          </p>
        </div>

      

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {data?.data?.slice(0, 3).map((course: any, index: number) => (
            <div
              key={course.id}
              className="group bg-[#111111] border border-white/10 rounded-[30px] overflow-hidden hover:border-[#7ED957]/40 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`${IMAGE_URL}${course.thumbnail}`}
                  alt={course.title}
                  className="w-full h-[200px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-white line-clamp-2">
                  {course.title}
                </h3>

                {/* <p className="text-gray-400 mt-5 leading-relaxed">
                  {course.description}
                </p> */}
                <div
                      className="text-gray-400 mt-5 leading-relaxed my-3 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: course.description,
                      }}
                    />

               

                {/* Button */}
                <button
                onClick={() => router.push(`/courses/${course.slug}`)}

                //  onClick={() => router.push(`/blog/${el.slug}`)}
                className="w-full mt-8 bg-[#7ED957] text-black py-3 rounded-2xl font-medium hover:bg-white transition-all duration-300">
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