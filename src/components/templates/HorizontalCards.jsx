import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data, func }) => {
  return (
    <div className="w-full h-[80vh] p-5 ">
      <div className="w-full flex mb-5 overflow-y-hidden">
        {data.map((data, index) => (
          <div
            key={index}
            className="min-w-[60%] max-h-fit md:min-w-[40%] lg:min-w-[20%] md:max-h-full mr-5 mb-5 overflow-x-auto rounded-md bg-zinc-800 p-1"
          >
            <img
              className="w-full object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${
                data.profile_path || data.poster_path
              }`}
            />
            <div className="px-2">
              <h1 className="text-sm md:text-xl font-bold text-white my-2 md:my-3">
                {data.name ||
                  data.original_title ||
                  data.original_name ||
                  data.title}
              </h1>
              <p className="text-sm md:text-md leading-none tracking-tight text-zinc-400 mb-3">
                {data.overview.slice(0, 70)} ....
                <span className="text-blue-500">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
