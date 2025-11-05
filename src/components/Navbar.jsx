'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 shadow-lg fixed w-full z-10" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Irfanul Haque Iffat
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-200 hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-blue-400">
              About
            </Link>
            <Link href="/about#skills" className="text-gray-200 hover:text-blue-400">
              Skills
            </Link>
            <Link href="/projects" className="text-gray-200 hover:text-blue-400">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-blue-400">
              Contact
            </Link>
            <a 
              href="/irfan-cv.pdf" 
              download
              className="px-4 py-2 text-gray-200 border-2 border-gray-200 rounded-full hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Download CV
            </a>
            <Link 
              href="https://wa.me/message/YD6SZLV35O67B1" 
              className="px-4 py-2 text-black border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none text-white focus:ring-2 focus:ring-blue-400 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 bg-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/about#skills"
                className="block px-3 py-2 text-white hover:text-blue-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-white hover:text-blue-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
             <Link
  href="/irfan-cv.pdf"
  download="irfan-cv"
  className="block px-3 py-2 mt-2 text-gray-200 border-2 border-gray-200 rounded-full text-center hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
  onClick={() => setIsMenuOpen(false)}
>
  Download CV
</Link>

              <a
                href="https://www.facebook.com/irfanfrontenddeveloper"
                className="block px-3 py-2 mt-2 text-gray-200 border-4 border-blue-600 rounded-full text-center hover:bg-orange-600 hover:text-white transition-colors duration-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;