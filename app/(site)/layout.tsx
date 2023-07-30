import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Roboto, Nunito } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
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
  // get all pages
  const pages = await getPages();

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${nunito.variable} dark bg-gradient-to-t from-gray-400 to-gray-800`}
    >
      <body className="max-w-3xl mx-auto p-10" id="nav">
        {/* <Providers> */}
        <header className="flex items-left justify-left">
          <div id="right" className="flex">
            <div className="flex items-center gap-5 text-md">
              <Link href="/">🏠</Link>

              <Link
                href="https://read.cv/leothom"
                target="_blank"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent"
              >
                <p>CV</p>
              </Link>

              <a
                href="/#projects"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent"
              >
                <p>Projects</p>
              </a>

              <a
                href="/#stack"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white 
              hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent"
              >
                <p>Stack</p>
              </a>

              <Link
                href="mailto:work@leothom.com"
                target="_blank"
                className="font-extrabold bg-gradient-to-r from-white via-white to-white hover:from-orange-400 hover:via-red-600 hover:to-purple-500 bg-clip-text text-transparent"
              >
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </header>
        <main className="py-10 md:py-20">{children}</main>
        {/* </Providers> */}
      </body>
    </html>
  );
}
