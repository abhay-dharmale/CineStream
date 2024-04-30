import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";


const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
//   const [duration, setDuration] = useState("week");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
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
    <div className="w-screen h-[100vh] px-[2%]">
      <div className="w-full flex items-center justify-between">
        <div className="w-[20%]">
          <h1 className="text-xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line hover:text-[#6556CD] cursor-pointer text-md"
            ></i>{" "}
            Popular
          </h1>
        </div>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[10px]"></div>
          {/* <Dropdown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          /> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h4 className="text-zinc-300 text-center">Loading...</h4>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
