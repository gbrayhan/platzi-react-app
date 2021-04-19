import React from 'react'


class BadgeForm extends React.Component {
  state = {form: {}};


  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.props.pOnChange} value={this.props.formData.firstName} className="form-control"
                   type="text"
                   name="firstName"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input onChange={this.props.pOnChange} value={this.props.formData.lastName} className="form-control"
                   type="text"
                   name="lastName"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Job Position</label>
            <input onChange={this.props.pOnChange} value={this.props.formData.jobPosition} className="form-control"
                   type="text"
                   name="jobPosition"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input onChange={this.props.pOnChange} value={this.props.formData.email} className="form-control"
                   type="text"
                   name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input onChange={this.props.pOnChange} value={this.props.formData.twitter} className="form-control"
                   type="text"
                   name="twitter"/>
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={this.props.pOnSubmit} type="button">cick me</button>
          </div>
        </form>
      </div>
    )
  }
}


export default BadgeForm;