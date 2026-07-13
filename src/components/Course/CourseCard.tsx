import { IMAGE_URL } from "@/config";
import Link from "next/link";
import React from "react";
import { FaRupeeSign } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";

export default function CourseCard({ courses }: any) {
  return (
    <>
      <div className="section-container lg:py-10 py-4"> 
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 gap-2">
          {courses?.map((el: any, indx: number) => (
            <div
              key={el?.id}
              className="bg-white  mb-2 coursebox rounded-3xl overflow-hidden border border-gray-100 shadow-lg  transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <Link href={`/courses/${el.slug}`}>
                  <img
                    src={`${IMAGE_URL}${el.thumbnail}`}
                    alt={el.thumbnail}
                    className="w-full lg:h-[170px] h-[120px] object-cover transition duration-700 group-hover:scale-110"
                  />
                </Link>
               
              </div>

              {/* Content */}
              <div className="lg:p-6 p-2">
                <h3 className="font-semibold text-base lg:text-[13px] text-[11  px] text-gray-900 mb-1 line-clamp-2">
                  {el?.title}
                </h3>
                <p className="line-clamp-2 lg:text-[14px] text-muted-foreground text-[12px] lg:my-4 my-2 ">
                  {el?.shortDescription}
                </p>

                <div className="flex justify-between">
                  <div className="flex gap-1 items-center text-muted-foreground text-[9px]">
                    <MdOutlineWatchLater /> {el?.duration}
                  </div>
                  <div className="flex gap-1 items-center text-muted-foreground  text-[10px]">
                    <GiRoundStar /> 2 Sections
                  </div>
                </div>
                <div className="flex gap-2 text-gray-500 text-[12px] my-2">
                  <span className="line-through lg:text-[15px] text-[13px]">
                    ₹ {el?.discountPrice}
                  </span>
                  <span className="flex items-center text-black lg:text-[18px] text-[15px] font-semibold">
                    ₹{el?.price}
                  </span>
                </div>
                {/* <div className="flex gap-3"> */}
                <div className="flex flex-col sm:flex-row gap-3">

                  <Link
                    href={`/courses/${el.slug}`}
                    className="w-full lg:text-[14px] text-[11px] text-center bg-[#ebebeb] text-black py-2 rounded-xl font-medium hover:opacity-90 transition"
                  >
                    Buy Now
                  </Link>
                  <Link
                    href={`/courses/${el.slug}`}
                    className="w-full lg:block hidden text-[14px] text-center bg-primary text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
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
