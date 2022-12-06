import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 15px 30px;
  font-size: 22px;
  border: none;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  &.active {
    background-color: cadetblue;
    color: white;
  }
`;