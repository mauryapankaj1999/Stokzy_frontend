"use client";

import { IoClose } from "react-icons/io5";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
        >
          <IoClose />
        </button>

        <div className="p-8">

          <div className="text-center mb-8">
            {/* <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-[#57a846] to-[#7ED957] flex items-center justify-center text-white text-2xl font-bold">
              S
            </div> */}

            <h2 className="text-3xl font-bold mt-5">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue your trading journey
            </p>
          </div>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#57a846]"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#57a846] via-[#6BCB5B] to-[#9BE15D]"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Don't have an account?
            <button className="ml-1 text-[#57a846] font-semibold">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}