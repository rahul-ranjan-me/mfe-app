import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalState, Header, Footer } from "shared/Components";
import AppRoutes from "./AppRoutes";

import "./index.scss";

function App() {
  return (
    <GlobalState>
      <div id="app">
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
