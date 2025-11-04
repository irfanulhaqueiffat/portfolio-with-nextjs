'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 shadow-lg fixed w-full z-10">
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
            <Link href="/contact"className="text-gray-200 hover:text-blue-400">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/about#skills"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 mt-2 text-blue-600 border-2 border-blue-600 rounded-full text-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;