import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalState, Header, Footer } from "shared/Components";
import AppRoutes from "./AppRoutes";

import "./index.scss";

function App({ manifestData = [] }) {
  return (
    <GlobalState manifestData={manifestData}>
      <div className="app">
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </div>
    </GlobalState>
  );
}

App.propTypes = {};

export default App;
