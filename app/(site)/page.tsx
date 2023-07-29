
import Hero from '@/components/Hero'
import StackGrid from '@/components/StackGrid'

export default async function Home() {


  return (
      <>
        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        <section id="stack" className='snap-center'>
          <StackGrid />
        </section>
      </>

  );
}
