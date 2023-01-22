import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 4px solid #ad8b73;
`;

export const NavList = styled.ul`
  display: flex;
  column-gap: 30px;
  padding-left: 30px;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  column-gap: 10px;
  padding: 15px 0;
  font-size: 30px;
  font-weight: 800;
  color: #e3caa5;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: color 250ms ease;

  &.active {
    color: #ad8b73;
  }

  &:hover {
    color: #ceab93;
  }
`;
