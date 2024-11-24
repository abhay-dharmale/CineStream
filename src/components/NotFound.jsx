import { Link, useNavigate } from "react-router-dom";
import "../../public/notfound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-yellow-500 flex flex-col text-white items-center justify-center text-white">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[5%] right-[5%] text-3xl lg:text-md font-bold lg:font-normal ri-close-fill"
      ></Link>
      <h1 className="notfound text-[15vw] lg:text-[10vw]" title="404">
        404
      </h1>
      <p className="text-md text-center px-10">
        The page you are looking for is not available
      </p>
    </div>
  );
};
export default NotFound;
