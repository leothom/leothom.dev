import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Leo Thom is a front-end developer based in Hong Kong",
  description: "Leo Thom is a front-end developer based in Hong Kong",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} dark bg-gradient-to-t from-gray-500 to-gray-800`}
    >
      <body className="max-w-3xl mx-auto p-10" id="nav">
        {/* <Providers> */}
        <header className="flex items-left justify-left">
          <div id="right" className="flex">
            <div className="flex items-center gap-5 text-md">
              <a
                href="/#projects"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-blue-700 hover:via-gray-500 hover:to-white bg-clip-text text-transparent"
              >
                <p>Projects</p>
              </a>

              <a
                href="/#timeline"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-blue-700 hover:via-gray-500 hover:to-white bg-clip-text text-transparent"
              >
                <p>Experience</p>
              </a>

              <a
                href="/#stack"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-blue-700 hover:via-gray-500 hover:to-white bg-clip-text text-transparent"
              >
                <p>Stack</p>
              </a>
            </div>
          </div>
        </header>
        <main className="py-10 md:py-20">{children}</main>
      </body>
    </html>
  );
}
