export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-12 border-t border-gray-700">
      <div className="text-center text-gray-400">
        &copy; {currentYear} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
} 