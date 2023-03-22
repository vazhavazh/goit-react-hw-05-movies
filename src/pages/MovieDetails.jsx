import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieById } from '../api/Fetch';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

    const { movieId } = useParams();
    


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.error();
      }
    };
    getData();
  }, [movieId]);

    if (!movie) {
        return (
          <h1>Loading ...</h1>
      )
  }

   const { title, overview, release_date, vote_average, poster_path } =
     movie;

   return (
     <>
    
       <h2>{title}</h2>
       <p>{overview}</p>
       <p>Release date: {release_date}</p>
       <p>Rating: {vote_average}</p>
       <img
         src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
         alt={`${title} poster`}
       />
     </>
   );
};
