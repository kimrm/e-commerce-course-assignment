import { NavigationContainer, NavigationLink } from "./Navigation.styles";

interface NavigationProps {
  open: boolean;
  linkClicked: () => void;
}

export default function Navigation({ open, linkClicked }: NavigationProps) {
  return (
    <NavigationContainer open={open}>
      <NavigationLink to={"/"} onClick={linkClicked}>
        Home
      </NavigationLink>
      <NavigationLink to={"/contact"} onClick={linkClicked}>
        Contact
      </NavigationLink>
    </NavigationContainer>
  );
}
