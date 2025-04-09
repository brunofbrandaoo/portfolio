import InfiniteScroll from "./infinite-scroll";

export default function Hero() {
  return (
    <article className="bg-[#1e293b] flex flex-col md:flex-row items-center justify-center p-6 overflow-hidden">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-white text-4xl font-bold mb-4">Bruno Formiga</h1>
        <h2 className="text-white text-2xl mb-4">Software Engineer</h2>
        <p className="text-white text-base">
          I am a software engineer with a passion for building web applications. I have
          experience in various technologies and frameworks, and I enjoy learning new things.
        </p>
      </div>
      <div className="md:w-1/2">
        <InfiniteScroll />
      </div>
    </article>
  );
}
