import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import MyCarts from "./pages/MyCarts";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";
import ProductsDetail from "./pages/ProductsDetail";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accessories from "./pages/Accessories";
import Shoes from "./pages/Shoes";
import ProtectedRoute from "./pages/ProtectedRoute";
import Products from "./component/ui/Products";
import Bestproducts from "./component/ui/Bestproducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <ProductsDetail />,
      },
      {
        path: "/products/best",
        element: <Bestproducts />,
      },
      {
        path: "/products/clothes",
        element: <Products />,
      },
      {
        path: "/products/acc",
        element: <Accessories />,
      },
      {
        path: "/products/shoes",
        element: <Shoes />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCarts />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
