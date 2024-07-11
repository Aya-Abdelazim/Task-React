import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Basket from "./page/Basket.jsx";
import AllProducts from "./page/AllProducts.jsx";
import Details from "./page/Details.jsx";
import { ProductContextProvider } from "./store/ProductContext.jsx";
import { DetailsContextProvider } from "./store/DetailsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AllProducts /> },
      { path: "/details/:id/", element: <Details /> },
      { path: "/basket", element: <Basket /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <DetailsContextProvider>
        <RouterProvider router={router} />
      </DetailsContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
