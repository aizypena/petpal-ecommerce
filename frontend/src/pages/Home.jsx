import React from "react";
import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import HomeCarousel from "../components/HomeCarousel";
import popularBrandsPic from "../shared/popularBrands";
import Footer from "../components/Footer";

export const Home = () => {
  useDocumentTitle("PetPal");

  return (
    <>
      <div className="home-main-container font-mono">
        <Navbar />
        <HomeCarousel />
        <section className="popular-brands-container container mx-auto px-4 py-16">
          <div className="popular-brands-container">
            <div className="popular-brands-txt-cont">
              <p className="popular-brands-txt font-bold text-3xl">
                Most Popular Brands
              </p>
            </div>
            <div className="popular-brands-img-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
                  <p className="text-center mt-2">{brand.altText}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
