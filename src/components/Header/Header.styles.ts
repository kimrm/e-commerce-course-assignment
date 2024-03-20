import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderRow = styled.header`
  background-color: #222;
  color: white;
  position: fixed;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  &:hover {
    color: #61dafb;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  color: white;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
