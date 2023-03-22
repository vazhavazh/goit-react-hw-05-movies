import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingVideo } from '../api/Fetch';

export const Home = () => {
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
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
