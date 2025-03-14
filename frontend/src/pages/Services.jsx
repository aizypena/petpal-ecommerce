import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-20 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12">
            At PetPal, we offer a wide range of services to keep your pets
            happy, healthy, and well-cared for. Our expert team is dedicated to
            giving your furry friends the best care possible.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                title: "Veterinary Check-ups",
                description:
                  "Comprehensive health assessments and treatments by licensed veterinarians to ensure your pet’s well-being.",
                image:
                  "https://media.istockphoto.com/id/1303362255/photo/young-happy-veterinary-nurse-smiling-while-playing-with-a-dog-high-quality-photo.jpg?s=612x612&w=0&k=20&c=_kIKIzB4GF5WDLCf2yK1XMQk9JtxoL9XPK_nJmTZ5JQ=",
              },
              {
                title: "Pet Grooming",
                description:
                  "Professional grooming services including bathing, trimming, nail clipping, and more to keep your pet looking great.",
                image:
                  "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147569900/images/4f5e87f-bdb5-7276-da00-7d5e271a85f_Dog-getting-groomed.jpg",
              },
              {
                title: "Pet Boarding",
                description:
                  "Safe and comfortable boarding facilities for your pets when you are away, with attentive and loving care.",
                image:
                  "https://www.petpalaceresort.com/wp-content/uploads/2014/02/2400-534x308.jpg",
              },
              {
                title: "Pet Training",
                description:
                  "Behavioral training sessions for pets of all ages, helping them become well-mannered and obedient companions.",
                image:
                  "https://images.ctfassets.net/2t8dhn7s97w9/6K7dR4Acbw3tBgjHwIe27H/0cd6c646b7a0c01601d87edb9c6553b0/WEB-2571904-Oct24_SCC3_SERV-TRN_MO",
              },
              {
                title: "Pet Adoption",
                description:
                  "Find your new furry friend! We partner with shelters to help pets find loving homes.",
                image:
                  "https://www.brodieanimalhospital.com/blog/images/istock-1322461027-2000x1334.1000x0-is.jpg",
              },
              {
                title: "Emergency Care",
                description:
                  "24/7 emergency care services to address urgent and life-threatening situations for your pets.",
                image:
                  "https://www.animalmedicalcenterrichmond.com/_files/images/service-urgent.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to give your pet the best care?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule an appointment or learn more about
              our services.
            </p>
            <a
              href="/contact"
              className="bg-[#FFC600] hover:bg-[#e0b000] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Services;
