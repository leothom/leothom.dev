import Hero from "@/components/Hero";
import StackGrid from "@/components/StackGrid";
import ProjectGrid from "@/components/ProjectGrid";

export default async function Home() {
  return (
    <>
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="projects" className="py-5">
        <ProjectGrid />
      </section>

      <section id="stack" className="py-5">
        <StackGrid />
      </section>

      <a href="#nav">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="animate-bounce mx-auto h-10 w-10 cursor-pointer"
              src="/arrow.png"
              width={50}
              height={50}
            />
          </div>
        </footer>
      </a>
    </>
  );
}
