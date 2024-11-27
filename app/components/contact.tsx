import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abdul Munim Arain. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://pk.linkedin.com/in/abdul-munim-arain-99152128b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="abdulmunimarain5@gmail.com">
              <FaEnvelope size={24} className="text-blue-600 hover:text-blue-800 transition" target="_blank"/>
            </a>
            <a href="https://wa.me/+923192695200">
              <FaWhatsapp size={24} className="text-blue-600 hover:text-blue-800 transition"target="_blank" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
