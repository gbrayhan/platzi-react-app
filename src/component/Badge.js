import React from "react";

import confLogo from "../img/wizelane-logo.png";
import Gravatar from "./Gravatar";
import "./styles/badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Wizeline" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1>
            {" "}
            {this.props.firstName} <br /> {this.props.lastName}{" "}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>{this.props.jobPosition}</p>
          <p>{this.props.twitter}</p>
        </div>
        <div className="Badge__footer">
          <p>#WizelineAcademy</p>
        </div>
      </div>
    );
  }
}

export default Badge;
