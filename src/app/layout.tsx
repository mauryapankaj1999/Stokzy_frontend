import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import ToastProvider from "@/providers/ToastProvider";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stokzy | Learn Stock Market & Trading Courses",
  description: "Learn stock market trading with expert-led courses at Stokzy. Master Indian stock market, investing, technical analysis, options trading and practical trading strategies.",
 keywords: [
    "Indian stock market course",
    "NSE course",
    "BSE course",
    "stock market mastery",
    "share market course India",
    "trading course India",
    "technical analysis",
    "investment training",
    "stock market learning",
    "Stokzy Trading Academy",
  ],
};


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={plusJakarta.className}>
         <AuthProvider>
         <ReactQueryProvider>
              <ToastProvider />

          {children}
            <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        </ReactQueryProvider>
         </AuthProvider>
      </body>
    </html>
  );
}
