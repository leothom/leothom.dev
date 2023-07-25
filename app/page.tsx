import {getProjects} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className='text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent py-10'>Icarus Imagery</h1>
      <p className='mt-3 text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam error et repudiandae laborum, natus fugiat! Nostrum iste dolores, harum facere facilis excepturi, numquam maiores cum quis accusamus officiis nam temporibus.</p>
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
