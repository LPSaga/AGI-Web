"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

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
import AlertBgImage from "@/public/images/alert-bg.png";
import FooterImg from "@/public/images/footer.png";
import TelegramImg from "@/public/images/Telegram.png";
import TwitterImg from "@/public/images/Twitter.png";
import MediumImg from "@/public/images/Medium.png";
import DiscordImg from "@/public/images/Discord.png";
import Logo from "@/public/images/logo-white.png";
import GithubIcon from "@/public/images/GithubIcon.png";
import TwitterIcon from "@/public/images/TwitterIcon.png";
import MediumIcon from "@/public/images/MediumIcon.png";
import DiscordIcon from "@/public/images/DiscordIcon.png";

export default function Hero() {
  const AIAPI = "https://develop.agiopen.network/model-market";
  const AIDAPP = "https://builder.agiopen.network/";
  const telegram = "https://t.me/aon_aonet";
  const twitter = "https://x.com/aon_aonet";
  const medium = "https://medium.com/@aon_aonet";
  const discord = "https://discord.gg/7XvYyGAS";
  const github = "https://github.com/aonnet/";
  const docs = "https://docs.agiopen.network/";
  return (
    <div className="relative hero-section mx-auto">
      <div className="">
        {/* Hero content */}
        <div className="mx-auto text-center">
          <h3
            className="h3 font-hkgrotesk mb-10 mt-16"
            data-aos="fade-up"
            style={{
              background: "-webkit-linear-gradient(left, #4C45D8, #9DE9FA)",
              // @ts-ignore
              "-webkit-background-clip": "text",
              // @ts-ignore
              "-webkit-text-fill-color": "transparent",
            }}
          >
            AGI Open Network（AON）：The First Omni-chain Modular AIDAPP
            Platform
          </h3>
          <p
            className="text-xxl text-gray-400 pb-[100px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            As a consumer-driven network, it empowers creators and developers to
            build AIDAPPs that users can directly engage with. Backed by the 50
            million developer community, Its unique tokenomics and IAO create a
            positive flywheel, fostering a win-win ecosystem for both creators
            and users.
          </p>

          <ul className="flex grow justify-center flex-wrap items-center">
            <li className="mr-10">
              <BlueButton
                buttonText={"Run AI API"}
                handleOnClick={() => window.open(AIAPI)}
              />
            </li>

            <li className="">
              <BlackButton
                buttonText={"Build AIDAPP"}
                handleOnClick={() => window.open(AIDAPP)}
              />
            </li>
          </ul>

          <div
            className="pt-[160px] md:pt-20"
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
              <div className="w-full md:w-1/5">
                <h4
                  className="h4 font-hkgrotesk mb-6 text-left"
                  data-aos="fade-up"
                >
                  Simple, Clear, Useful For
                </h4>
              </div>
              <div className="w-full md:w-2/5"></div>
              <div className="w-full md:w-2/5">
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

          <div className="max-auto">
            {/* Integration boxes */}
            <div className="relative mx-auto grid md:grid-cols-3 gap-3 ">
              {/* Top vertical line */}
              <div
                className="relative flex justify-center items-center  aspect-square"
                data-aos="fade-up"
              >
                {/* Circle */}
                <div className="rounded-full flex justify-center items-center">
                  <Card
                    isFooterBlurred={false}
                    radius="lg"
                    className="border-none max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-xl h-[40px]">
                        Developers
                      </h4>
                      <p className="text-l text-gray-400 text-left pt-5 pb-5">
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
                      <LearnButton buttonText={"Learn More"} />
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
                    isFooterBlurred={false}
                    radius="lg"
                    className="border-none max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-xl h-[40px]">
                        Users
                      </h4>
                      <p className="text-l text-gray-400 text-left pt-5 pb-5">
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
                      <LearnButton buttonText={"Learn More"} />
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
                    isFooterBlurred={false}
                    radius="lg"
                    className="border-none max-w-[442px]"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-center">
                      <h4 className="text-white font-medium text-xl h-[40px]">
                        Idle computing power providers
                      </h4>
                      <p className="text-l text-gray-400 text-left pt-5 pb-5">
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
                      <LearnButton buttonText={"Learn More"} />
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 mt-32">
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

            <h4 className="h4 font-hkgrotesk mb-6" data-aos="fade-up">
              AGI Open Network Community
            </h4>
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
              {/* <Image
                className="mx-auto"
                src={iconImages}
                width={1360}
                height={90}
                alt="Hero"
              /> */}

              <div className="relative mx-auto grid grid-cols-4">
                {/* Top vertical line */}
                <div className="relative " data-aos="fade-up">
                  {/* Circle */}
                  <div className="flex justify-left items-center">
                    {/* Icon */}
                    <Link rel="stylesheet" href={twitter} target="_blank">
                      <Image
                        src={TwitterImg}
                        width={221}
                        height={90}
                        alt="Icon 01"
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative" data-aos="fade-up">
                  {/* Circle */}
                  <div className="flex justify-left items-center">
                    {/* Icon */}
                    <Link rel="stylesheet" href={discord} target="_blank">
                      <Image
                        src={DiscordImg}
                        width={221}
                        height={90}
                        alt="Icon 02"
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative" data-aos="fade-up">
                  {/* Circle */}
                  <div className="flex justify-left items-center">
                    {/* Icon */}
                    <Link rel="stylesheet" href={medium} target="_blank">
                      <Image
                        src={MediumImg}
                        width={221}
                        height={90}
                        alt="Icon 03"
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative" data-aos="fade-up">
                  {/* Circle */}
                  <div className="flex justify-left items-center">
                    {/* Icon */}
                    <Link rel="stylesheet" href={telegram} target="_blank">
                      <Image
                        src={TelegramImg}
                        width={221}
                        height={90}
                        alt="Icon 04"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mx-auto text-center pb-32 md:pt-40">
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  <Image
                    className="z-10 h-full object-cover"
                    src={AlertBgImage}
                    alt="Hero"
                  />
                </div>
                <h3
                  className="h3 font-hkgrotesk mt-20"
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
                </h3>

                <ul className="flex grow justify-center flex-wrap items-center pt-20">
                  <li className="mr-10">
                    <BlueButton
                      buttonText={"Run AI API"}
                      handleOnClick={() => window.open(AIAPI)}
                    />
                  </li>

                  <li className="">
                    <BlackButton
                      buttonText={"Build AIDAPP"}
                      handleOnClick={() => window.open(AIDAPP)}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[1360] mt-40">
            <ul className="flex justify-content: space-between grow">
              <li className="w-[146]">
                <Image
                  className="z-10 w-full h-full object-cover"
                  src={Logo}
                  alt="Logo"
                />
              </li>
              <li>
                <div className="w-[90]"></div>
              </li>
              <li>
                <Link
                  className="h-[40px] font-medium"
                  color="foreground"
                  href={medium}
                  target="_blank"
                >
                  Media Kit
                </Link>
              </li>
              <li>
                <div className="w-[64]"></div>
              </li>
              <li>
                <Link
                  className="h-[40px] font-medium"
                  color="foreground"
                  href={docs}
                  target="_blank"
                >
                  Docs
                </Link>
              </li>
              <li>
                <div className="w-[64]"></div>
              </li>
              <li>
                <Link
                  className="h-[40px] font-medium"
                  color="foreground"
                  href={medium}
                  target="_blank"
                >
                  Contact us: info@agiopen.network
                </Link>
              </li>
              <li>
                <div className="w-[380]"></div>
              </li>

              <li>
                <Link
                  className="w-[68]"
                  rel="stylesheet"
                  href={medium}
                  target="_blank"
                >
                  <Image
                    src={MediumIcon}
                    width={36}
                    height={36}
                    alt="Icon 01"
                  />
                </Link>
              </li>

              <li>
                <Link
                  className="w-[68]"
                  rel="stylesheet"
                  href={discord}
                  target="_blank"
                >
                  <Image
                    src={DiscordIcon}
                    width={36}
                    height={36}
                    alt="Icon 02"
                  />
                </Link>
              </li>

              <li>
                <Link
                  className="w-[68]"
                  rel="stylesheet"
                  href={twitter}
                  target="_blank"
                >
                  <Image
                    src={TwitterIcon}
                    width={36}
                    height={36}
                    alt="Icon 03"
                  />
                </Link>
              </li>

              <li>
                <Link
                  className="w-[36]"
                  rel="stylesheet"
                  href={github}
                  target="_blank"
                >
                  <Image
                    src={GithubIcon}
                    width={36}
                    height={36}
                    alt="Icon 04"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BlueButtonProps {
  buttonText?: string;
  buttonStyle?: any;
  fontSize?: string; // or number, depending on your needs
  handleOnClick?: () => void;
}

const BlueButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
  handleOnClick,
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
    <Button
      style={buttonStyleToUse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
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
    </Button>
  );
};

const BlackButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
  handleOnClick,
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
    <Button
      style={buttonStyleToUse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
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
    </Button>
  );
};

const LearnButton: React.FunctionComponent<BlueButtonProps> = ({
  buttonText,
  buttonStyle,
  fontSize,
  handleOnClick,
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
  const defaultFontSize = "12px";
  const fontSizeToUse = fontSize || defaultFontSize;
  return (
    <Button
      style={buttonStyleToUse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
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
    </Button>
  );
};
