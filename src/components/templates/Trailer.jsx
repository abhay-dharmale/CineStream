import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div
      className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex
        items-center justify-center"
    >
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[5%] right-[2%] hover: text-[#6556CD] text-2xl lg:text-3xl font-bold lg:font-normal ri-close-fill"
      ></Link>
      {ytvideo ? (
        <ReactPlayer url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default Trailer;
