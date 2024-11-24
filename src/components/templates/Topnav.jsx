import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.png";
import { useSideNav } from "../../Context/SideNavContext";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const { toggleSideNav } = useSideNav();

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="relative w-full h-[6vh] p-9 md:px-9 md:h-[10vh] flex items-center justify-center">
      {/* Menu button */}
      <button
        onClick={toggleSideNav}
        className=" z-[50] text-white mr-10 underline rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        {/* <i className="ri-menu-line text-lg"></i> */}menu
      </button>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="relative w-[80vw] md:w-[70%] px-3 py-2 bg-zinc-700 outline-none rounded-bl-md rounded-tl-md text-zinc-200"
        type="text"
        placeholder="search anything"
      />
      <i className="text-zinc-300 text-xl ri-search-line bg-zinc-700 px-3 py-[6px] rounded-br-md rounded-tr-md border-l-[1.2px] border-zinc-500 cursor-pointer"></i>
      {query.length > 0 && (
        <i
          onChange={() => setQuery("")}
          onClick={() => setQuery("")}
          className="absolute right-[28%] text-zinc-300 text-xl cursor-pointer ri-close-fill"
        ></i>
      )}

      <div className="absolute z-[199] w-[68%] md:w-[47.5%] h-fit max-h-[40vh] bg-zinc-700 top-[77%] left-[27%] lg:left-[27.7%] overflow-y-auto overflow-x-hidden rounded-md lg:rounded-none rounded-bl-md rounded-br-md">
        {searches.map((search, index) => (
          <Link
            to={`/${search.media_type}/details/${search.id}`}
            key={index}
            className="flex hover:bg-zinc-600 hover:text-white text-zinc-100 transition-all duration-150 font-semibold tracking-tight border-b-[0.5px] border-zinc-500 w-full px-6 py-3 items-center gap-5 justify-start"
          >
            <img
              className="w-[12vw] h-[10vh] md:w-[8vw] object-cover rounded-lg mr-3 shadow-lg"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noImage
              }
            />
            <span>
              {search.name ||
                search.original_title ||
                search.original_name ||
                search.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
