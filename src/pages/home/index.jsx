import React from "react";
import { Readme, SharedContextExample } from "shared/Components";
import readmeContent from "./readmeData";

const Home = () => (
  <>
    <SharedContextExample link="/payments/about" />
    <Readme data={readmeContent} />
  </>
);

export default Home;
