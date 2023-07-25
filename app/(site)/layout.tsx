import '../globals.css';
import type { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SHOTBYLEO - Photographer based in Hong Kong',
  description: 'Beauty and Fashion Photography Studio based in Hong Kong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link 
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent text-2xl font-extrabold"
          >
            SHOTBYLEO
          </Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
