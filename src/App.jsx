import Home from "./components/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import { SideNavProvider } from "./Context/SideNavContext";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";

const App = () => {
  return (
    <SideNavProvider>
      <div className="w-screen h-screen bg-[#1F1E24] flex overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/movie/details/:id" element={<MovieDetails />} />
          <Route path="/tv" element={<TvShows />}></Route>
          <Route path="/tv/details/:id" element={<TvDetails />} />
          <Route path="/people" element={<People />}></Route>
          <Route path="/people/details/:id" element={<PersonDetails />} />
        </Routes>
      </div>
    </SideNavProvider>
  );
};

export default App;
