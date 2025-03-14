import React from "react";
import { Link } from "react-router-dom";
import footerItems from "../shared/footerItems";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-white m-0 p-0">
        <div className="w-full">
          {/* Section 1 */}
          <section className="flex flex-wrap justify-between items-center mx-auto py-4 md:py-8 px-4 md:px-16 lg:px-32 xl:px-72 bg-petPalBlue">
            {footerItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index === 2 ? "w-full md:w-auto" : ""
                }`}
              >
                {/* Rendering inline SVG directly */}
                <div className="mb-2">{item.imgSrc}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </section>

          {/* Section 2 - Logo Section */}
          <section className="w-full bg-petPalYellow-light text-white footer-section-2">
            <div className="w-full">
              <div className="logo-container flex justify-center items-center py-10">
                <Link to="/">
                  <img
                    src="PetPalNavPic.png"
                    alt="PetPal Logo"
                    className="w-40"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 3 (Optional future content) */}
          <section className="footer-section-3 mt-4 bg-petPalYellow-dark">
            {/* You can add additional footer content here */}
          </section>
        </div>
      </footer>
    </>
  );
}
