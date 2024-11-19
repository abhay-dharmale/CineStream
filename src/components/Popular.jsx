import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSideNav } from "../Context/SideNavContext";
import SideNav from "./templates/SideNav";

const Popular = () => {
  const navigate = useNavigate();
  const { isOpen, toggleSideNav } = useSideNav();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "Popular | MovieApp";
  }, []);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching popular data:", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPopular([]);
    setHasMore(true);
    getPopular();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
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
                Popular
                <span className="ml-2 text-zinc-500 text-base font-normal">
                  ({category})
                </span>
              </h1>
            </div>

            {/* Navigation Bar */}
            <div className="mt-3 md:mt-0 flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              {/* Search and filters wrapper */}
              <div className="flex-grow">
                <Topnav />
              </div>
              {/* Category dropdown */}
              <div className="w-full md:w-auto">
                <Dropdown
                  title="Category"
                  options={["tv", "movie"]}
                  func={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-zinc-800 w-full" />
        </div>

        {/* Content */}
        <div className="px-2 md:px-4 pb-4">
          <InfiniteScroll
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center py-4">
                <div className="text-zinc-300 text-center px-4 py-2 bg-zinc-800/50 rounded-full">
                  Loading...
                </div>
              </div>
            }
            scrollThreshold={0.9}
          >
            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
