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
        Howdy, I&apos;m Leo
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

      <p className="mt-10 text-xl">💼 Available for immediate hire</p>
      <div id="hover">
        <a href="https://read.cv/leothom" target="_blank">
          <p className="mt-8 text-md underline underline-offset-8">
            👀 Read my CV
          </p>
        </a>
      </div>
    </div>
  );
}

export default Hero;
