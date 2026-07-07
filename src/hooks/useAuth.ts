import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "@/services/authApi";

export const useRegister =
  () => {
    return useMutation({
      mutationFn:
        registerUser,
    });
  };
  export const useLogin =
  () => {
    return useMutation({
      mutationFn:
        loginUser,
    });
  };