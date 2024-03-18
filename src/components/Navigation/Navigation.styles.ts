import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavigationContainer = styled.nav<{ open?: boolean }>`
  display: flex;
  flex-direction: row;
  position: static;
  top: 100px;
  background-color: #222;
  padding: ${(props) => (props.open ? "1rem" : "0")};
  right: 0;
  left: 0;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    position: absolute;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
  }
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
