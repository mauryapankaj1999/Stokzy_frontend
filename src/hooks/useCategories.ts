import { getCategories } from "@/services/categoryApi";
import { useQuery } from "@tanstack/react-query";
// import { getCategories } from "@/services/categoryApi";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};