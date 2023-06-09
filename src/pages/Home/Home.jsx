import { useEffect, useState } from 'react';

import { fetchTrendingVideo } from '../../api/Fetch';
import {StyledLink} from './HomeStyled'
export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const getTrendingVideo = async () => {
      try {
        const response = await fetchTrendingVideo();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingVideo();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}
