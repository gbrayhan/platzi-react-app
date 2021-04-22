import React from "react";
import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import header from "../img/logowz.png";
import "../component/styles/BadgeEdit.css";
import api from "../api";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      email: "",
      firstName: "",
      lastName: "",
      jobPosition: "",
      twitter: "",
      avatarUrl: "",
    },
  };

  componentDidMount() {
    this.fetchData().then((r) => {});
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = await api.badges.read(this.props.match.params.id);
      this.setState({
        loading: false,
        form: data,
      });
    } catch (err) {
      this.setState({
        error: err,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.id, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <>
        <div className="BadgeEdit__hero">
          <img
            className="img-fluid BadgeEdit__hero-img"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobPosition={this.state.form.jobPosition || "JOB_POSITION"}
                twitter={this.state.form.twitter || "TWITTER"}
                email={this.state.form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                pOnSubmit={this.handleSubmit}
                pOnChange={this.handleChange}
                formData={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;
