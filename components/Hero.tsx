import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="text-gray-700 dark:text-gray-200 h-screen">
      <h1 className='text-4xl sm:text-7xl font-extrabold bg-gradient-to-r dark:from-orange-400 dark:via-red-600 dark:to-purple-500 bg-clip-text text-transparent py-2'>Howdy, I&apos;m Leo ✨</h1>
      <p className='mt-3 text-xl'>
        I&apos;m Leo and I&apos;m a front-end web developer, with a track record of creating impactful digital experiences for millions of users.
      </p>
      <p className='mt-6 text-xl'>As a former online marketer and product manager, I transitioned to programming to get closer to the product and end-user.</p> 
      <p className='mt-6 text-xl'><FontAwesomeIcon icon={faCodeBranch} className="text-gray-600 dark:text-gray-300 mr-2" /><Link href="https://github.com/leothom/" target="_blank" className='hover:text-gray-900 hover:underline underline'>GitHub Profile</Link></p>
      <p className='mt-6 text-xl'>Built with Next.js, TypeScript, Tailwind CSS and Sanity.io</p>
    </div>
  )
}

export default Hero


