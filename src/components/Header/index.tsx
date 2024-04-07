import { useState } from "react";
import {
  HeaderRow,
  HeaderContainer,
  LogoLink,
  MenuButton,
  NavRight,
} from "./Header.styles";
import Navigation from "../Navigation";
import ShoppingBag from "../ShoppingBag";
import Search from "../Search";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButtonClicked = () => setMenuOpen((prev) => !prev);

  const handleLinkClicked = () => setMenuOpen(false);

  return (
    <HeaderRow>
      <HeaderContainer>
        <LogoLink to="/">shopalot</LogoLink>
        <Search />
        <Navigation open={menuOpen} linkClicked={handleLinkClicked} />
        <NavRight>
          <ShoppingBag />
          <MenuButton onClick={handleMenuButtonClicked} aria-label="Menu">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </MenuButton>
        </NavRight>
      </HeaderContainer>
    </HeaderRow>
  );
}
