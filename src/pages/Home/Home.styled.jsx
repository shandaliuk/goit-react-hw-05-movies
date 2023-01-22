import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 30px;
`;

export const ListLink = styled(Link)`
  display: flex;
  font-size: 25px;
  padding: 5px;
  font-weight: 400;
  color: #ad8b73;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  &:hover {
    color: #e3caa5;
  }
`;
