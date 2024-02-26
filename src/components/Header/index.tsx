import { Header, HeaderContainer, LogoLink } from "./Header.styles";
import Navigation from "../Navigation";
import ShoppingBag from "../ShoppingBag";
import LogoImage from "/logo.png";

export default function index() {
  return (
    <Header>
      <HeaderContainer>
        <LogoLink to="/">
          <img src={LogoImage} alt="Logo" width={200} />
        </LogoLink>
        <Navigation />
        <ShoppingBag />
      </HeaderContainer>
    </Header>
  );
}
