import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchedMovies } from '../api/Fetch';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (query === '') {
      alert(`Please write something`);
      return;
    }
    try {
      const response = await fetchSearchedMovies(query);
      setMovies(response.results);
      setQuery('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="searchString"
          type="text"
          value={query}
          placeholder="Search movies..."
          onChange={handleInputChange}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
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
