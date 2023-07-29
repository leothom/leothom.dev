import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Hero() {
  return (
    <div className="text-gray-700 dark:text-gray-200 h-screen">
      <h1 className='text-4xl sm:text-7xl font-extrabold bg-gradient-to-r dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent py-2'>Howdy, I&apos;m Leo ✨</h1>
      <p className='mt-3 text-xl'>
        I&apos;m a front-end web developer and studio photographer based in Hong Kong.
      </p>
      <p className='mt-6 text-xl'>
        As a former online marketer and product manager, I transitioned to programming to get closer to the product and end-user.
      </p>

      <div className='mt-6' id="social">
      
        <SocialIcon 
          url="https://github.com/leothom" 
          fgColor='white' 
          bgColor='transparent'
          target='_blank'
        />

        <SocialIcon 
          url="https://www.linkedin.com/in/leothom/" 
          fgColor='white' 
          bgColor='transparent' 
          target='_blank'
        />

        <SocialIcon 
          url="https://www.instagram.com/driveslowleo/" 
          fgColor='white' 
          bgColor='transparent' 
          target='_blank'
        />

        <SocialIcon 
          url="https://wa.me/85255314832" 
          network="whatsapp"
          fgColor='white' 
          bgColor='transparent' 
          target='_blank'
        />

        <SocialIcon 
          url="mailto:work@leothom.com" 
          network="email"
          fgColor='white' 
          bgColor='transparent' 
        />

      </div>

      <p className='mt-6 text-xl'>Built with Next.js, TypeScript, Tailwind CSS and Sanity.io</p>
    </div>
  )
}

export default Hero


