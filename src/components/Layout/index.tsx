import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./Main.styles";
import ProductsProvider from "../../providers/ProductsProvider";
import ShoppingBagProvider from "../../providers/ShoppingBagProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <ProductsProvider>
        <ShoppingBagProvider>
          <Header />
          <Main>{children}</Main>
        </ShoppingBagProvider>
        <Footer />
      </ProductsProvider>
    </>
  );
}
