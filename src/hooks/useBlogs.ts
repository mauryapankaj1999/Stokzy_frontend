"use client";
import { useQuery } from "@tanstack/react-query";
import { getBlogs, getSingleBlog } from "@/services/blogApi";

export const useBlogs =
  () => {
    return useQuery({
      queryKey: ["blogs"],
      queryFn: getBlogs,
    });
  };
  export const useSingleBlog = (slug: string) => {
  return useQuery({
    queryKey: [
      "blog",
      slug,
    ],
    queryFn: () =>
      getSingleBlog(slug),
    enabled: !!slug,
  });
};