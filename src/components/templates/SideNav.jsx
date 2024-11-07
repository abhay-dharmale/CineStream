// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SideNav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSideNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Menu button */}
//       <button
//         onClick={toggleSideNav}
//         className="lg:hidden absolute top-1 left-2 z-[50] text-white bg-zinc-900 px-2 py-1 rounded-md m-4"
//       >
//         <i className="ri-menu-line"></i>
//       </button>

//       {/* SideNav */}
//       <div
//         className={`${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 w-[65%] md:w-[45%] lg:w-[18%] h-full border-r-[0.5px] bg-zinc-900 border-zinc-500 p-6 lg:p-10 text-white fixed lg:relative z-[99] transition-transform duration-300`}
//       >
//         <h1 className="lg:text-xl font-bold flex items-center justify-between">
//           <span>
//             <i className="text-[#6556CD] ri-tv-line mr-3"></i>
//             <span className="text-lg leading-none tracking-tighter">
//               Web App
//             </span>
//           </span>
//           <span
//             className="font-normal underline text-zinc-400 tracking-wide cursor-pointer lg:hidden"
//             onClick={toggleSideNav} // Close sideNav on click
//           >
//             close
//           </span>
//         </h1>
//         <nav className="flex flex-col text-zinc-400 text-md">
//           <h1 className="text-white font-semibold text-lg mt-10 mb-5">
//             New Feeds<i className="ri-arrow-right-s-line ml-4"></i>
//           </h1>
//           <Link
//             to="/trending"
//             className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"
//           >
//             <i className="mr-2 ri-fire-fill"></i>Trending
//           </Link>
//           <Link
//             to="/popular"
//             className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"
//           >
//             <i className="mr-2 ri-bard-fill"></i>Popular
//           </Link>
//           <Link
//             to="/movies"
//             className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"
//           >
//             <i className="mr-2 ri-movie-2-fill"></i>Movies
//           </Link>
//           <Link
//             to="/tvshows"
//             className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"
//           >
//             <i className="mr-2 ri-tv-2-fill"></i>TV Shows
//           </Link>
//           <Link
//             to="/people"
//             className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"
//           >
//             <i className="mr-2 ri-user-search-fill"></i>People
//           </Link>
//         </nav>
//         <hr className="mt-6 lg:mt-10 bg-zinc-500 border-none h-[1px]" />
//         <nav className="flex flex-col text-zinc-400 text-lg">
//           <h1 className="text-white font-semibold text-lg mt-6 lg:mt-10 mb-5">
//             Website Info<i className="ri-arrow-right-s-line ml-4"></i>
//           </h1>
//           <Link className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]">
//             <i className="mr-2 ri-information-fill"></i>About
//           </Link>
//           <Link className="hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]">
//             <i className="mr-2 ri-phone-fill"></i>Contact Us
//           </Link>
//         </nav>
//       </div>

//       {/* Overlay to close SideNav when clicking outside */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
//           onClick={toggleSideNav}
//         ></div>
//       )}
//     </>
//   );
// };

// export default SideNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu button */}
      <button
        onClick={toggleSideNav}
        className="lg:hidden absolute top-4 left-4 z-[50] text-white bg-zinc-800 p-2 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* SideNav */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-[70%] md:w-[50%] lg:w-[20%] h-full bg-gradient-to-b from-[#2f2f2f] to-[#1a1a1a] border-r-[1px] border-zinc-600 p-6 lg:p-8 text-white fixed lg:relative z-[99] transition-transform duration-300 shadow-lg rounded-l-lg`}
      >
        <h1 className="lg:text-xl font-semibold flex items-center justify-between mb-6">
          <span className="flex items-center">
            <i className="text-[#6556CD] ri-tv-line mr-3 text-xl"></i>
            <span className="text-xl font-bold">Web App</span>
          </span>
          <span
            className="text-sm text-zinc-400 hover:text-white cursor-pointer lg:hidden"
            onClick={toggleSideNav} // Close sideNav on click
          >
            Close
          </span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-col">
          <h2 className="text-lg font-semibold text-[#6556CD]">New Feeds</h2>
          <Link
            to="/trending"
            className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base"
          >
            <i className="mr-3 ri-fire-fill"></i>Trending
          </Link>
          <Link
            to="/popular"
            className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base"
          >
            <i className="mr-3 ri-bard-fill"></i>Popular
          </Link>
          <Link
            to="/movies"
            className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base"
          >
            <i className="mr-3 ri-movie-2-fill"></i>Movies
          </Link>
          <Link
            to="/tvshows"
            className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base"
          >
            <i className="mr-3 ri-tv-2-fill"></i>TV Shows
          </Link>
          <Link
            to="/people"
            className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base"
          >
            <i className="mr-3 ri-user-search-fill"></i>People
          </Link>
        </nav>

        {/* Divider */}
        <hr className="my-6 bg-zinc-500 border-none h-[1px]" />

        {/* Footer Links */}
        <nav className="flex flex-col">
          <h2 className="text-lg font-semibold text-[#6556CD]">Website Info</h2>
          <Link className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base">
            <i className="mr-3 ri-information-fill"></i>About
          </Link>
          <Link className="flex items-center hover:bg-[#6556CD] hover:text-white px-4 py-2 font-medium rounded-lg transition-all duration-200 text-base">
            <i className="mr-3 ri-phone-fill"></i>Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay to close SideNav when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSideNav}
        ></div>
      )}
    </>
  );
};

export default SideNav;
