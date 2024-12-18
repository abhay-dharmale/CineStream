import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noImage.png";

const Cards = ({ data, title }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {data.map((card, index) => (
        <Link
          key={index}
          to={`/${data.media_type || title}/details/${card.id}`}
          className="relative bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="aspect-[2/3] relative">
            <img
              className="h-full w-full object-cover rounded-t-lg"
              src={
                card.poster_path || card.backdrop_path || card.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      card.poster_path ||
                      card.backdrop_path ||
                      card.profile_path
                    }`
                  : noImage
              }
              alt={card.title || card.name}
            />
            {card.vote_average && (
              <div className="absolute right-2 bottom-2 h-10 w-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                {(card.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </div>

          <div className="p-3">
            <h1 className="text-sm font-semibold text-white line-clamp-2">
              {card.name ||
                card.original_title ||
                card.original_name ||
                card.title}
              <span className="text-blue-500 ml-1">more</span>
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
