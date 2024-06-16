import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';

const MovieRow = ({title,url}) => {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        axios.get(url)
        .then((response)=>{
            setMovies(response.data.results);
        })
    },[url]);
    console.log(movies);
  return (
    <>
     <h2 className='p-4 capitalize font-nsans-bold md:text:xl'>{title}</h2> 
     <div className='relative flex items-center'>
        <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
                movies.map((movie)=>{
                    return(
                        <MovieItem movie={movie} key={movie.id}/>
                    )
                })
            }
        </div>

     </div>
    </>
  )
}

export default MovieRow
