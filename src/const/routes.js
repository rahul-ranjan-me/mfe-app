import React from "react";
import Home from "../pages/home";
import About from "../pages/about";

export default [
  { path: "payments", element: <Home /> },
  { path: "payments/about", element: <About /> },
];
