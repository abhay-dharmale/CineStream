import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

  
  return (
    <div className="w-[18%] h-full border-r-[0.5px] border-zinc-500 p-10 text-white">
      <h1 className="text-xl font-bold flex items-center">
        <i className="text-[#6556CD] ri-tv-line mr-3"></i>
        <span className="text-lg leading-none tracking-tighter">Web App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-md">
        <h1 className="text-white font-semibold text-lg mt-10 mb-5">
          New Feeds<i className="ri-arrow-right-s-line ml-4"></i>
        </h1>
        <Link to='/trending' className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link to='/popular' className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-bard-fill"></i>Popular</Link>
        <Link to='/movies' className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
        <Link to='/tvshows' className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
        <Link to='/people' className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-user-search-fill"></i>People</Link>
      </nav>
      <hr className="mt-10 bg-zinc-500 border-none h-[1px]"/>
      <nav className="flex flex-col text-zinc-400 text-lg">
        <h1 className="text-white font-semibold text-lg mt-10 mb-5">
          Website Info<i className="ri-arrow-right-s-line ml-4"></i>
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-information-fill"></i>About</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white  px-4 py-2 font-medium rounded-lg duration-200 transition-all text-[16px]"><i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
      </nav>
    </div>
  );
};

export default SideNav;
