import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
  //   const [duration, setDuration] = useState("week");
    const [person, setperson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
    document.title = `TV Shows | MovieApp`

    const getperson = async () => {
        try {
          const { data } = await axios.get(
            `/person/${category}?page=${page}`
          );
          if (data.results.length > 0) {
            setperson((prev) => [...prev, ...data.results]);
            setPage(page + 1);
          } else {
            setHasMore(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const refreshHandler = () => {
        if (person.length === 0) {
          getperson();
        } else {
          setPage(1);
          setperson([]);
          getperson();
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);

  return person.length > 0 ? (
        <div className="w-screen h-[100vh] px-[2%]">
          <div className="w-full flex items-center justify-between">
            <div className="w-[20%]">
              <h1 className="text-xl text-zinc-400 font-semibold cursor-pointer hover:text-[#6556CD]" onClick={() => navigate(-1)}>
                <i
                  onClick={() => navigate(-1)}
                  className="ri-arrow-left-line hover:text-[#6556CD] cursor-pointer text-md"
                ></i>{" "}
                People <span className="text-zinc-500 text-md font-regular">({category})</span>
              </h1>
            </div>
            <div className="flex items-center w-[80%]">
              <Topnav />
              {/* <Dropdown
                title="Category"
                options={["on_the_air", "popular", "top_rated", "airing_today"]}
                func={(e) => setCategory(e.target.value)}
              /> */}
              <div className="w-[10px]"></div>
              {/* <Dropdown
                title="Duration"
                options={["day", "week"]}
                func={(e) => setDuration(e.target.value)}
              /> */}
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={person.length}
            next={getperson}
            hasMore={hasMore}
            loader={<h4 className="text-zinc-300 text-center">Loading...</h4>}
          >
            <Cards data={person} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
  );
}

export default People
