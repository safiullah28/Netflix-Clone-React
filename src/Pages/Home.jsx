import React from "react";
import Hero from "../Components/Hero";
import MovieRow from "../Components/MovieRow";
import endpoints from "../Services/movieservices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title='upcoming' url={endpoints.upcoming}/>
      <MovieRow title='popular' url={endpoints.popular}/>
    </>
  );
};

export default Home;
