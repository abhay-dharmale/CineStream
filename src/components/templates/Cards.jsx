import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="w-full justify-center h-[86.5vh] py-6 flex gap-10 flex-wrap overflow-y-auto">
      {data.map((card, index) => (
        <Link
          key={index}
          className="w-[15%] h-[49.5vh] rounded-md bg-zinc-800 p-1 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] overflow-hidden"
        >
          <img
            className="h-[40vh] w-full object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/original/${
              card.poster_path || card.backdrop_path
            }`}
          />
          <div className="px-2 py-1">
            <h1 className="text-md font-semibold text-white my-3 w-[90%] leading-1">
              {(
                card.name ||
                card.original_title ||
                card.original_name ||
                card.title
              ).slice(0, 24)}{" "}
              ...<span className="text-blue-500">more</span>
            </h1>
            {/* <p className="text-zinc-400 mb-3 text-sm">
              {data.overview.slice(0, 100)} ....
              <span className="text-blue-500">more</span>
            </p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
