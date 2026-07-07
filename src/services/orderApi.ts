import api from "./api";


export interface Order {
    courseId: any;
}


// Create Order
export const createOrder = async ( courseId:any) => {
  const res = await api.post(
    "/orders/create",
    {
      courseId,
    }
  );

  return res.data;
};

// Verify Payment
export const verifyPayment = async (data:any
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