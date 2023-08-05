import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Timeline from "@/components/Timeline";
import StackGrid from "@/components/StackGrid";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="projects" className="py-5">
        <ProjectGrid />
      </section>

      <section id="timeline" className="py-5">
        <Timeline />
      </section>

      <section id="stack" className="py-5">
        <StackGrid />
      </section>

      <a href="#nav">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="animate-bounce mx-auto h-10 w-10 cursor-pointer invert"
              src="/arrow.png"
              width={50}
              height={50}
              alt="arrow"
            />
          </div>
        </footer>
      </a>
    </>
  );
}
