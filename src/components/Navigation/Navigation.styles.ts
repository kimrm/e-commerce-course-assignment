import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
  }
`;
