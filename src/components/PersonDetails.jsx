import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import HorizontalCards from "./templates/HorizontalCards";
import noImage from "../../public/noImage.png";
import TopNav from "./templates/Topnav";
import { useSideNav } from "../Context/SideNavContext";
import SideNav from "./templates/SideNav";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const { isOpen, toggleSideNav } = useSideNav();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,0.9), rgba(0,0,0,0.8))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen overflow-y-auto text-zinc-100"
    >
      <SideNav toggleSideNav={toggleSideNav} isOpen={isOpen} />
      <nav
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))`,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        className="fixed top-0 left-0 z-[99] w-full flex h-14 items-center justify-between text-white gap-10 text-md lg:text-xl px-4"
      >
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] text-2xl lg:text-md font-bold lg:font-normal ri-arrow-left-line"
        ></Link>
        <div className="flex gap-5 lg:gap-10 mr-0 lg:mr-[10vw]">
          {info.externalid?.facebook_id && (
            <a
              target="_blank"
              href={`https://facebook.com/${info.externalid.facebook_id}`}
              className="hover:text-blue-500 transition-colors"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
          )}
          {info.externalid?.instagram_id && (
            <a
              target="_blank"
              href={`https://instagram.com/${info.externalid.instagram_id}`}
              className="hover:text-pink-500 transition-colors"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          )}
          {info.externalid?.imdb_id && (
            <a
              target="_blank"
              href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}
              className="hover:text-yellow-500 transition-colors"
            >
              imdb
            </a>
          )}
        </div>
      </nav>
      <div className="w-full max-w-screen-2xl mx-auto py-8 px-4 lg:px-8 mt-[10%] lg:mt-[3%]">
        <TopNav />
        <div className="w-full flex flex-col lg:flex-row mt-[5vh]">
          <div className="">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] w-full lg:w-[30vw] rounded-md object-cover"
              src={
                info.details.profile_path
                  ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`
                  : noImage
              }
              alt={info.details.name}
            />
            <div className="mt-[7vh] md:mt-[2vw]">
              <div className="bg-gray-800 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4">Personal Info</h2>

                <div className="space-y-4">
                  {info.details.known_for_department && (
                    <div>
                      <h3 className="text-zinc-400 text-sm">Known For</h3>
                      <p className="text-white">
                        {info.details.known_for_department}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-zinc-400 text-sm">Gender</h3>
                    <p>
                      {info.details.gender === 1
                        ? "Female"
                        : info.details.gender === 2
                        ? "Male"
                        : "Not specified"}
                    </p>
                  </div>

                  {info.details.birthday && (
                    <div>
                      <h3 className="text-zinc-400 text-sm">Birthday</h3>
                      <p>
                        {new Date(info.details.birthday).toLocaleDateString()}
                      </p>
                      {!info.details.deathday && (
                        <p className="text-sm text-zinc-400">
                          (
                          {Math.floor(
                            (new Date() - new Date(info.details.birthday)) /
                              (365.25 * 24 * 60 * 60 * 1000)
                          )}{" "}
                          years old)
                        </p>
                      )}
                    </div>
                  )}

                  {info.details.place_of_birth && (
                    <div>
                      <h3 className="text-zinc-400 text-sm">Place of Birth</h3>
                      <p>{info.details.place_of_birth}</p>
                    </div>
                  )}

                  {info.details.deathday && (
                    <div>
                      <h3 className="text-zinc-400 text-sm">Died</h3>
                      <p>
                        {new Date(info.details.deathday).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-zinc-400">
                        (Age:{" "}
                        {Math.floor(
                          (new Date(info.details.deathday) -
                            new Date(info.details.birthday)) /
                            (365.25 * 24 * 60 * 60 * 1000)
                        )}
                        )
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-fit ml-0 mt-[7vh] lg:mt-0 lg:ml-10 relative">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:font-extrabold text-white">
              {info.details.name}
            </h1>

            <div className="lg:h-[70vh]">
              {info.details.biography && (
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold mb-2">Biography</h2>
                  <p className="text-sm text-zinc-200">
                    {info.details.biography}
                  </p>
                </div>
              )}

              {/* {info.movieCredits.cast && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Known For</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {info.movieCredits.cast.map((work) => (
                      <Link
                        key={work.id}
                        to={`/${work.media_type}/${work.id}`}
                        className="transform transition-all hover:scale-105"
                      >
                        <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg">
                          <img
                            src={
                              work.poster_path
                                ? `https://image.tmdb.org/t/p/w500${work.poster_path}`
                                : noImage
                            }
                            alt={work.title || work.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-2">
                            <h3 className="text-sm font-semibold truncate">
                              {work.title || work.name}
                            </h3>
                            {(work.release_date || work.first_air_date) && (
                              <p className="text-xs text-zinc-400">
                                {new Date(
                                  work.release_date || work.first_air_date
                                ).getFullYear()}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

        {/* Acting Credits */}
        {info.movieCredits?.cast && info.movieCredits.cast.length > 0 && (
          <div className="mt-[7vh]">
            <h1 className="text-2xl text-white">Movie Credits</h1>
            <HorizontalCards
              data={info.movieCredits.cast.map((item) => ({
                ...item,
                media_type: "movie",
              }))}
            />
          </div>
        )}

        {info.tvCredits?.cast && info.tvCredits.cast.length > 0 && (
          <div className="mt-[7vh]">
            <h1 className="text-2xl text-white">TV Credits</h1>
            <HorizontalCards
              data={info.tvCredits.cast.map((item) => ({
                ...item,
                media_type: "tv",
              }))}
            />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
