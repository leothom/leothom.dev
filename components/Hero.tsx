"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

function Hero() {
  return (
    <div className="text-gray-700 dark:text-gray-200 h-screen">
      <h1 className="text-4xl sm:text-7xl font-extrabold bg-gradient-to-r dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent py-2 mb-2">
        Hi, I&apos;m Leo
      </h1>
      <span className="text-md text-white">
        {/* Style will be inherited from the parent element */}
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
        I&apos;m a web developer currently based in 🇭🇰 Hong Kong, originally
        from 🇺🇸 Silicon Valley.
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

        <SocialIcon
          url="mailto:work@leothom.com"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </div>

      <div className="mt-8">
        <a
          href="https://read.cv/leothom"
          target="_blank"
          className="text-md px-4 py-2 mx-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-200"
        >
          💼 Read my CV
        </a>
      </div>
    </div>
  );
}

export default Hero;
