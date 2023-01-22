import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 0 30px;
`;

export const Author = styled.h3`
  margin-bottom: 25px;
  color: #ad8b73;
  font-size: 35px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const Message = styled.h3`
  margin-left: 30px;
  color: #ad8b73;
  font-size: 35px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;
