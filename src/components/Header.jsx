import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="sample-module-federated-component">
      <h2>Exposing widgets components example</h2>
      <p>
        This is a sample module federated component exposed from a
        micro-frontend
      </p>
      <p>
        <Link to="/payments">Go to payments page</Link>
      </p>
    </div>
  );
};

export default Header;
