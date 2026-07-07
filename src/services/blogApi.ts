import api from "./api";

export const getBlogs =
  async () => {
    const response =
      await api.get("/blogs");

    return response.data;
  };
export const getSingleBlog =
  async (slug: string) => {
    const response =
      await api.get(`/blogs/slug/${slug}` );

    return response.data;
  };