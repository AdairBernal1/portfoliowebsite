import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from '../components/main/StarBackground';
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Web Portfolio made on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'$(inter.className) bg-[#030014] overflow-y-scroll overflow-x-hidden'}>{children}
        <StarCanvas/>
        <Navbar/>
      </body>
    </html>
  );
}
