import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="min-h-[60px] tracking-wide font-mono">
        {/* Top Bar */}
        <section className="bg-[#005CB9] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
          <button
            type="button"
            className="text-white text-sm flex items-center"
          >
            {/* Correct Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="mr-3"
              viewBox="0 0 512 512"
            >
              <path d="M511.1 387.1l-23.27 84.25c-3.301 11.92-13.99 20.48-26.41 20.48C228.7 492 20 283.3 20 50.56c0-12.43 8.563-23.11 20.48-26.41L124.8 1.88c11.97-3.371 24.58 1.611 31.3 12.06l53.25 83.88c6.359 10.06 5.125 23.19-3.094 31.41l-36.75 36.75c35.5 71.88 94.44 130.8 166.3 166.3l36.75-36.75c8.219-8.219 21.34-9.438 31.41-3.094l83.88 53.25C509.5 363.5 514.5 376.1 511.1 387.1z" />
            </svg>
            09123456789
          </button>

          <span className="border-l h-3 mx-6 max-sm:hidden border-white"></span>

          <button
            type="button"
            className="text-white text-sm max-sm:my-2 flex items-center"
          >
            {/* Correct Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="mr-3"
              viewBox="0 0 512 512"
            >
              <path d="M502.3 190.8 327.4 338.5c-24.12 20.62-59.69 20.62-83.81 0L9.656 190.8c-6.609-5.656-1.188-16.8 7.969-16.8h476.7C503.5 174 508.9 185.1 502.3 190.8zM512 395.1c0 20.88-17.05 38.01-37.94 38.01H37.94C17.06 434.1 0 417 0 395.1V166.3l218.7 186.8c30.53 26.09 76.16 26.09 106.7 0L512 166.3V395.1z" />
            </svg>
            petpal@email.com
          </button>

          <div className="sm:ml-auto text-white">
            <Link to="/login" className="text-white text-sm mr-1">
              Sign In
            </Link>{" "}
            /
            <Link to="/create-account" className="text-white text-sm ml-1">
              Sign Up
            </Link>
          </div>
        </section>

        {/* Main Navbar */}
        <div className="flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-[#FFC600]">
          <Link to={"/"}>
            <img
              src="PetPalNavPic.png"
              alt="logo"
              className="sm:w-[140px] w-[130px]"
            />
          </Link>

          {/* Mobile Menu */}
          <div
            id="collapseMenu"
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:!flex lg:items-center max-lg:fixed max-lg:bg-[#FFC600] max-lg:w-2/3 max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-[#FFC600] w-9 h-9 flex items-center justify-center border"
            >
              {/* Correct Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                viewBox="0 0 384 512"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L192 237.3l-73.38 73.38c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0l96 96z" />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="lg:!flex lg:gap-x-10 max-lg:space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/shop", label: "Shop" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/branches", label: "Branches" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li
                  key={item.path}
                  className={`relative ${
                    isActive(item.path)
                      ? "lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4"
                      : "lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300"
                  }`}
                >
                  <Link
                    to={item.path}
                    className="text-black block text-[15px] font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center max-sm:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 576 512"
              className="cursor-pointer fill-black"
            >
              <path d="M528.12 301.319l47.273-208C578.611 77.197 566.872 64 552 64H128L121.1 34.746A32 32 0 0 0 90.746 8.001H24A24 24 0 0 0 0 32c0 13.255 10.745 24 24 24h52.746l70.254 312a64 64 0 1 0 77.654 8h166.692a64 64 0 1 0 70.746-32l8.585-37.6a32 32 0 0 0-32.321-37.081H195.515l-8.585-38.172H520a32 32 0 0 0 31.242-24.828zM208 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm224 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
            </svg>
          </div>

          {/* Hamburger Icon */}
          <button onClick={toggleMobileMenu} className="lg:hidden ml-6">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14M3 10h14M3 15h14"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
