import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../Services/movieservices";

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    });
  }, []);
  if (!movie) {
    return (
      <>
        <p>fetching movie. . . </p>
      </>
    );
  }
  const truncate = (str, length) => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "..." : str;
  };
  const { title, backdrop_path, release_date, overview } = movie;
  return (
    <div className="w-full h-[550x] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550x] lg:h-[850px] bg-gradient-to-r from-black">
          <img
            className="object-cover object-top w-full h-full"
            src={createImageUrl(backdrop_path,"original")}
            alt={title}
          />
          <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
            <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
            <div className="mt-8 mb-4">
              <button className="px-5 py-2 text-black capitalize bg-gray-300">
                play
              </button>
              <button className="px-5 py-2 ml-4 capitalize border-gray-500">
                Watch Later
              </button>
            </div>
            <p className="text-sm text-gray-400">{release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncate(overview, 165)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
