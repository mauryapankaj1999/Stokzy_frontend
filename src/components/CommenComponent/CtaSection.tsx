"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function TradingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#f8fff4] via-white to-[#ecfdf5]">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[150px]" />

        {/* Decorative Circle */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#7ED957]/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#7ED957]/10 rounded-full blur-xl" />

        <div className="section-container relative z-10">

          <div className="max-w-5xl mx-auto text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-[#7ED957]/10 text-[#4CAF50] font-semibold mb-6">
              🚀 Stokzy Trading Ecosystem
            </span>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-[#111827]">
              Build Your Trading System
              <br />
              <span className="text-[#4CAF50]">
                The Right Way
              </span>
            </h2>

            <p className="text-gray-600 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
              If you believe trading is about discipline, structure and consistency —
              not shortcuts or hype — Stokzy is built for you.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-[#4CAF50]">
                  45,000+
                </h3>
                <p className="text-gray-500">
                  Traders Trained
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#4CAF50]">
                  24+
                </h3>
                <p className="text-gray-500">
                  Cities Covered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#4CAF50]">
                  3000+
                </h3>
                <p className="text-gray-500">
                  Active Community
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-12">

              <button
                onClick={() => setOpen(true)}
                className="px-10 py-5 rounded-full bg-[#4CAF50] text-white text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-[#7ED957]/30"
              >
                Start Your Journey →
              </button>

            </div>

            <p className="text-gray-500 mt-10 text-lg">
              Designed for serious traders across equity, options,
              forex and prop firm environments.
            </p>

          </div>
        </div>
      </section>

      {/* Modal Form */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5"
            >
              <FaTimes />
            </button>

            <h3 className="text-3xl font-bold mb-2">
              Get Started
            </h3>

            <p className="text-gray-500 mb-6">
              Fill in your details and our team will contact you.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white py-3 rounded-xl font-semibold"
              >
                Submit
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}