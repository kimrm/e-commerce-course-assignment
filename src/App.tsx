import "./App.css";
import Layout from "./components/Layout";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import styled from "styled-components";

const FourOhFourContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  h1 {
    font-size: 2rem;
    font-weight: normal;
    color: #ccc;
  }
  a {
    display: block;
    color: #fff;
    text-underline-offset: 0.3rem;
    text-decoration-style: dotted;
    margin-top: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function FourOhFour() {
  return (
    <FourOhFourContainer>
      <h1>404: Page does not exist</h1>
      <p>You've reached a non-existing place.</p>
      <Link to="/">Return to Home</Link>
    </FourOhFourContainer>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/:tag?", element: <HomePage /> },
        { path: "/product/:productId", element: <ProductPage /> },
        { path: "/checkout", element: <CheckoutPage /> },
        { path: "/contact", element: <ContactPage /> },
      ],
    },

    { path: "*", element: <FourOhFour /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
