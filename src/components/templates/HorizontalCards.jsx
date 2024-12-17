import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import noImage from "../../../public/noImage.png";

const HorizontalCards = ({ data = [] }) => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const cardWidth = 300;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-[40vh]">
        <h1 className="text-2xl text-white text-center">
          Nothing to show here
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto mx-auto px-4 ">
      <div className="flex items-center justify-between pb-3">
        <div className="flex-1" />
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto pb-4 p-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
      >
        {data.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="snap-start flex-shrink-0 w-[280px] md:w-[300px] bg-zinc-800/80 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:bg-zinc-800"
          >
            <div className="relative pb-[140%]">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                src={
                  item.profile_path || item.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        item.profile_path || item.poster_path
                      }`
                    : noImage
                }
                alt={item.name || item.title}
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-white mb-2 line-clamp-1">
                {item.name ||
                  item.original_title ||
                  item.original_name ||
                  item.title}
              </h2>
              <p className="text-sm text-zinc-400 line-clamp-2">
                {item.overview}
                <span className="text-blue-500 ml-1 hover:underline">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
