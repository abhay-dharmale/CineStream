import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black w-full h-full max-w-9xl mx-auto text-gray-300 py-16 px-8">
      <nav className="fixed top-0 left-0 z-[99] w-full flex h-14 items-center justify-between text-white gap-10 text-md lg:text-xl px-4">
        <Link
          onClick={() => navigate(-1)}
          className="hover: text-[#6556CD] text-2xl lg:text-md font-bold lg:font-normal ri-arrow-left-line"
        ></Link>
      </nav>
      <div className="w-full h-full mx-auto text-center space-y-8">
        <h2 className="text-5xl font-extrabold text-white">
          🎥 About <span className="text-[#6556CD]">CineStream</span>
        </h2>
        <p className="text-lg leading-relaxed italic">
          "Every frame a story, every story an experience."
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
              Our Vision
            </h3>
            <p>
              To bridge the gap between you and your favorite cinematic worlds,
              making discovery, exploration, and immersion effortless.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
              Our Mission
            </h3>
            <p>
              Inspire movie lovers by curating an intuitive platform for every
              genre, era, and storytelling masterpiece.
            </p>
          </div>
        </div>
        <p className="text-lg">
          At MovieApp, we believe cinema is more than entertainment — it's an
          art form, a language, and a journey. Let's embark on this together. 🌟
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all"
        >
          Explore Movies Now
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
