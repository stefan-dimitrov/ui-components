import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const Alert = ({ message }) => <Text>{message}</Text>

Alert.propTypes = { message: PropTypes.string }
Alert.defaultProps = { message: 'my message' }

export default Alert
