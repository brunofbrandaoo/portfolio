import Experiences from "@/components/ui/experiences";
import Hero from "@/components/ui/hero";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import Projects from "@/components/ui/projects";
import AboutMe from "@/components/ui/aboute-me";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="-mx-4 w-screen relative left-1/2 right-1/2 -translate-x-1/2">
        <InfiniteScroll />
      </div>
      <AboutMe />
      <Experiences />
      <Projects />
    </>
  );
}
