import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className="text-gray-700 dark:text-gray-200">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5 mr-10">
          {project.name}
        </h1>
        <h2 className="text-xs sm:text-lg">{project.subtitle}</h2>
      </header>

      {/* Image goes here */}
      <a href={project.url} target="_blank">
        <Image
          src={project.image}
          alt={project.name}
          width={960}
          height={540}
          className="border-2 border-gray-700 object-cover rounded-xl"
        />
      </a>
      <div className="mt-2">
        {project.stack.map((tech, index) => (
          <button
            key={index}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg md:text-sm text-xs px-2.5 py-1 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="mt-10 flex">
        {project.githuburl && (
          <>
            <a
              href={project.githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs lg:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-blue-700 dark:via-gray-500 dark:to-white group-hover:from-blue-700 group-hover:via-gray-500 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Image
                  src="/icon-github.png"
                  alt="link"
                  width={20}
                  height={20}
                  className="mr-2 inline"
                />
                GitHub Repo
              </span>
            </a>
          </>
        )}

        {/* Live Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs lg:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-blue-700 dark:via-gray-500 dark:to-white group-hover:from-blue-700 group-hover:via-gray-500 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Image
              src="/icon-link-gray.png"
              alt="link"
              width={16}
              height={16}
              className="mr-2 inline"
            />
            Live Project
          </span>
        </a>
      </div>

      {/* Content goes here */}
      <div className="text-lg text-gray-700 dark:text-gray-200 mt-5 prose dark:prose-invert lg:prose-xl">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
