import React, { useState } from "react";
import { createImageUrl } from "../Services/movieservices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const MovieItem = ({ movie }) => {
  const { title, backdrop_path, poster_path } = movie;
  const [like, setLike] = useState(false);
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block overflow-hidden rounded-lg cursor-pointer m-2">
      <img
        className="object-cover object-top w-full h-40"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-40 opacity-0 bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs whitespace-normal md:text-sm">
          {movie.title}
        </p>
        <p>
          {like ? (
            <FaHeart
              size={20}
              className="absolute text-gray-300 top-2 left-2"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute text-gray-300 top-2 left-2"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
