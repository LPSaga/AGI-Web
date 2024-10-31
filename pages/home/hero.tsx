"use client";

import React, { useState } from "react";
import Image from "next/image";

import HeroLogo from "@/public/images/home-logo.png";
import HeroBannerBg from "@/public/images/home-banner-bg.png";
import CartIcon01 from "@/public/images/card-dev.png";
import CartIcon02 from "@/public/images/card-users.png";
import CartIcon03 from "@/public/images/card-idle.png";

import Button1 from "@/public/images/button.png";
import Button2 from "@/public/images/button2.png";
import ButtonHover1 from "@/public/images/button1-hover.png";
import ButtonHover2 from "@/public/images/button2-hover.png";

import Icon01 from "@/public/images/card-1.png";
import Icon02 from "@/public/images/card-2.png";
import Icon03 from "@/public/images/card-3.png";
import Icon04 from "@/public/images/card-4.png";
import Icon05 from "@/public/images/card-5.png";
import Icon06 from "@/public/images/card-6.png";
import iconImages from "@/public/images/icons.png";
import AlertBgImage from "@/public/images/alert-bg.png";

export default function Hero() {
  return (
    <div className="relative hero-section max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-10 md:pt-10">
        {/* Hero content */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="h3 font-hkgrotesk mb-6" data-aos="fade-up">
            The First Omni-chain Modular AIDAPP Network
          </h3>
          <p
            className="text-xxl text-gray-400 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            As a consumer-driven network, it empowers creators and developers to
            build AIDAPPs that users can directly engage with. Backed by the 50
            million-strong CSDN developer community, Its unique tokenomics and
            IAO create a positive flywheel, fostering a win-win ecosystem for
            both creators and users.
          </p>

          <ul className="flex grow justify-center flex-wrap items-center md:pt-10">
            <li>
              <BlueButton />
            </li>

            <li>
              <BlackButton />
            </li>
          </ul>

          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src={HeroLogo}
              width={1380}
              height={78}
              alt="Hero"
            />
          </div>

          <div
            className="pt-16 md:pt-40"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3">
                <h3 className="h4 font-hkgrotesk mb-6" data-aos="fade-up">
                  Simple, Clear, Useful For
                </h3>
              </div>
              <div className="w-full md:w-1/5"></div>
              <div className="w-full md:w-3/5">
                <p
                  className="text-xxl text-gray-400 mb-10"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  To build an open and collaborative AI technology ecosystem
                  that fosters the integration and innovation of AI applications
                  worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            {/* Integration boxes */}
            <div className="relative max-w-xs sm:max-w-md mx-auto md:max-w-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 ">
              {/* Top vertical line */}
              <div
                className="relative flex justify-center items-center  aspect-square p-2"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-442 h-396 rounded-full flex justify-center items-center">
                  {/* Icon */}
                  <Image
                    src={CartIcon01}
                    width={442}
                    height={396}
                    alt="Icon 01"
                  />
                </div>
              </div>
              <div
                className="relative flex justify-center items-center aspect-square p-2"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-442 h-396 rounded-full flex justify-center items-center">
                  {/* Icon */}
                  <Image
                    src={CartIcon02}
                    width={442}
                    height={396}
                    alt="Icon 02"
                  />
                </div>
              </div>
              <div
                className="relative flex justify-center items-center  aspect-square p-2"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-442 h-396 rounded-full flex justify-center items-center">
                  {/* Icon */}
                  <Image
                    src={CartIcon03}
                    width={442}
                    height={396}
                    alt="Icon 03"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-xs sm:max-w-md mx-auto md:max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 md:mt-20">
            {/* Top vertical line */}
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon01} width={213} height={261} alt="Icon 01" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon02} width={213} height={261} alt="Icon 02" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon03} width={213} height={261} alt="Icon 03" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon04} width={213} height={261} alt="Icon 04" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon05} width={213} height={261} alt="Icon 05" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-2"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon06} width={213} height={261} alt="Icon 06" />
              </div>
            </div>
          </div>

          <div className="pt-32 md:pt-40 text-left">
            <h3 className="h4 font-hkgrotesk mb-6" data-aos="fade-up">
              AGI Open Network Community
            </h3>
            <div className="w-full md:w-1/2">
              <p
                className="text-xxl text-gray-400 mb-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Learn about AGI Open Network, discuss with the team and other
                members in the community
              </p>
            </div>
          </div>

          <div
            className="pt-10 md:pt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src={iconImages}
              width={1360}
              height={90}
              alt="Hero"
            />

            <div className="max-w-3xl mx-auto text-center pb-20 md:pt-20">
              <div
                style={{
                  position: "absolute",
                }}
              >
                <Image
                  className=""
                  src={AlertBgImage}
                  width={760}
                  height={480}
                  alt="Hero"
                />
              </div>

              <div
                style={{
                  position: "absolute",
                }}
              >
                <h5
                  className="text-xl font-hkgrotesk text-center pb-20 md:pt-20 pl-36"
                  data-aos="fade-up"
                >
                  THE BEST WAY TO QUICKLY BUILD AND SHARE AIDAPP
                </h5>
              </div>

              <ul className="flex grow justify-center flex-wrap items-center pt-32">
                <li>
                  <BlueButton />
                </li>

                <li>
                  <BlackButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BlueButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: "relative", width: "261px", height: "80px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={Button1} alt="normal btn" fill objectFit="cover" />
      {isHovered && (
        <Image src={ButtonHover1} alt="hover btn" fill objectFit="cover" />
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {/* Explore AIDAPP */}
      </div>
    </div>
  );
};

const BlackButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: "relative", width: "261px", height: "80px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={Button2} alt="normal btn" fill objectFit="cover" />
      {isHovered && (
        <Image src={ButtonHover2} alt="hover btn" fill objectFit="cover" />
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {/* Explore AIDAPP */}
      </div>
    </div>
  );
};
