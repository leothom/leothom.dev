import { getTimeline } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Timeline() {
  const timeline = await getTimeline();

  return (
    <div className="min-h-screen mt-10" id="timeline">
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-white dark:to-white bg-clip-text text-transparent mb-16">
        Experience
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timeline.map((timeline) => (
          <li className="mb-10 ml-6" key={timeline._id}>
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-white dark:ring-gray-900 dark:bg-blue-900">
              {timeline.image ? (
                <Image
                  src={timeline.image}
                  alt={timeline.company_name}
                  width={42}
                  height={42}
                  className="border rounded-full"
                />
              ) : (
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              )}
            </span>

            <div className="ml-6">
              <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-white">
                {timeline.job_title}
              </h3>
              <h3 className="block mb-2 text-md font-normal leading-none dark:text-gray-300">
                {timeline.company_name}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                {timeline.start_date} - {timeline.end_date} |{" "}
                {timeline.company_location}
              </time>
              <p className="mb-4 prose-invert dark:text-gray-400 prose-p:mb-5">
                <PortableText value={timeline.description} />
              </p>

              {timeline.button_url && (
                <a
                  href={timeline.button_url}
                  target="_blank"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none dark:bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-350 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <Image
                    src="/icon-link-white.png"
                    alt="link"
                    width={16}
                    height={16}
                    className="mr-2 inline "
                  />
                  {timeline.button_text}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
