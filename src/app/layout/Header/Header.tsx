"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import logo from "../../../../public/img/stokzylogowhite.webp";
import { FaBars, FaXmark, FaUser } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "News", href: "/news" },
    { name: "Community", href: "/community" },
    { name: "Product", href: "/our-product" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                alt="Stokzy Logo"
                className="w-[110px]"
                priority
              />
            </Link>

            {/* Menu */}
            <ul className="flex items-center">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <Link href="/signup" className="text-white hover:text-primary">
                Sign Up
              </Link>

              {isAuthenticated ? (
                <Link
                  href="http://localhost:5173/"
                  target="_blank"
                  className="nav-btn"
                >
                  Dashboard
                </Link>
              ) : (
                <Link href="/login" className="nav-btn">
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="flex lg:hidden items-center justify-between h-[70px]">
            <Link href="/">
              <Image
                src={logo}
                alt="Stokzy Logo"
                className="w-[90px]"
                priority
              />
            </Link>

            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[998] lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-black z-[999] transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <FaUser className="text-black text-lg" />
            </div>

            <span className="text-white font-medium">
              {isAuthenticated ? "My Account" : "Guest User"}
            </span>
          </div>

          <button onClick={() => setMenuOpen(false)}>
            <FaXmark className="text-white text-3xl" />
          </button>
        </div>

        {/* Navigation */}
        <ul className="py-4">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 border-b border-gray-800 transition ${
                  pathname === item.href
                    ? "text-primary bg-gray-900"
                    : "text-white hover:bg-gray-900"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Buttons */}
        <div className="px-6 mt-5 flex flex-col gap-4">
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="border border-white text-white py-3 rounded-lg text-center hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>

          {isAuthenticated ? (
            <Link
              href="http://localhost:5173/"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-white py-3 rounded-lg text-center"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-white py-3 rounded-lg text-center"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}