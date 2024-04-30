import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          data.profile_path || data.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "70% 30%",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[60vh] w-[97%] m-auto rounded-md flex flex-col justify-end items-start p-10"
    >
      <h1 className="text-5xl font-bold text-white mb-7">
        {data.name || data.original_title || data.original_name || data.title}
      </h1>
      <p className="text-zinc-200 w-[60%] mb-3">
        {data.overview.slice(0,250)} .....
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-zinc-200 font-semibold mb-3">Release date: {data.release_date || "No Information"} <i className="ri-album-fill ml-4 mr-1 text-[#8a80cd]"></i>{data.media_type.toUpperCase()}</p>
      <Link className="px-5 py-2 bg-[#6e61c7] rounded text-white hover:bg-[#473c91] font-semibold transition-all">Watch Trailer</Link>
    </div>
  );
};

export default Header;
