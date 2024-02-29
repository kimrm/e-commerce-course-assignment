import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./Main.styles";
import ProductsProvider from "../../providers/ProductsProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <ProductsProvider>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ProductsProvider>
    </>
  );
}
