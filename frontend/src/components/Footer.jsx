import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ footerItems }) => {
  return (
    <footer className="w-full text-white m-0 p-0">
      <div className="w-full">
        {/* section 1 */}
        <section className="flex flex-wrap justify-between items-center mx-auto py-4 md:py-8 px-4 md:px-16 lg:px-32 xl:px-72 bg-petPalBlue">
          {footerItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 2 ? "w-full md:w-auto" : ""
              }`}
            >
              <img src={item.imgSrc} alt={item.altText} className="mb-2" />
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        {/* section 2 */}
        <section className="w-full bg-petPalYellow-light text-white footer-section-2">
          <div className="w-full">
            <div className="logo-container flex justify-center items-center py-10">
              <Link to="/">
                <img src="PetPalNavPic.png" alt="PetPal Logo" />
              </Link>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="footer-section-3 mt-4 bg-petPalYellow-dark">
          {/* Add content for section 3 */}
        </section>
      </div>
    </footer>
  );
};
