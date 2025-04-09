import Image from 'next/image';
import Container from './container';
import Modal from './modal';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: '/project1.jpg',
    description: 'Detailed description of Project 1 that will appear in the modal.',
  },
  {
    id: 2,
    title: 'Project 2',
    image: '/project2.jpg',
    description: 'Detailed description of Project 2 that will appear in the modal.',
  },
  {
    id: 3,
    title: 'Project 3',
    image: '/project3.jpg',
    description: 'Detailed description of Project 3 that will appear in the modal.',
  },
];

export default function Projects() {
  return (
    <div className="my-16">
      <h1 className="text-white text-3xl font-bold mb-10 text-center">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

interface ProjectProps {
  project: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
}

function ProjectCard({ project }: ProjectProps) {
  return (
    <Container className="bg-gray-900 hover:bg-gray-800 transition-colors p-0 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
        
        <div className="mt-auto pt-4 flex justify-center">
          <Modal 
            title={project.title}
            trigger={
              <button 
                type="button" 
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors"
              >
                Ver mais
              </button>
            }
          >
            <div className="space-y-4">
              <div className="relative h-64 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p>{project.description}</p>
              <p>Technologies used: React, Next.js, TailwindCSS</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.</p>
            </div>
          </Modal>
        </div>
      </div>
    </Container>
  );
} 