import styled from 'styled-components';

import { Route, Routes, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Movies} from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Cast';
import { NotFound } from './pages/NotFound';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          {' '}
          Home{' '}
        </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
