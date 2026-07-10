import { IMAGE_URL } from "@/config";
import Link from "next/link";
import React from "react";
import { FaRupeeSign } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";

export default function CourseCard({ courses }: any) {
  return (
    <>
      <div className="section-container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses?.map((el: any, indx: number) => (
            <div
              key={el?.id}
              className="bg-white coursebox rounded-3xl overflow-hidden border border-gray-100 shadow-lg  transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-40 overflow-hidden">
                <Link href={`/courses/${el.slug}`}>
                  <img
                    src={`${IMAGE_URL}${el.thumbnail}`}
                    alt={el.thumbnail}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </Link>
                {/* <span className="absolute top-4 left-4 bg-[#7ED957] text-white text-sm px-3 py-1 rounded-full">
                    {course.level}
                </span> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-base text-[13px] text-gray-900 mb-1 line-clamp-2">
                  {el?.title}
                </h3>
                <p className="line-clamp-2 text-[14px] text-muted-foreground text-sm my-4 leading-6">
                  {el?.shortDescription}
                </p>

                <div className="flex justify-between">
                  <div className="flex gap-1 items-center text-muted-foreground text-[12px]">
                    <MdOutlineWatchLater /> {el?.duration}
                  </div>
                  <div className="flex gap-1 items-center text-muted-foreground  text-[12px]">
                    <GiRoundStar /> 2 Sections
                  </div>
                </div>
                <div className="flex gap-2 text-gray-500 text-[12px] my-2">
                  <span className="line-through text-[15px]">
                    ₹ {el?.discountPrice}
                  </span>
                  <span className="flex items-center text-black text-[18px]">
                    ₹{el?.price}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/courses/${el.slug}`}
                    className="w-full text-[14px] text-center bg-[#ebebeb] text-black py-2 rounded-xl font-medium hover:opacity-90 transition"
                  >
                    Preview
                  </Link>
                  <Link
                    href={`/courses/${el.slug}`}
                    className="w-full text-[14px] text-center bg-primary text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
