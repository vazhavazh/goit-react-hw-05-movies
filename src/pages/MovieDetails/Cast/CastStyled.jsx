import styled from 'styled-components';

export const ActorItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Image = styled.img`
  width: 100%;
  max-width: 80px;
  margin-bottom: 20px;
  border-radius: 5px;
`;