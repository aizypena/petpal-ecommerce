import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="min-h-[60px] tracking-wide font-mono">
        {/* Top Bar */}
        <section className="bg-[#005CB9] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
          <button type="button" className="text-white text-sm">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-3 inline-block"
              viewBox="0 0 482.6 482.6"
            >
              <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4..." />
            </svg>
            09123456789
          </button>
          <span className="border-l h-3 mx-6 max-sm:hidden border-white"></span>
          <button type="button" className="text-white text-sm max-sm:my-2">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-3 inline-block"
              viewBox="0 0 479.058 479.058"
            >
              <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028..." />
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
        <div className="flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-[#FFC600] lg:gap-y-4 gap-y-6 gap-x-4">
          {/* Logo */}
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
            } lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-[#FFC600] max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-[#FFC600] w-9 h-9 flex items-center justify-center border"
            >
              <svg
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288..." />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#FFC600] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">
                  <img src="PetPalNavPic.png" alt="logo" className="w-36" />
                </a>
              </li>
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
                  className={`max-lg:border-b max-lg:py-3 relative ${
                    isActive(item.path)
                      ? "lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4"
                      : "lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300"
                  }`}
                >
                  <Link
                    to={item.path}
                    className="text-black block text-[15px] font-medium"
                    onClick={toggleMobileMenu} // auto close on mobile
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons and Cart */}
          <div className="flex items-center max-sm:ml-auto">
            <ul className="flex space-x-4">
              <li className="relative px-1">
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                    className="cursor-pointer fill-black inline-block"
                  >
                    <path d="M528.12 301.319l47.273-208C578.611 77.197 566.872 64 552 64H128L121.1 34.746A32 32 0 0 0 90.746 8.001H24a24 24 0 0 0 0 48h52.746l70.254 312.001a63.999 63.999 0 1 0 77.654 8.001h166.692a63.999 63.999 0 1 0 70.746-31.999l8.585-37.6a32 32 0 0 0-32.321-37.081H195.515l-8.585-38.172h309.948a32 32 0 0 0 31.242-24.831zM216 464a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32zm224 0a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32z" />
                  </svg>
                  <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    0
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMobileMenu} className="lg:hidden ml-6">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
