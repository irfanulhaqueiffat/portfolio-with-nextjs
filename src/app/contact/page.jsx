'use client';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <div className="pt-16">
  {/* Contact Section */}
  <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center  text-gray-200 mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border   text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border  text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email "
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-200 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
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
      </section>
      </div>
      <Footer />
    </div>
  );
}