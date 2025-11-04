import Image from "next/image";
import prof from '../../../public/502909348_4079488505703572_2549706419031312301_n.jpg';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import aboutme from '../../../public/558269877_4209104776075277_4702279807701251742_n.jpg'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
      {/* About Section */}
  <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={aboutme}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm mx-auto object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-6 text-white">
                I'm a passionate developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies,
                I create seamless digital experiences that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-gray-800  shadow">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p>React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg  text-gray-800 shadow">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p>Node</p>
                  <p>express js</p>
                  <p>Mongo DB</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Skills Section */}
  <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-600 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  HTML5/CSS3
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  JavaScript/ES6+
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  React.js
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Next.js
                </li>
              </ul>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors">Styling</h3>
              <ul className="space-y-2">
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  CSS Modules
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Styled Components
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Figma UI
                </li>
              </ul>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Node.js
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  SQL,SEO
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  MongoDB
                </li>
              </ul>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Git/GitHub
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  VS Code
                </li>
                <li className="flex items-center transform transition-transform hover:translate-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  npm/npx
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}