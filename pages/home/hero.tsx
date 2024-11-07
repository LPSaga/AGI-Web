"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { CSSProperties } from "react";

import HeroLogo from "@/public/images/home-logo.png";
import CartIcon01 from "@/public/images/card-dev.png";
import CartIcon02 from "@/public/images/card-users.png";
import CartIcon03 from "@/public/images/card-idle.png";

import Button1 from "@/public/images/button.png";
import Button2 from "@/public/images/button2.png";
import ButtonHover1 from "@/public/images/button-hover.png";
import ButtonHover2 from "@/public/images/button2-hover.png";

import Icon01 from "@/public/images/card-1.png";
import Icon02 from "@/public/images/card-2.png";
import Icon03 from "@/public/images/card-3.png";
import Icon04 from "@/public/images/card-4.png";
import Icon05 from "@/public/images/card-5.png";
import Icon06 from "@/public/images/card-6.png";
import iconImages from "@/public/images/icons.png";
import AlertBgImage from "@/public/images/alert-bg.png";
import FooterImg from "@/public/images/footer.png";
import BottomBgImage from "@/public/images/bottom-bg.png";

export default function Hero() {
  return (
    <div className="relative hero-section max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-10 md:pt-10">
        {/* Hero content */}
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="h3 font-hkgrotesk mb-6"
            data-aos="fade-up"
            style={{
              background: "-webkit-linear-gradient(left, #4C45D8, #9DE9FA)",
              // @ts-ignore
              "-webkit-background-clip": "text",
              // @ts-ignore
              "-webkit-text-fill-color": "transparent",
            }}
          >
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
            <li className="ml-10">
              <BlueButton buttonText={"Explore AIDAPP"} />
            </li>

            <li className="ml-10">
              <BlackButton buttonText={"Build AIDAPP"} />
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
            className="pt-32 md:pt-40"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3">
                <h3
                  className="h4 font-hkgrotesk mb-6 text-left"
                  data-aos="fade-up"
                >
                  Simple, Clear, Useful For
                </h3>
              </div>
              <div className="w-full md:w-1/5"></div>
              <div className="w-full md:w-3/5">
                <p
                  className="text-xxl text-gray-400 mb-10 text-right"
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
                className="relative flex justify-center items-center  aspect-square"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="rounded-full flex justify-center items-center">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-[270px] max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-l h-[40px]">
                        Developers
                      </h4>
                      <p className="text-xs text-gray-400 text-left pt-5 pb-5">
                        Developers build and maintain ecosystem apps, profiting
                        from sales, subscriptions, and earning rewards through
                        token incentives and participation income.
                      </p>
                    </CardHeader>
                    <Image
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={CartIcon01}
                    />
                    <CardFooter className="absolute bottom-0 z-10 justify-between">
                      <LearnButton
                        buttonText={"Learn More"}
                        buttonStyle={{ width: "149px", height: "50px" }}
                        fontSize={"10px"}
                      />
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div
                className="relative flex justify-center items-center  aspect-square"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="rounded-full flex justify-center items-center">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-[270px] max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-l h-[40px]">
                        Users
                      </h4>
                      <p className="text-xs text-gray-400 text-left pt-5 pb-5">
                        Users can earn tokens by participating in activities,
                        enriching the ecosystem, and use them to access AI
                        applications for free or at reduced costs.
                      </p>
                    </CardHeader>
                    <Image
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={CartIcon02}
                    />
                    <CardFooter className="absolute bottom-0 z-10 justify-between">
                      <LearnButton
                        buttonText={"Learn More"}
                        buttonStyle={{ width: "149px", height: "50px" }}
                        fontSize={"10px"}
                      />
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div
                className="relative flex justify-center items-center  aspect-square"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="rounded-full flex justify-center items-center">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-[270px] max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-l h-[40px]">
                        Idle computing power providers
                      </h4>
                      <p className="text-xs text-gray-400 text-left pt-5 pb-5">
                        Individuals or institutions provide computing power and
                        data for large model training, earning tokens based on
                        service time, quality, and data usage, incentivizing
                        continuous support and maximizing data value.
                      </p>
                    </CardHeader>
                    <Image
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={CartIcon03}
                    />
                    <CardFooter className="absolute bottom-0 z-10 justify-between">
                      <LearnButton
                        buttonText={"Learn More"}
                        buttonStyle={{ width: "149px", height: "50px" }}
                        fontSize={"10px"}
                      />
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-xs sm:max-w-md mx-auto md:max-w-6xl grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 mt-32">
            {/* Top vertical line */}
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon01} width={213} height={261} alt="Icon 01" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon02} width={213} height={261} alt="Icon 02" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon03} width={213} height={261} alt="Icon 03" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon04} width={213} height={261} alt="Icon 04" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
              data-aos="fade-up"
            >
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon05} width={213} height={261} alt="Icon 05" />
              </div>
            </div>
            <div
              className="relative flex justify-center items-center  aspect-square p-1"
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
            {/* <div className="absolutebottom-0 z-0 w-full h-[1022px]">
              <Image
                src={BottomBgImage}
                alt="BottomBgImage"
                // fill // 使用 fill 属性来使图片完全填充容器
                style={{ objectFit: "cover" }} // 控制图片填充方式
              />
            </div> */}

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

              <div className="max-w-3xl mx-auto text-center pb-32 md:pt-40">
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
                    className="text-xl font-hkgrotesk text-center pb-10 md:pt-16 pl-36"
                    data-aos="fade-up"
                    style={{
                      background:
                        "-webkit-linear-gradient(left, #4C45D8, #9DE9FA)",
                      // @ts-ignore
                      "-webkit-background-clip": "text",
                      // @ts-ignore
                      "-webkit-text-fill-color": "transparent",
                    }}
                  >
                    THE BEST WAY TO QUICKLY BUILD AND SHARE AIDAPP
                  </h5>
                </div>

                <ul className="flex grow justify-center flex-wrap items-center pt-32">
                  <li className="ml-10">
                    <BlueButton buttonText={"Explore AIDAPP"} />
                  </li>

                  <li className="ml-10">
                    <BlackButton buttonText={"Build AIDAPP"} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 h-[104px] w-[1100]">
          <Image
            className="z-10 w-full h-full object-cover"
            src={FooterImg}
            alt="FooterImg"
          />
        </div>
      </div>
    </div>
  );
}

interface BlueButtonProps {
  buttonText?: string;
  buttonStyle?: any;
  fontSize?: string; // or number, depending on your needs
}

const BlueButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultButtonStyle = {
    position: "relative",
    width: "261px",
    height: "80px",
  };

  const buttonStyleToUse = buttonStyle
    ? { ...defaultButtonStyle, ...buttonStyle }
    : defaultButtonStyle;
  const defaultFontSize = "14px";
  const fontSizeToUse = fontSize || defaultFontSize;

  return (
    <div
      style={buttonStyleToUse}
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
          fontSize: fontSizeToUse,
          fontWeight: "bold",
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

const BlackButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultButtonStyle = {
    position: "relative",
    width: "261px",
    height: "80px",
  };

  const buttonStyleToUse = buttonStyle
    ? { ...defaultButtonStyle, ...buttonStyle }
    : defaultButtonStyle;
  const defaultFontSize = "14px";
  const fontSizeToUse = fontSize || defaultFontSize;
  return (
    <div
      style={buttonStyleToUse}
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
          fontSize: fontSizeToUse,
          fontWeight: "bold",
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

const LearnButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultButtonStyle = {
    position: "relative",
    width: "149px",
    height: "50px",
  };

  const buttonStyleToUse = buttonStyle
    ? { ...defaultButtonStyle, ...buttonStyle }
    : defaultButtonStyle;
  const defaultFontSize = "10px";
  const fontSizeToUse = fontSize || defaultFontSize;
  return (
    <div
      style={buttonStyleToUse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={Button2} alt="normal btn" fill objectFit="fill" />
      {isHovered && (
        <Image src={ButtonHover2} alt="hover btn" fill objectFit="fill" />
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: fontSizeToUse,
          fontWeight: "bold",
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};
