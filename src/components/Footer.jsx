import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300">
              A passionate developer creating amazing web experiences. Let's build something great together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">About</Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white">Projects</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-semibold">Email:</span> irfanulifatcbx@gmail.com
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Location:</span> Dhaka,Bangladesh
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-4 flex space-x-4">
              <Link href="https://www.facebook.com/irfanulhaque147" className="text-gray-300 hover:text-white">
            <FaFacebookSquare />


                
              </Link>
              <Link href="https://github.com/irfanulhaqueiffat" className="text-gray-300 hover:text-white">
                <FaSquareGithub />

              </Link>
              <Link href="https://www.linkedin.com/in/irfanul-haque-iffat-8065b935b/" className="text-gray-300 hover:text-white">
              <FaLinkedin />
              

              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} All right resarved by irfanul haque iffat.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;