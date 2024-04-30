import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import Cards from "./templates/Cards";
import { useState } from "react";
import axios from "../utils/axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("week");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-[100vh] px-[2%]">
      <div className="w-full flex items-center justify-between">
        <div className="w-[20%]">
          <h1 className="text-xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line hover:text-[#6556CD] cursor-pointer text-md"
            ></i>{" "}
            Trending
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
          <Dropdown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h4 className="text-zinc-300 text-center">Loading...</h4>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
