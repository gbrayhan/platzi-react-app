import React from 'react'
import './styles/PageError.css'

class ResourceError extends React.Component {
  render() {
    return (
      <div className="PageError">
        {this.props.error.message}
      </div>
    )
  }
}

export default ResourceError;