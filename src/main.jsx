import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import ProductPage from "./components/ProductPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        children: [
          {
            path: "hi",
            element: <h2>Hi</h2>,
          },
        ],
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
