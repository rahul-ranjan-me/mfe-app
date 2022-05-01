import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));

export default [
  { path: "/", element: <Suspense fallback={"loading"}><Home /> </Suspense>},
  { path: "/about", element: <Suspense fallback={"loading"}><About /> </Suspense>},
];
