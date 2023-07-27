import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default async function Home() {


  return (
    <div className="text-gray-700 dark:text-gray-200">
      <h1 className='text-4xl sm:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5'>Welcome!</h1>
      <p className='mt-3 text-xl'>
        I&apos;m Leo and I&apos;m a front-end web developer, with a track record of creating impactful digital experiences for millions of users.
      </p>
      <p className='mt-6 text-xl'>As a former online marketer and product manager, I transitioned to programming to get closer to the product and end-user.</p> 
      <p className='mt-6 text-xl'>I seek to bridge the gap between technology and joyful user experiences - delivering solutions that are efficient, intuitive, and user-friendly.</p>
      <p className='mt-6 text-xl'><FontAwesomeIcon icon={faCode} className="text-gray-600 dark:text-gray-300 mr-2" /><Link href="https://github.com/leothom/leothom.dev" target="_blank" className='hover:text-gray-900 hover:underline underline'>GitHub Repo for this website</Link></p>
      <p className='mt-6 text-xl'>This portfolio website is built with Next.js, TypeScript, Tailwind CSS and Sanity.io</p>
     
      
    </div>
  );
}
