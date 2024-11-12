import { Head } from "./head";

import { Navbar } from "@/components/navbar";

import HeroBannerBg from "@/public/images/home-banner-bg.png";
import Image from "next/image";
import BottomBgImage from "@/public/images/bottom-bg.png";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hkgrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HKGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/HKGrotesk-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/HKGrotesk-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-hkgrotesk",
  display: "swap",
});

export const metadata = {
  title: "AGI Open Network",
  description: "",
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBottomBg, setShowBottomBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const threshold = documentHeight - windowHeight - 1022 / 2;
      console.log("scrollPosition", scrollPosition);

      if (scrollPosition >= threshold) {
        console.log("documentHeight", documentHeight);
        console.log("setShowBottomBg", true);
        setShowBottomBg(true);
      } else {
        setShowBottomBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${inter.variable} ${hkgrotesk.variable} font-inter antialiased text-slate-200 tracking-tight`}
    >
      <Image
        className="mx-auto"
        src={HeroBannerBg}
        alt="Hero"
        style={{
          position: "absolute",
          objectFit: "cover", // 控制图片填充方式
        }}
      />

      <Head />
      <Navbar />

      {/* 添加底部背景图像 */}
      {showBottomBg && (
        <div className="fixed bottom-0 z-0 w-full h-[1022px]">
          <Image
            src={BottomBgImage}
            alt="BottomBgImage"
            fill // 使用 fill 属性来使图片完全填充容器
            style={{ objectFit: "cover" }} // 控制图片填充方式
          />
        </div>
      )}

      <main className="container mx-auto max-w-[1360] flex-grow pt-16">
        {children}
      </main>
    </div>
  );
}
