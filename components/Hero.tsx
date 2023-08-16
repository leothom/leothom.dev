"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

function Hero() {
  return (
    <div className="text-gray-700 dark:text-gray-200 h-screen">
      <h1 className="text-4xl sm:text-7xl font-extrabold bg-gradient-to-r dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent pt-2 mb-2">
        Hi, I&apos;m Leo Thom
      </h1>
      <span className="text-lg text-white">
        <Typewriter
          words={[
            "🍵 fueled by matcha lattes",
            "📚 always learning",
            "📸 loves photography",
          ]}
          loop={false}
          cursor={true}
          cursorStyle="|"
          cursorBlinking={true}
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <p className="mt-10 text-xl">
        I&apos;m a front-end web developer currently based in Hong Kong,
        originally from Silicon Valley.
      </p>
      <p className="mt-6 text-xl">
        Former product manager and online marketer, I transitioned to
        programming to get closer to the product and end-user.
      </p>

      <div className="mt-6" id="hover">
        <SocialIcon
          url="https://github.com/leothom"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />

        <a href="https://www.are.na/leo-thom" target="_blank">
          <Image
            className="cursor-pointer invert inline mx-2"
            src="/logo-arena.png"
            alt="arena logo"
            width={26}
            height={26}
          />
        </a>

        <SocialIcon
          url="https://www.linkedin.com/in/leothom/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />

        <SocialIcon
          url="https://www.instagram.com/driveslowleo/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />

        <SocialIcon
          url="https://wa.me/85255314832"
          network="whatsapp"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
      </div>

      <div className="mt-8">
        <a
          href="mailto:work@leothom.com"
          target="_blank"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-blue-700 dark:via-gray-500 dark:to-white group-hover:from-blue-700 group-hover:via-gray-500 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            📧 Email me
          </span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
