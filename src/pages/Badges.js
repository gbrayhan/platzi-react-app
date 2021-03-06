import React from "react";

import "./styles/Badges.css";
import confLogo from "../img/badge-header.svg";
import BadgesList from "../component/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import ResourceLoading from "../component/ResourceLoading";
import ResourceError from "../component/ResourceError";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalID = setInterval(this.fetchData, 4000);
  }

  componentWillMount() {
    clearInterval(this.intervalID);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <ResourceLoading />;
    }

    if (this.state.error) {
      return <ResourceError error={this.state.error} />;
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </>
    );
  }
}

export default Badges;
