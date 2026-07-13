"use client";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useBlogs } from "@/hooks/useBlogs";
import { IMAGE_URL } from "@/config";
import Link from "next/link";
export default function BlogPage() {
   const { data, isLoading } = useBlogs();
 
 console.log(data, "blogdata");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="section-container">



            <h2 className="lg:text-3xl text-2xl font-bold  text-center mb-8">
              Blog  & Updates
            </h2>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {data?.data?.slice(0, 3).map((el, indx) => (
            <div
              key={el.id}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
 <Link href={`/blog/${el.slug}`}>
                <img
                   src={`${IMAGE_URL}${el.image}`}
                   alt={el.title}
                   className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-700"
                   />
                   </Link>

                {/* <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium">
                  {el.category}
                </span> */}
              </div>

              {/* Content */}
              <div className="p-4 lg:p-8">

                <h3 className="text-[18px] font-bold leading-tight text-[#0F172A] line-clamp-2">
                  {el.title}
                </h3>

                {/* <p className="text-[16px] text-gray-600 mt-2 leading-2">
                  {el.description}
                </p> */}


                 <div
                      className="prose max-w-none text-gray-600 text-[13px] my-3 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: el.description,
                      }}
                    />


                <div className="flex items-center justify-between mt-2">

                  <div className="flex text-[13px] items-center gap-2 text-gray-500">
                    <FiCalendar />
                    <span>{new Date(el.createdAt).toLocaleDateString("en-GB")}</span>
                  </div>

                  <button
                   onClick={() => router.push(`/blog/${el.slug}`)}
                   
                   className="text-[13px] flex items-center gap-2 font-medium hover:text-[#7ED957] transition">
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}