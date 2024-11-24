import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import SideNav from "./templates/SideNav";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSideNav } from "../Context/SideNavContext";

const Movies = () => {
  const navigate = useNavigate();
  const { isOpen, toggleSideNav } = useSideNav();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "Movies | CineStream";
  }, []);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results && data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setHasMore(false);
    }
  };

  const refreshHandler = async () => {
    setPage(1);
    setMovie([]);
    setHasMore(true);
    await getMovie();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="flex h-full w-screen">
      <SideNav toggleSideNav={toggleSideNav} isOpen={isOpen} />

      <div className="flex-grow overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#1F1E24] shadow-md">
          <div className="px-4 py-3 md:px-6 md:py-4">
            {/* Back Navigation */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-zinc-700 rounded-full transition-colors"
              >
                <i className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD]" />
              </button>
              <h1 className="text-lg md:text-xl text-zinc-400 font-semibold">
                Movies
                <span className="ml-2 text-zinc-500 text-base font-normal">
                  ({category.replace(/_/g, " ")})
                </span>
              </h1>
            </div>

            {/* Navigation Bar */}
            <div className="mt-3 md:mt-4 flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <div className="flex-grow">
                <Topnav />
              </div>
              <div className="w-full flex items-center md:w-auto">
                <Dropdown
                  title="Category"
                  options={["popular", "now_playing", "upcoming", "top_rated"]}
                  func={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                />
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-zinc-800 w-full" />
        </div>

        {/* Content */}
        <div className="px-2 md:px-4 pb-4">
          <InfiniteScroll
            dataLength={movie.length}
            next={getMovie}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center py-4">
                <div className="text-zinc-300 text-center px-4 py-2 bg-zinc-800/50 rounded-full">
                  Loading...
                </div>
              </div>
            }
            scrollThreshold={0.9}
            endMessage={
              <div className="text-center py-4 text-zinc-400">
                No more movies to display.
              </div>
            }
          >
            <Cards data={movie} title="movie" />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
