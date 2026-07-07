"use client";

import { useState } from "react";
import Link from "next/link";
import { showError, showSuccess } from "@/utils/toast";
import { useLogin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

const {
  mutateAsync: loginMutation,
  isPending,
} = useLogin();
 const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (!formData.email.trim()) {
    showError("Email is required");
    return;
  }

  if (
    !/\S+@\S+\.\S+/.test(
      formData.email
    )
  ) {
    showError(
      "Please enter a valid email"
    );
    return;
  }

  if (
    !formData.password.trim()
  ) {
    showError(
      "Password is required"
    );
    return;
  }

  if (
    formData.password.length <
    6
  ) {
    showError(
      "Password must be at least 6 characters"
    );
    return;
  }

  try {
    const response =
      await loginMutation({
        email:
          formData.email,
        password:
          formData.password,
      });

    if (response.success) {
      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.user
        )
      );

      localStorage.setItem(
        "role",
        response.user.role
      );

      showSuccess(
        "Login Successful"
      );

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  } catch (error: any) {
    showError(
      error?.response?.data
        ?.message ||
        "Login Failed"
    );
  }
};

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to continue your trading journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-[#57a846] font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
           <button
  type="submit"
  disabled={isPending}
  className="
    w-full py-4 rounded-xl text-white font-semibold
    bg-gradient-to-r
    from-[#57a846]
    via-[#6BCB5B]
    to-[#9BE15D]
    hover:opacity-90
    transition
    disabled:opacity-50
  "
>
  {isPending
    ? "Logging In..."
    : "Login"}
</button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?
            <Link
              href="/signup"
              className="ml-2 text-[#57a846] font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}