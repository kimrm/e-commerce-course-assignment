import "./App.css";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";

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

    { path: "*", element: <h1>Page does not exist</h1> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
