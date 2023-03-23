import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 20px;
  
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
export const GoBackBtn = styled(NavLink)`
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

export const Title = styled.h2`
  font-size: 30px;
  margin: 20px 0;
`;

export const Overview = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #1c1b29;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #ff006a;
    }
  }
`;

export const Loading = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  gap: 40px;
`;