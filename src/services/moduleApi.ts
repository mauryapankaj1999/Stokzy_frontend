import api from "./api";



export const getModulesByCourse = async (
  courseId:any
) => {
  const res =
    await api.get(
      `/modules/course/${courseId}`
    );

  return res.data;
};