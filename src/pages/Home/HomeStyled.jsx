import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;

 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover,
  &:focus {
    color: #ff006a;
  }
`;
