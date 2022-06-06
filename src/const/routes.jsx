import React from "react";
import Home from "../pages/home";
import About from "../pages/about";

const defaultRoutes = [
  { path: "payments", element: <Home /> },
  { path: "payments/about", element: <About /> },
];

export default defaultRoutes;
