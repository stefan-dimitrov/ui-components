import React from 'react'
import PropTypes from 'prop-types'

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div>
    <span>{message}</span>
  </div>
)

AlertComponent.propTypes = {
  message: PropTypes.string
}

export default AlertComponent
