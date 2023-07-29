
import Hero from '@/components/Hero'
import StackGrid from '@/components/StackGrid'
import ProjectGrid from '@/components/ProjectGrid'

export default async function Home() {


  return (
      <>
        <section id="hero" className='snap-start'>
          <Hero />
        </section>

        <section id="projects" className='py-5'>
          <ProjectGrid />
        </section>

        <section id="stack" className='py-5'>
          <StackGrid />
        </section>


      </>

  );
}
