"use client";
import { useQuery } from "@tanstack/react-query";
import { getCourses, getSingleCourse } from "@/services/courseApi";

export const useCourses = (
  category = ""
) => {
  return useQuery({
    queryKey: [
      "courses",
      category,
    ],
    queryFn: () =>
      getCourses(category),
  });
};
  export const useSingleCourse = (
  slug?: string
) => {
  return useQuery({
    queryKey: [
      "course",
      slug,
    ],
    queryFn: () =>
      getSingleCourse(slug!),
    enabled: !!slug,
  });
};