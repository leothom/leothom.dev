import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';
import type { Metadata } from 'next'
import Link from 'next/link';

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
    <html lang="en" className='dark bg-slate-800'>
      <body className="max-w-3xl mx-auto p-10">
        {/* <Providers> */}
        <header className="flex items-left justify-left">
          
          <div id="right" className="flex">
            <div className="flex items-center gap-5 text-md">

              <Link href="/" >🏠</Link>

              <Link href="https://read.cv/leothom" target='_blank' className='font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent'>CV</Link>

              <h3 className='font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent'>
                <Link href="/#projects" >Projects</Link>
              </h3>
              

              <Link href="/#stack" className='font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent'>Stack</Link>

              <Link href="mailto:work@leothom.com" target='_blank' className='font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent'>Contact</Link>
              
            </div>
          </div>
        </header>
        <main className='py-10 md:py-20'>{children}</main>
        {/* </Providers> */}
      </body>
    </html>
  )
}
