import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "./components/topbar.component";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGK POE Tools",
  description: "The best damn tools in the west",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="./client/media/LTL_Logo.png"/>

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
