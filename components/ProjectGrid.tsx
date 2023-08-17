import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white py-6 mb-10">
        Select Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 drop-shadow-md hover:drop-shadow-xl">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 dark:border-gray-400 rounded-lg pd-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.imagehero && (
              <Image
                src={project.imagehero}
                alt={project.name}
                className="object-cover rounded-md border border-gray-500 dark:border-gray-400"
                width={750}
                height={300}
              />
            )}
            <div className="font-extrabold text-white mt-2 p-2">
              <p className="px-1 text-md">
                {project.name} - {project.subtitle}
              </p>
              <div className="mt-2">
                {project.stack.map((tech, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
