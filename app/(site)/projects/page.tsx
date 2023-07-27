import { getProjects } from "@/sanity/sanity-utils";
import Link from 'next/link';
import Image from "next/image";

async function ProjectGrid() {

  const projects = await getProjects();

  return (
    <>
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5'>Projects</h1>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.slug}`}
          key={project._id} 
          className='border-2 border-gray-500 dark:border-gray-400 rounded-lg pd-1 hover:scale-105 hover:border-blue-500 transition'
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              className='object-cover rounded-lg border border-gray-500 dark:border-gray-400'
              width={750}
              height={300}
            />
          )}
          <div className='font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent mt-2 p-2'>{project.name}</div>
        </Link>
      ))}
      </div>
    </>
  )
}

export default ProjectGrid