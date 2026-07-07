"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import logo from "../../../../public/img/stokzylogowhite.webp";

export default function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
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
    <header className="bg-black sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-4">
        <div>
          <Image
            src={logo}
            alt="Stokzy Logo"
            className="w-[100px]"
          />
        </div>

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

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/signup">
              Sign Up
            </Link>
          </li>

          <li>
            {isAuthenticated ? (
              <Link
                href="http://localhost:5173/"
                target="_blank"
                className="nav-btn"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="nav-btn"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}