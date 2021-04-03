import React from 'react'

import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'


import header from '../img/logowz.png'
import '../component/styles/badgenew.css'


class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobPosition: "",
      twitter: "",
      avatarUrl: "",
    }
  }

  handleChange = event => {

    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })

  }

  render() {
    return (
      <>
        <div className="badgenew__hero">
          <img className='img-fluid badgenew__hero-img' src={header} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://es.gravatar.com/userimage/45863998/2d0d2bcab855c48cf85120328094e788.jpg?size=200"
                firstName={this.state.form.firstName} lastName={this.state.form.lastName}
                jobPosition={this.state.form.jobPosition} twitter={this.state.form.twitter}></Badge>
            </div>
            <div className="col-6">
              <BadgeForm pOnChange={this.handleChange} formData={this.state.form}/>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default BadgeNew;