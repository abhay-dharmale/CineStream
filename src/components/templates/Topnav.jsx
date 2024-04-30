import axios  from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.png";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async() =>{
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getSearches();
  },[query])

  return (
    <div className="relative w-full h-[10vh] flex justify-center items-center">
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="relative w-[50%] px-3 py-2 bg-[#4f4d58] outline-none rounded-bl-md rounded-tl-md text-zinc-200"
        type="text"
        placeholder="search anything"
      />
      <i className="text-zinc-300 text-xl ri-search-line bg-[#4f4d58] px-3 py-[6px] rounded-br-md rounded-tr-md border-l-[1.2px] border-zinc-500 cursor-pointer"></i>
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="absolute right-[28%] text-zinc-300 text-xl cursor-pointer ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] h-fit max-h-[40vh] bg-zinc-700 top-[77%] overflow-y-auto overflow-x-hidden rounded-bl-md rounded-br-md">
      {searches.map((search, index) =>(
        <Link key={index} className="flex hover:bg-zinc-500 hover:text-white text-zinc-100 transition-all duration-150 font-semibold tracking-tight border-b-[0.5px] border-zinc-500 w-full px-6 py-3 items-center gap-5 justify-start">
          <img className="w-[8vw] object-cover rounded-lg mr-3 shadow-lg" src={search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : noImage} />
          <span>{search.name || search.original_title || search.original_name || search.title}</span>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Topnav;
