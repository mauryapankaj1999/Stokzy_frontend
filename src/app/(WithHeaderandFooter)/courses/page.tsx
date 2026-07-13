"use client";
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import CourseCard from "@/components/Course/CourseCard";
import { useCategories } from "@/hooks/useCategories";
import { useCourses } from "@/hooks/useCourses";
import React, { useState } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, isLoading, isFetching } = useCourses(selectedCategory);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const { data: categories } = useCategories();
  console.log(data);
  console.log(selectedCategory);

  if (isLoading) {
    return (
      <div className="section-container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-80 bg-gray-200 animate-pulse rounded-3xl"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Headingagebanner pagename="Our Courses" />
      <div className="my-10 text-center ">
        <h4 className="text-3xl font-bold mb-3">Learn. Build. Master.</h4>
        <p className="text-gray-500 mt-3 text-[16px] max-w-3xl mx-auto mb-4">
          Industry-grade courses designed by professionals. No fluff. Only
          results.
        </p>
      </div>
      {/* 
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div
          onClick={() => {
            setShowSkeleton(true);

            setSelectedCategory("");

            setTimeout(() => {
              setShowSkeleton(false);
            }, 1000);
          }}
          className={`px-5 py-2 rounded-md cursor-pointer ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-white border"
            }`}
        >
          All
        </div>

        {categories?.data?.map((item: any) => (
          <div
            key={item._id}
            onClick={() => {
              setShowSkeleton(true);

              setSelectedCategory(item._id);

              setTimeout(() => {
                setShowSkeleton(false);
              }, 1000);
            }}
            className={`px-5 py-2 rounded-md cursor-pointer ${
              selectedCategory === item._id
                ? "bg-primary text-white"
                : "bg-white border"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      
      */}

      <div className="lg:mb-6 mb-1 overflow-x-auto scrollbar-hide">
        <div className="flex w-max lg:w-full lg:flex-wrap justify-start lg:justify-center gap-3 px-1">
          <div
            onClick={() => {
              setShowSkeleton(true);
              setSelectedCategory("");

              setTimeout(() => {
                setShowSkeleton(false);
              }, 1000);
            }}
            className={`px-5 py-2 rounded-md whitespace-nowrap cursor-pointer ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-white border"
            }`}
          >
            All
          </div>

          {categories?.data?.map((item: any) => (
            <div
              key={item._id}
              onClick={() => {
                setShowSkeleton(true);
                setSelectedCategory(item._id);

                setTimeout(() => {
                  setShowSkeleton(false);
                }, 1000);
              }}
              className={`px-5 py-2 rounded-md whitespace-nowrap cursor-pointer ${
                selectedCategory === item._id
                  ? "bg-primary text-white"
                  : "bg-white border"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-4">
        {isFetching && (
          <p className="text-primary text-sm">Loading courses...</p>
        )}
      </div>
      {showSkeleton ? (
        <div className="section-container py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-80 bg-gray-200 animate-pulse rounded-3xl"
              />
            ))}
          </div>
        </div>
      ) : (
        <CourseCard courses={data?.data} />
      )}
      {/* <CourseCard courses={data?.data} /> */}
    </>
  );
}
