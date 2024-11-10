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
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { isOpen, toggleSideNav } = useSideNav();

  document.title = `Popular | MovieApp`;

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="flex flex-col h-screen bg-black">
      <SideNav toggleSideNav={toggleSideNav} isOpen={isOpen} />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4 bg-black">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] cursor-pointer text-xl"
          />
          <h1 className="text-xl text-zinc-400 font-semibold">
            Popular <span className="text-zinc-500 text-md font-normal">({category})</span>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <div className="w-full md:w-auto">
            <Topnav />
          </div>
          <div className="w-full md:w-auto">
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-auto">
        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasMore}
          loader={<h4 className="text-zinc-300 text-center py-4">Loading...</h4>}
          scrollThreshold={0.9}
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;