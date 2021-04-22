import React from "react";
import logo from "../img/wizelane-logo.png";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <Link className="navbar__brand" to="/">
            <img className="navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Wizeline</span>
            <span className="font-weight-bold">Campus</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
