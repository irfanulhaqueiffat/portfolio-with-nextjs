import Image from "next/image";
import projct1 from '../../../public/Screenshot 2025-11-04 170803.png';
import projct2 from '../../../public/project 2.png';
import project3 from '../../../public/bike.png';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <div className="pt-16">
  {/* Projects Section */}
  <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">My Frontend Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct1}
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Shop- Canvix.</h3>
                <p className="text-gray-600 mb-4">its a single page website created with React, Tailwind </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">Tailwind</span>
                </div>
                <a href="https://canvix-update-wkqx.vercel.app/"  className="block px-3 py-2 mt-2 text-blue-600 border-2 border-blue-600 rounded-full text-center hover:bg-blue-600 hover:text-white transition-colors duration-300">view</a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct2}
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ecommerce - Nexton</h3>
                <p className="text-gray-600 mb-4">An ecommerce website created with React, Tailwind, API integration, and authentication</p>
                <div className="flex space-x-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">Tailwind</span>
                </div>
                <a href="https://nexton-update-rnlh.vercel.app/"  className="block px-3 py-2 mt-2 text-blue-600 border-2 border-blue-600 rounded-full text-center hover:bg-blue-600 hover:text-white transition-colors duration-300">view</a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project3}
                alt="Project 3"
                width={400}
                height={250}
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Scooter-shop(Ebike)</h3>
                <p className="text-gray-600 mb-4">Its A Online Ebike Scooter Shop Website HTML,css,javascript .</p>
                <div className="flex space-x-2">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded">HTML</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">CSS</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">javascript</span>
                  

                </div>
                <a href="https://irfanulhaqueiffat.github.io/project-7-e-bike-online-shop/"  className="block px-3 py-2 mt-2 text-blue-600 border-2 border-blue-600 rounded-full text-center hover:bg-blue-600 hover:text-white transition-colors duration-300">view</a>
              </div>
              
            </div>
            





          </div>
        </div>
      </section>
       
      
        </div>
        <Footer />
    </div>
  );
}