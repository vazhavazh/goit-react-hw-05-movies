import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <StyledLink to="/" end>
        {' '}
        Home{' '}
      </StyledLink>
      <StyledLink to="/movies"> Movies </StyledLink>
    </nav>
  );
};

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #ff006a;
  }
`;
