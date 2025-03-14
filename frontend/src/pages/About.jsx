import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20 min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            About PetPal
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
            PetPal is your trusted companion in providing top-notch care,
            products, and services for your beloved pets. Our mission is to make
            pet care simple, accessible, and affordable for all fur parents.
          </p>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At PetPal, we aim to provide the best products and services to
                improve the health and happiness of every pet. From nutritious
                food, toys, grooming essentials, to veterinary
                support—everything your pet needs under one roof.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We envision a world where every pet is healthy, happy, and cared
                for. We strive to be a community-driven brand that connects pet
                lovers, fosters responsible pet ownership, and advocates for
                animal welfare.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Core Values
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Compassion and Care for All Animals</li>
                <li>Quality and Innovation in Products & Services</li>
                <li>Customer-Centric Approach</li>
                <li>Integrity and Transparency</li>
                <li>Community and Education for Pet Owners</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/476596441_1056637769812346_3220891843416551603_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=wEfuGjrZcyUQ7kNvgFtTXVl&_nc_oc=AdhxjYwcvmdQ-odxPIEfNgk9QrUWo7Q-WwqV88etIMUD12H7sIMrnxERySnFrqn-Zq0&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=A-ThXESE5MhMatHrjrChYim&oh=00_AYEsqQ4GMd5WLH5urmxoVPOhkZ4P1YXc5Pzka3yntXh3yg&oe=67D9DA30"
                alt="Happy pets"
                className="rounded-lg shadow-md w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
