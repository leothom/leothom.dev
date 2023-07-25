import type { Metadata } from 'next';
import "../globals.css"

export const metadata: Metadata = {
  title: 'Leo Thom - Web Developer Based in Hong Kong',
  description: 'Web Development Portfolio of Leo Thom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
