import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";


const Movies = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
//   const [duration, setDuration] = useState("week");
  const [movie, setmovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = `Movies | MovieApp`


  const getmovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category}?page=${page}`
      );
      if (data.results.length > 0) {
        setmovie((prev) => [...prev, ...data.results]);
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
      getmovie();
    } else {
      setPage(1);
      setmovie([]);
      getmovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
        <div className="w-screen h-[100vh] px-[2%]">
          <div className="w-full flex items-center justify-between">
            <div className="w-[20%]">
              <h1 className="text-xl text-zinc-400 font-semibold hover:text-[#6556CD] cursor-pointer" onClick={() => navigate(-1)}>
                <i
                  onClick={() => navigate(-1)}
                  className="ri-arrow-left-line hover:text-[#6556CD] cursor-pointer text-md"
                ></i>{" "}
                Movies <span className="text-zinc-500 text-md font-regular">({category})</span>
              </h1>
            </div>
            <div className="flex items-center w-[80%]">
              <Topnav />
              <Dropdown
                title="Category"
                options={["popular", "now_playing", "upcoming", "top_rated"]}
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
            dataLength={movie.length}
            next={getmovie}
            hasMore={hasMore}
            loader={<h4 className="text-zinc-300 text-center">Loading...</h4>}
          >
            <Cards data={movie} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
  );
}

export default Movies
