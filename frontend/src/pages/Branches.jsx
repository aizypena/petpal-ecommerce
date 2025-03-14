import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useDocumentTitle from "../shared/useDocumentTitle";

function Branches() {
  useDocumentTitle("PetPal - Branches");
  const branches = [
    {
      name: "PetPal Main Branch",
      address: "123 Main Street, Makati City, Metro Manila",
      contact: "09123456789",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4345532383735!2d121.02702007510489!3d14.555083785934432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8a1b4a1af5b%3A0x2ab123456789abcd!2sMakati!5e0!3m2!1sen!2sph!4v1700000000000",
    },
    {
      name: "PetPal Quezon City Branch",
      address: "456 Katipunan Avenue, Quezon City, Metro Manila",
      contact: "09129876543",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4345532383735!2d121.045678!3d14.646567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b12c8b4abcd%3A0x2ab987654321efgh!2sQuezon%20City!5e0!3m2!1sen!2sph!4v1700000000001",
    },
    {
      name: "PetPal Cebu Branch",
      address: "789 Colon Street, Cebu City, Cebu",
      contact: "09987654321",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.9345532383735!2d123.89152007510489!3d10.315083785934432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8a1b4a1abcd%3A0x2ab567890123ijkl!2sCebu%20City!5e0!3m2!1sen!2sph!4v1700000000002",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Branches
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12">
            Visit one of our convenient locations to get the best care and
            products for your beloved pets.
          </p>

          {/* Branches Section */}
          <div className="space-y-12">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row gap-6 p-6"
              >
                {/* Branch Details */}
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {branch.name}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    <strong>Address:</strong> {branch.address}
                  </p>
                  <p className="text-gray-600">
                    <strong>Contact:</strong> {branch.contact}
                  </p>
                </div>

                {/* Embedded Google Map */}
                <div className="lg:w-1/2">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="250"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg border"
                    title={`Map of ${branch.name}`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Branches;
