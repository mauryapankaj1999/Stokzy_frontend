import api from "./api";

export const getCourses =
  async (
    category = ""
  ) => {
    const res =
      await api.get(
        "/courses",
        {
          params: {
            category,
          },
        }
      );

    return res.data;
  };
  export const getSingleCourse =
  async (slug: string) => {
    const response = await api.get(`/courses/slug/${slug}`);

    return response.data;
  };