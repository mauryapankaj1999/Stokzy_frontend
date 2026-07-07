"use client";
import { IMAGE_URL } from "@/config";
import { useSingleBlog } from "@/hooks/useBlogs";
import {  useParams } from "next/navigation";

export default function BlogDetails() {
  const { slug } = useParams();
  const { data, isLoading } = useSingleBlog(Array.isArray(slug) ? slug[0] : slug);
  const blog = data?.data;

 if (isLoading) return <p>Loading...</p>;

if (!blog) {
   return <p>Blog not found</p>;
}

  return (
    <section className="py-10">
      <div className="section-container max-w-4xl">
        <img
          src={`${IMAGE_URL}${blog.image}`}
   alt={blog.title}
          className="w-full rounded-2xl h-[80vh] object-cover mb-5"
        />

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.description,
          }}
        />
      </div>
    </section>
  );
}
