import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Fitness | A new level of fitness",
  description: "Welcome to a new level of fitness.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
