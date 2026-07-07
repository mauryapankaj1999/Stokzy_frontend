import { createOrder,verifyPayment,getMyOrders } from "@/services/orderApi";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

// import {
//   createOrder,
//   verifyPayment,
//   getMyOrders,
// } from "../api/orderApi";

// Create Order
export const useCreateOrder =
  () => {
    return useMutation({
      mutationFn:
        createOrder,
    });
  };

// Verify Payment
export const useVerifyPayment =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        verifyPayment,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "myOrders",
            ],
          }
        );

        queryClient.invalidateQueries(
          {
            queryKey: [
              "myCourses",
            ],
          }
        );
      },
    });
  };

// My Orders
export const useMyOrders =
  () => {
    return useQuery({
      queryKey: [
        "myOrders",
      ],

      queryFn:
        getMyOrders,
    });
  };