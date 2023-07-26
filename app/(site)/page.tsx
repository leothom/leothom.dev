import {getProjects} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className='text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent py-10'>Welcome!</h1>
      <p className='mt-3 text-xl text-gray-600'>
      I&apos;m Leo and I&apos;m a front-end web developer, with a track record of creating impactful digital experiences for millions of users.
      </p>
      <p className='mt-6 text-xl text-gray-600'>I strive to bridge the gap between elegant technology and a joyful user experience, delivering solutions that are efficient, intuitive, and user-friendly.</p>
      <p className='mt-6 text-xl text-gray-600'>This portfolio website is built with Next.js, Tailwind CSS, Typescript and Sanity.io</p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Projects</h2>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.slug}`}
          key={project._id} 
          className='border-2 border-gray-500 rounded-lg pd-1 hover:scale-105 hover:border-blue-500 transition'
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              className='object-cover rounded-lg border border-gray-500'
              width={750}
              height={300}
            />
          )}
          <div className='font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent mt-2'>{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  );
}
