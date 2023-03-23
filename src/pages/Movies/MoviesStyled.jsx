import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;

 
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover,
  &:focus {
    color: #ff006a;
  }
`;
export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #ff006a;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #ab0047;
  }
`;

export const InputStyled = styled.input`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  transition: box-shadow 0.3s ease;
  

  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  width: 200px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;