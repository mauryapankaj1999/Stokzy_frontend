

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden" 
    style={{ backgroundImage: "url('/img/footergraph.png')", 
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center'


     }}
    >

      {/* Graph Background */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/graph_img.png')",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.22,
        }}
      /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Green Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#7ED957]/10 blur-[120px] rounded-full z-0" />

      {/* Content */}
      <div className="section-container py-20 relative z-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo Section */}
          <div>
            <img
              src="/img/stokzylogowhite.webp"
              alt="Stokzy"
              className="h-12 mb-6"
            />

            <p className="text-gray-400 leading-8 max-w-[280px]">
              A modern trading ecosystem focused on clarity,
              discipline and long-term consistency.
            </p>

            <div className="flex gap-5 mt-8">
              <FaXTwitter className="text-2xl cursor-pointer hover:text-[#7ED957] transition" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-[#7ED957] transition" />
              <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[#7ED957] transition" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-[#7ED957] transition" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-xl mb-6 text-white">
              Products
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/Copytrading">
                Copy Trading
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                No-Code Algo Trading
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                Trading Signals
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                Market Analysis
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-xl mb-6 text-white">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/about">
                About Us
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/news">
                Market Insights
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/faq">
                FAQs
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/contact">
                Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-xl mb-6 text-white">
              Legal
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/privacypolicy">
                Privacy Policy
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/terms&conditions">
                Terms & Conditions
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/refund-policy">
                Refund Policy
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/shipping-and-exchange">
               Shipping & Exchange Policy
                </Link>
              </li>

              <li className="hover:text-[#7ED957] cursor-pointer transition">
                <Link href="/disclaimer">
                Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Stokzy. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Trading involves risk. Please trade responsibly.
          </p>

        </div>

      </div>
    </footer>
  );
}