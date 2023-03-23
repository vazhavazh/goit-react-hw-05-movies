import { Nav, StyledLink } from './HeaderStyled';

export const Header = () => {
  return (
    <Nav>
      <StyledLink to="/" end>
        {' '}
        Home{' '}
      </StyledLink>
      <StyledLink to="/movies"> Movies </StyledLink>
    </Nav>
  );
};
