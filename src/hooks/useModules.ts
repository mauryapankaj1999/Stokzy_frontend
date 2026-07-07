import { getModulesByCourse } from "@/services/moduleApi";
import { useQuery } from "@tanstack/react-query";


export const useModules = (courseId:string) => {
  return useQuery({
    queryKey: ["modules", courseId],
    queryFn: () =>
      getModulesByCourse(courseId),
    enabled: !!courseId,
  });
};