import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useDocumentTitle from "../shared/useDocumentTitle";

function Contact() {
  useDocumentTitle("PetPal - Contact Us");
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12">
            We'd love to hear from you! Whether you have questions about our
            services, need assistance, or just want to chat, feel free to reach
            out to us.
          </p>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Send us a message
              </h2>

              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC600]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC600]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC600]"
                />
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows="4"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC600]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFC600] hover:bg-[#e0b000] text-black font-semibold py-2 rounded-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info and Map */}
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-3">
                  <strong>Phone:</strong> 09123456789
                </p>
                <p className="text-gray-600 mb-3">
                  <strong>Email:</strong> petpal@email.com
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Main Street, Makati City, Metro
                  Manila
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4345532383735!2d121.02702007510489!3d14.555083785934432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8a1b4a1af5b%3A0x2ab123456789abcd!2sMakati!5e0!3m2!1sen!2sph!4v1700000000000"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  title="PetPal Main Branch Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
