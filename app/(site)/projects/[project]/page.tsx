import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string }
};

export default async function Project({params}: Props) {

  const slug = params.project;

  const project = await getProject(slug);
    
  return (
    
    <div className="text-gray-700 dark:text-gray-200">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5 mr-10">{project.name}</h1>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-300 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-200 transition cursor-pointer"
        >
            Live Project
        </a>
      </header>

      {/* Image goes here */}
      <a 
        href={project.url}
        target="_blank"
      >
        <Image
          src={project.image}
          alt={project.name}
          width={960}
          height={540}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </a>

      {/* Content goes here */}
      <div className="text-lg text-gray-700 dark:text-gray-200 mt-5 prose dark:prose-invert lg:prose-xl"><PortableText value={project.content} /></div>
    </div>

  );
}