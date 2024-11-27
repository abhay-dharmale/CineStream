import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSideNav } from "../../Context/SideNavContext";

const SideNav = () => {
  const { isOpen, toggleSideNav } = useSideNav();
  return (
    <>
      {/* bg-[#1F1E24] */}
      {/* SideNav */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }  w-[70%] md:w-[50%] lg:w-[60%] h-full bg-black border-r-[.1px] border-zinc-600/20 p-6 lg:px-[10vw] lg:py-10 text-white fixed z-[999] transition-transform duration-300 shadow-lg rounded-l-lg lg:font-normal`}
      >
        <h1 className="lg:text-lg font-semibold flex items-center justify-between mb-6">
          <Link
            to={"/"}
            onClick={toggleSideNav}
            className="flex items-center hover: pointer"
          >
            <i className="text-[#6556CD] ri-tv-line mr-3 text-xl"></i>
            <span className="text-xl lg:text-2xl font-bold">CineStream</span>
          </Link>
          <span
            className="text-sm text-zinc-400 hover:text-white cursor-pointer "
            onClick={toggleSideNav} // Close sideNav on click
          >
            Close
          </span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-[#6556CD]">New Feeds</h2>
          <Link
            onClick={toggleSideNav}
            to="/"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-home-3-fill"></i>Home
          </Link>
          <Link
            onClick={toggleSideNav}
            to="/trending"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-fire-fill"></i>Trending
          </Link>
          <Link
            onClick={toggleSideNav}
            to="/popular"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-bard-fill"></i>Popular
          </Link>
          <Link
            onClick={toggleSideNav}
            to="/movie"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-movie-2-fill"></i>Movies
          </Link>
          <Link
            onClick={toggleSideNav}
            to="/tv"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-tv-2-fill"></i>TV Shows
          </Link>
          <Link
            onClick={toggleSideNav}
            to="/people"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-user-search-fill"></i>People
          </Link>
        </nav>

        {/* Divider */}
        <hr className="my-6 bg-zinc-500 border-none h-[1px]" />

        {/* Footer Links */}
        <nav className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold text-[#6556CD]">Website Info</h2>
          <Link
            to="/about-us"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-information-fill"></i>About
          </Link>
          <Link
            to="/contact-us"
            className="flex items-center hover:bg-[#2E2864] hover:text-white px-4 py-2 font-medium lg:font-normal rounded-lg transition-all duration-200 text-base lg:text-lg"
          >
            <i className="mr-3 ri-phone-fill"></i>Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay to close SideNav when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSideNav}
        ></div>
      )}
    </>
  );
};

export default SideNav;
