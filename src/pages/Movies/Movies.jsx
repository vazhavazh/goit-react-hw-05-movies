import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from '../../api/Fetch';
import { StyledLink, Button, InputStyled, Wrapper } from './MoviesStyled';
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = e => {
    const value = e.target.value.toLowerCase();
    setQuery(prevQuery => value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (query === '' || !searchParams) {
      alert(`Please write something`);
      return;
    }
    try {
      const response = await fetchSearchedMovies(query);
      setMovies(response.results);
      setSearchParams(`query=${query}`);
      setQuery('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <Wrapper>
          <InputStyled
            name="searchString"
            type="text"
            value={query}
            placeholder="Search movies..."
            onChange={handleInputChange}
            autoFocus
          />
          <Button type="submit">Search</Button>
      </Wrapper>
      </form>
      <ul>
        {movies.map(movie => (
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
