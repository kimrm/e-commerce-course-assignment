import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderRow = styled.header`
  background-color: #222;
  color: white;
  position: fixed;
  z-index: 1000;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: auto auto auto;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  &:hover {
    color: #61dafb;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
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
