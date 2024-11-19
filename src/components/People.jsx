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

const People = () => {
  const navigate = useNavigate();
  const { isOpen, toggleSideNav } = useSideNav();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "People | MovieApp";
  }, []);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPerson([]);
    setHasMore(true);
    getPerson();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="flex h-full w-screen">
      <SideNav toggleSideNav={toggleSideNav} isOpen={isOpen} />

      <div className="flex-grow overflow-y-auto px-[2%]">
        <div className="w-full flex items-center justify-between py-4 bg-zinc-800 lg:bg-[#1F1E24] lg:py-4">
          <h1
            className="text-sm lg:text-lg flex text-zinc-400 font-semibold cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <span className="hover:text-[#6556CD]">
              <i className="ri-arrow-left-line mr-2"></i> People
            </span>
            <span className="flex ml-2 items-center">
              (<span className="text-zinc-500 text-sm">{category}</span>)
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <Topnav />
          <div className="px-9 flex w-full items-center justify-center">
            {/* If you want to add category dropdown in the future */}
            {/* <Dropdown
              title="Category"
              options={["popular"]}
              func={(e) => setCategory(e.target.value)}
            /> */}
          </div>
          <hr className="h-1 opacity-40 mt-10 w-full lg:hidden" />
        </div>

        <InfiniteScroll
          dataLength={person.length}
          next={getPerson}
          hasMore={hasMore}
          loader={<div className="text-zinc-300 text-center">Loading...</div>}
          className="px-4"
          scrollableTarget="scrollableDiv"
        >
          <Cards data={person} title="people" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
