import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./Main.styles";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <ProductsProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ProductsProvider>
  );
}
