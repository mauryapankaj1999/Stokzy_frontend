import api from "./api";

export const createContact = async (
  data: any
) => {
  const res = await api.post(
    "/contact",
    data
  );

  return res.data;
};

export const getContacts =
  async () => {
    const res = await api.get(
      "/contact"
    );

    return res.data;
  };

export const getSingleContact =
  async (id: string) => {
    const res = await api.get(
      `/contact/${id}`
    );

    return res.data;
  };

export const updateContact =
  async (
    id: string,
    data: any
  ) => {
    const res = await api.put(
      `/contact/${id}`,
      data
    );

    return res.data;
  };

export const deleteContact =
  async (id: string) => {
    const res = await api.delete(
      `/contact/${id}`
    );

    return res.data;
  };