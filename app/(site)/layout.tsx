import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Merriweather, Lato } from "next/font/google";

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
    <html lang="en" className={`${lato.variable} dark bg-black`}>
      <body className="max-w-3xl mx-auto p-10" id="nav">
        {/* <Providers> */}
        <header className="flex items-left justify-left top-0">
          <div id="right" className="flex">
            <div className="flex items-center gap-5 text-md">
              <a
                href="/#projects"
                className="font-medium text-white hover:text-gray-500 hover:bg-white border border-sky-100 rounded-lg px-2 py-1 transition duration-500 ease-in-out"
              >
                <p>Projects</p>
              </a>

              <a
                href="/#timeline"
                className="font-medium text-white hover:text-gray-500 hover:bg-white border border-sky-100 rounded-lg px-2 py-1 transition duration-500 ease-in-out"
              >
                <p>Experience</p>
              </a>

              <a
                href="/#stack"
                className="font-medium text-white hover:text-gray-500 hover:bg-white border border-sky-100 rounded-lg px-2 py-1 transition duration-500 ease-in-out"
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
