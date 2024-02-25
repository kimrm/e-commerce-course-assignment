import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #282c34;
  color: white;
  position: fixed;
  width: 100%;
`;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  &:hover {
    color: #61dafb;
  }
`;

export { Header, HeaderContainer, LogoLink };
