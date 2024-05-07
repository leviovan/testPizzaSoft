import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "./components/store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home.tsx";
import UserPage from "./components/userPage/userPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div> Ошибка.... обновите страницу</div>,
  },
  {
    path: "/:id",
    element: <UserPage />,
    errorElement: <div>Ошибка.... Перейдите на главную страницу</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </React.StrictMode>
);
