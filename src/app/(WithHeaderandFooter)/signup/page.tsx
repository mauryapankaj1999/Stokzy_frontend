"use client";

import Link from "next/link";
import { useState } from "react";
import { showError, showSuccess } from "@/utils/toast";
// import { useRouter } from "next/router";
import { registerUser } from "@/services/authApi";

export default function SignupPage() {
    // const router = useRouter();
const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

 const handleSubmit = async (e:any
) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    showError(
      "Full name is required"
    );
    return;
  }

  if (!formData.email.trim()) {
    showError(
      "Email is required"
    );
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

  if (!formData.phone.trim()) {
    showError(
      "Phone number is required"
    );
    return;
  }

  if (
    formData.phone.length < 10
  ) {
    showError(
      "Please enter a valid phone number"
    );
    return;
  }

  if (!formData.password) {
    showError(
      "Password is required"
    );
    return;
  }

  if (
    formData.password.length < 6
  ) {
    showError(
      "Password must be at least 6 characters"
    );
    return;
  }

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    showError(
      "Passwords do not match"
    );
    return;
  }

  if (!formData.agree) {
    showError(
      "Please accept Terms & Conditions"
    );
    return;
  }

  try {
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.phone,
      password:
        formData.password,
    };

    const response =
      await registerUser(
        payload
      );

    if (response.success) {
      showSuccess(
        response.message ||
          "Account created successfully"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword:
          "",
        agree: false,
      });

      setTimeout(() => {
        window.location.href =
          "/login";
      }, 1000);
    }
  } catch (error: any) {
    showError(
      error?.response?.data
        ?.message ||
        "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mt-5">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join Stokzy and start your trading journey today.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
              />
            </div>

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

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
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
                placeholder="Create password"
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

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    agree: e.target.checked,
                  })
                }
                className="mt-1"
              />

              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  href="/terms-conditions"
                  className="text-[#57a846] font-medium"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#57a846] font-medium"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Button */}
           <button
  type="submit"
  disabled={loading}
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
  {loading
    ? "Creating Account..."
    : "Create Account"}
</button>
          </form>

          {/* Footer */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?
            <Link
              href="/login"
              className="ml-2 text-[#57a846] font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}   