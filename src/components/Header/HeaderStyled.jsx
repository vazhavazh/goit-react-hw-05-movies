import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
  display: flex;
  padding: 10px 30px;
  margin-bottom: 20px;
  gap: 50px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &.active {
    color: #ff006a;
  }
`;
