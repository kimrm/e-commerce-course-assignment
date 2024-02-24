import { Link } from "react-router-dom";
import { Header } from "./Header.styles";
import Navigation from "../Navigation";
import ShoppingBag from "../ShoppingBag";

export default function index() {
  return (
    <Header>
      <Link to="/">
        <h1>Shop-A-Lot</h1>
      </Link>
      <Navigation />
      <ShoppingBag />
    </Header>
  );
}
