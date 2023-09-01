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
      <h1 className="text-4xl sm:text-7xl font-extrabold bg-gradient-to-r dark:from-white dark:via-blue-500 dark:to-white bg-clip-text text-transparent pt-2 mb-2">
        Hi, I&apos;m Leo Thom
      </h1>
      <span className="text-lg text-white">
        <Typewriter
          words={[
            "🍵 fueled by matcha",
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
      <p className="mt-10 text-md sm:text-xl">
        Front-end web developer currently based in Hong Kong.
      </p>
      <p className="mt-6 text-md sm:text-xl">Previously at LinkedIn Corp.</p>
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

      <p className="mt-6 text-sm sm:text-md italic">
        &quot;Leo is great to work with and knows what he&apos;s doing.
        Extremely flexible and patient. Leo consulted on an e-comm project, and
        the process and organization was wonderful.&quot;
      </p>
      <p className="mt-2 text-xs sm:text-sm">
        - Nitjasin, Manager at Aquatics Inc.
      </p>

      {/* <p className="mt-6 text-md sm:text-xl animate-pulse underline underline-offset-4">
        Available for immediate hire.
      </p> */}

      <div className="mt-8">
        <a
          href="mailto:work@leothom.com"
          target="_blank"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-blue-700 dark:via-gray-500 dark:to-white group-hover:from-blue-700 group-hover:via-gray-500 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition duration-500 ease-in-out bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            📧 Contact
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1reYSlp5oHHm8xmHAWxuXeaLieODzofgY/view?usp=drive_link"
          target="_blank"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-blue-700 dark:via-gray-500 dark:to-white group-hover:from-blue-700 group-hover:via-gray-500 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition duration-500 ease-in-out bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            📄 Résumé
          </span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
