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

  document.title = `Movies | MovieApp`;

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="flex flex-col h-screen bg-zinc-900">
      <SideNav toggleSideNav={toggleSideNav} isOpen={isOpen} />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4 bg-zinc-900">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] cursor-pointer text-xl"
          />
          <h1 className="text-xl text-zinc-400 font-semibold">
            Movies{" "}
            <span className="text-zinc-500 text-md font-normal">
              ({category.replace(/_/g, " ")})
            </span>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <div className="w-full md:w-auto">
            <Topnav />
          </div>
          <div className="w-full md:w-auto">
            <Dropdown
              title="Category"
              options={["popular", "now_playing", "upcoming", "top_rated"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-auto">
        <InfiniteScroll
          dataLength={movie.length}
          next={getMovie}
          hasMore={hasMore}
          loader={<h4 className="text-zinc-300 text-center py-4">Loading...</h4>}
          scrollThreshold={0.9}
        >
          <Cards data={movie} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;