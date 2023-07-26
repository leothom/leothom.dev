import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';
import type { Metadata } from 'next'
import Link from 'next/link';

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
      <body className="max-w-3xl mx-auto py-10 bg-[#F5F5F5]">
        <header className="flex items-center justify-between">
          <Link 
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent text-2xl font-extrabold"
          >
            LEOTHOM.DEV
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link 
                key={page._id}
                href={`/${page.slug}`}
                className='hover:text-gray-900 hover:underline'
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
