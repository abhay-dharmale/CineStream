import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SeasonsDisplay = ({ seasons }) => {
  const scrollContainer = useRef(null);
  const [shouldShowButtons, setShouldShowButtons] = useState(false);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const cardWidth = window.innerWidth >= 768 ? 250 : 200;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkButtonVisibility = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // sm screen
        setShouldShowButtons(seasons.length > 1);
      } else if (width < 1024) {
        // md screen
        setShouldShowButtons(seasons.length > 2);
      } else {
        // lg screen
        setShouldShowButtons(seasons.length > 4);
      }
    };

    // Initial check
    checkButtonVisibility();

    // Add resize listener
    window.addEventListener("resize", checkButtonVisibility);

    // Cleanup
    return () => window.removeEventListener("resize", checkButtonVisibility);
  }, [seasons.length]);

  return (
    <div className="w-full w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4 mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Seasons</h1>

        {shouldShowButtons && (
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
        )}
      </div>

      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto pb-4 p-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
      >
        {seasons.map((season, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 h-fit w-[200px] md:w-[250px] bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="relative pb-[140%]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                alt={season.name}
                loading="lazy"
              />
            </div>

            <div className="p-3 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-lg font-bold text-white mb-1">
                {season.name}
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {season.episode_count} Episodes
                </span>
                <span className="text-sm text-gray-300">
                  {season.air_date
                    ? new Date(season.air_date).getFullYear()
                    : "TBA"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsDisplay;
