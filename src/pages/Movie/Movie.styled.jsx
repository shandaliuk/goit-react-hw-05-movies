import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SiteLink = styled(Link)`
  display: flex;
  column-gap: 5px;
  margin: 30px;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  font-size: 19px;
  font-weight: 800;
  color: #e3caa5;
  background-color: #ad8b73;
  border: 1px solid #e3caa5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  &:hover {
    color: #ad8b73;
    background-color: #e3caa5;
    border: 1px solid #ad8b73;
  }
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  column-gap: 40px;
  margin: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  color: #ad8b73;
  font-size: 20px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const AdditionalInfo = styled.h4`
  margin-left: 30px;
  color: #ad8b73;
  font-size: 30px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const LinksList = styled.ul`
  display: flex;
  column-gap: 30px;
`;

export const Image = styled.img`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
