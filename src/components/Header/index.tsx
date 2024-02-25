import { Header, HeaderContainer, LogoLink } from "./Header.styles";
import Navigation from "../Navigation";
import ShoppingBag from "../ShoppingBag";

export default function index() {
  return (
    <Header>
      <HeaderContainer>
        <LogoLink to="/">Shop-A-Lot</LogoLink>
        <Navigation />
        <ShoppingBag />
      </HeaderContainer>
    </Header>
  );
}
