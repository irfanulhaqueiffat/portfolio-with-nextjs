import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import prof from '../../public/502909348_4079488505703572_2549706419031312301_n.jpg'
import frontpg from'../../public/front page.jpg'
import projct1 from '../../public/canvix.png';
import projct2 from '../../public/nexton.png';
import project3 from '../../public/bike.png'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto pt-16">
          <h2  className="text-5xl font-bold text-gray-900 mb-6">Hi This Is <span className="text-orange-600">Irfanul Haque Iffat</span></h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">Full Stack Developer | Creative Problem Solver | Tech Enthusiast</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white"> Web Developer And Desgin </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={prof}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg  mb-6 text-white"><span className="text-3xl border-blue-300 rounded ">       Web design
:
</span>
         Visual aesthetics, user experience, and how a site looks and feels. 
Responsibilities: Creating the website's layout, color schemes, typography, and imagery. 
Key skills: Knowledge of design principles, user interface (UI) and user experience (UX) design, proficiency with design software like Figma or Photoshop, and basic coding knowledge (HTML/CSS). 
Synonyms: Often includes terms like UI design and UX design. 
              </p>
              <p className="text-lg  mb-6 text-white"><span className="text-3xl border-blue-300 rounded ">Web development
:</span> The technical aspects, functionality, and performance of a website. 
Responsibilities: Writing the code that makes a website work, managing the server, and building the core structure. 
Key skills: Proficiency in programming languages like HTML, CSS, and JavaScript, knowledge of front-end and back-end development, version control (like Git), and understanding of frameworks. 
Synonyms: Can be broken down into front-end development (what the user sees and interacts with) and back-end development (the server-side logic and database management). </p>
             
            </div>
          </div>
        </div>
      </section>
      <section id="webdevelopment" className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">A Full Stack Developer </h2>
          <div className="grid md:grid-cols-2  items-center gap-24">
           
            <div>
              <p className="text-lg  mb-6 text-white">
              A full stack developer is a professional who can work on both the front-end (what the user sees and interacts with) and the back-end (server-side logic, data, and databases) of a website or application. This role requires proficiency in both client-side technologies like HTML, CSS, and JavaScript, as well as server-side languages such as Python or Node.js, and database management systems like SQL or MongoDB. Full stack developers are involved in the entire development process, from building the user interface to managing the data and server infrastructure.  
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p>React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p>Node</p>
                  <p>Mongo D</p>

                </div>
              </div>
            </div>
             <div>
              <Image
                src={frontpg}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>








        
      </section>



 

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct1}
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Canvix.</h3>
                <p className="text-gray-600 mb-4">its a singel page web site created with react ,Tailwind </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">tailwind</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct2}
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ecommarce - nexton.</h3>
                <p className="text-gray-600 mb-4">its a ecommarce website created with react ,tailwind ,api fetch, auth , </p>
                <div className="flex space-x-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">Tailwind</span>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project3}
                alt="Project 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">scooter</h3>
                <p className="text-gray-600 mb-4">its a online ebike store.</p>
                <div className="flex space-x-2">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded">html</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">css</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">javascript</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-white">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
