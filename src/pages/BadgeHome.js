import React from "react";
import { Link } from "react-router-dom";

import astro from "../img/wizelane-logo.png";
import logo from "../img/logowz.png";
import "./styles/Home.css";

function BadgeHome() {
  return (
    <div className="Home">
      <div className="col-text">
        <img
          className="BadgeHome__image-logo"
          src={logo}
          alt="Platzi conf logo"
        />
        <div>
          <h1>BADGE MANAGEMENT SYSTEM</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </div>
      </div>
      <div className="col-img">
        <img src={astro} alt="Astronauta" />
      </div>
    </div>
  );
}

export default BadgeHome;
