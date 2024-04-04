import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./Main.styles";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { Outlet } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
      },
      input: {
        color: "",
      },
      a: {
        color: "",
        textDecorationStyle: "dotted",
        textUnderlineOffset: "0.3rem",
        textDecoration: "underline",
      },
    }),
  },
});

export default function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </ProductsProvider>
    </ChakraProvider>
  );
}
