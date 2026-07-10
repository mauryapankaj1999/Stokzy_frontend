"use client";
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import { IMAGE_URL } from "@/config";
import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
export default function Blog() {
  const { data, isLoading } = useBlogs();
  console.log(process.env.NEXT_PUBLIC_API_URL);
console.log(IMAGE_URL);
const router = useRouter();
  console.log(data, "blogdata");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Headingagebanner pagename="Blogs" />

      <section className="py-24 bg-[#f8fafc]">
        <div className="section-container">
          {/* Blog Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {data?.data?.map((el: any, indx: number) => (
              
              <article key={el.slug} className="group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <Link href={`/blog/${el.slug}`}>
                    <img
                      src={`${IMAGE_URL}${el.image}`}
                      alt={el.title}
                      className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <Link href={`/blog/${el.slug}`}>
                    <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors line-clamp-2">
                      {el.title}
                    </h3>
                  </Link>
                  
            {/* <div className="flex items-center gap-2 text-gray-500 mt-4 text-sm">
              <span>{el.created_at}</span>
              <span>|</span>
              <span>No Comments</span>
            </div> */}

                 <div
                      className="prose max-w-none text-gray-600 mt-5 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: el.description,
                      }}
                    />

                  <button  onClick={() => router.push(`/blog/${el.slug}`)} className="mt-6 text-[#7ED957] font-semibold flex items-center gap-2">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
