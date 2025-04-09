import Container from "./container";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="about" className="my-16">
      <h1 className="text-white mb-6 text-3xl font-bold text-center">About me</h1>
      <Container className="bg-black w-full hover:border hover:border-purple-500">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-white text-4xl font-bold mb-4">Bruno Formiga</h1>
            <h2 className="text-white text-2xl mb-4">Software Engineer</h2>
            <p className="text-white text-xl">pasjdojqojwoejwoqejoqejhij</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
              <Image
                src="/taqtile.jpg"
                alt="Bruno Formiga"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
          </div>
        </div>
      </Container>
    </div>
  );
}
