import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { items } from "./shop.js";

export const Shop = () => {
  return (
    <>
      <div className="shop-main-container min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-6 py-12 flex-grow">
          <p className="text-5xl font-bold text-center mb-18 font-mono">
            Our Products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 flex flex-col justify-between h-40">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.price}</p>
                  </div>
                  <button className="mt-4 w-full hover:cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
