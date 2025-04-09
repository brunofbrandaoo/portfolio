import Experiences from "@/components/ui/experiences";
import Hero from "@/components/ui/hero";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import Projects from "@/components/ui/projects";
import AboutMe from "@/components/ui/aboute-me";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <AboutMe />
      <Experiences />
      <Projects />
    </>
  );
}
