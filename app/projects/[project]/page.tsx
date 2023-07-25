import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string }
};

export default async function Project({params}: Props) {

  const slug = params.project;

  const project = await getProject(slug);
    
  return (
    
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-200 transition cursor-pointer"
        >
            Project
        </a>
      </header>


      {/* Content goes here */}
      <div><PortableText value={project.content} /></div>

      {/* Image goes here */}


    </div>

  );
}