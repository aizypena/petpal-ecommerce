import React from "react";
import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import HomeCarousel from "../components/HomeCarousel";
import popularBrandsPic from "../shared/popularBrands"; // Fixed named import
import Footer from "../components/Footer";

export const Home = () => {
  useDocumentTitle("PetPal - Home");

  return (
    <>
      <div className="home-main-container font-mono">
        {/* Navbar */}
        <Navbar />

        {/* Hero Carousel */}
        <HomeCarousel />

        {/* Popular Brands Section */}
        <section className="popular-brands-container container mx-auto px-4 py-16">
          <div className="popular-brands-container">
            <div className="popular-brands-txt-cont">
              <p className="popular-brands-txt font-bold text-3xl text-center">
                Most Popular Brands
              </p>
            </div>

            {/* Brands Grid */}
            <div className="popular-brands-img-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
              {popularBrandsPic.map((brand, index) => (
                <div
                  key={index}
                  className="brand-item flex flex-col items-center"
                >
                  <img
                    src={brand.imgSrc}
                    alt={brand.altText}
                    className="h-24 w-24 object-contain"
                  />
                  <p className="text-center mt-2 text-sm">{brand.altText}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
