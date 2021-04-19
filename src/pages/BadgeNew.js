import React from 'react'
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import header from '../img/logowz.png'
import '../component/styles/badgenew.css'
import api from '../api'


class BadgeNew extends React.Component {
  state = {
    form: {
      email: "",
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

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: error})
    }
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
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobPosition={this.state.form.jobPosition || 'JOB_POSITION'}
                twitter={this.state.form.twitter || 'TWITTER'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                pOnSubmit={this.handleSubmit}
                pOnChange={this.handleChange}
                formData={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default BadgeNew;