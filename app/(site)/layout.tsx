import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';
import type { Metadata } from 'next'
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export const metadata: Metadata = {
  title: 'Leo Thom is a full-stack developer based in Hong Kong',
  description: 'Leo Thom is a full-stack developer based in Hong Kong',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-10">
        <header className="flex items-center justify-between">
          <Link 
            href="/"
            className="md:block hidden bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent text-sm sm:text-2xl font-extrabold"
          >
            LEOTHOM.DEV
          </Link>
          <div id="right" className="flex justify-center">
            <div className="flex items-center gap-5 text-sm text-gray-600 dark:text-gray-300">
              <Link href="https://read.cv/leothom" target='_blank' className='hover:text-gray-900 hover:underline'>CV</Link>
              {pages.map((page) => (
                <Link 
                  key={page._id}
                  href={`/${page.slug}`}
                  className='hover:text-gray-900 hover:underline'
                >
                  {page.title}
                </Link>
              ))}
              <Link href="mailto:work@leothom.com" target='_blank' className='hover:text-gray-900 hover:underline'>Contact</Link>
              <DarkModeToggle />
            </div>
          </div>
        </header>
        <main className='py-10 md:py-20'>{children}</main>
      </body>
    </html>
  )
}
