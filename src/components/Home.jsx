import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-full h-full overflow-y-auto ">
        <Topnav />
        <Header data={wallpaper} />

        <div className="p-6 flex justify-between">
          <h1 className="text-xl text-zinc-300 font-bold ">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};
export default Home;
