import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./Main.styles";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
  return (
    <ProductsProvider>
      <ScrollToTop />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ProductsProvider>
  );
}
