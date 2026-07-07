import api from "./api";


export interface Order {
    courseId: string
}


// Create Order
export const createOrder = async ( courseId) => {
  const res = await api.post(
    "/orders/create",
    {
      courseId,
    }
  );

  return res.data;
};

// Verify Payment
export const verifyPayment = async (
  data
) => {
  const res = await api.post(
    "/orders/verify",
    data
  );

  return res.data;
};

// My Orders
export const getMyOrders =
  async () => {
    const res =
      await api.get(
        "/orders/my-orders"
      );

    return res.data;
  };