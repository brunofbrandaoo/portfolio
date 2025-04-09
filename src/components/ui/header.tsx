import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-4 py-4 border-b border-gray-700">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          Bruno Formiga
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#experiences" className="text-gray-300 hover:text-white">
            Experiences
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
} 