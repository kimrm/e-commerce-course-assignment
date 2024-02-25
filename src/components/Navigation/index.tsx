import Search from "../Search";
import { NavigationContainer, NavigationLink } from "./Navigation.styles";

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationLink to={"/"}>Home</NavigationLink>
      <NavigationLink to={"/contact"}>Contact</NavigationLink>
      <Search />
    </NavigationContainer>
  );
}
