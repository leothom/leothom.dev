import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';
import type { Metadata } from 'next'
import Link from 'next/link';
import Providers from './providers';
import ThemeSwitcher from './ThemeSwitcher';

export const metadata: Metadata = {
  title: 'Leo Thom is a front-end developer based in Hong Kong',
  description: 'Leo Thom is a front-end developer based in Hong Kong',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // get all pages
  const pages = await getPages();

  return (
    <html lang="en" className='dark bg-gray-800'>
      <body className="max-w-3xl mx-auto p-10">
        {/* <Providers> */}
        <header className="flex items-left justify-left">
          
          <div id="right" className="flex justify-center">
            <div className="flex items-center gap-5 text-md text-gray-600 dark:text-gray-300">
              <Link href="https://read.cv/leothom" target='_blank' className='hover:text-gray-900 hover:underline'>CV</Link>
              <Link href="/projects/" className='hover:text-gray-900 hover:underline'>Projects</Link>
              {pages.map((page) => (
                <Link 
                  key={page._id}
                  href={`/${page.slug}`}
                  className='hover:text-gray-900 hover:underline'
                >
                  {page.title}
                </Link>
              ))}
              <Link href="#stack"><button className="heroButton">Stack</button></Link>
              <Link href="mailto:work@leothom.com" target='_blank' className='hover:text-gray-900 hover:underline'>Contact</Link>
              {/* <ThemeSwitcher /> */}
            </div>
          </div>
        </header>
        <main className='py-10 md:py-20'>{children}</main>
        {/* </Providers> */}
      </body>
    </html>
  )
}
