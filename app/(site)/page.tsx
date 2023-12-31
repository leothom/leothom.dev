import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Timeline from "@/components/Timeline";
import StackGrid from "@/components/StackGrid";

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
            <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-500 animate-bounce"></div>
          </div>
        </footer>
      </a>
    </>
  );
}
