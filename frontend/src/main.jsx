import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TakeoffPage from "./pages/TakeoffPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TakeoffPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/takeoff",
    element: <TakeoffPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
