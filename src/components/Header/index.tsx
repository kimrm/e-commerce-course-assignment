import { Link } from "react-router-dom";
import { Header } from "./Header.styles";

export default function index() {
  return (
    <Header>
      <Link to="/">
        <h1>Shop-A-Lot</h1>
      </Link>
    </Header>
  );
}
