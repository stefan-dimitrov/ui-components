import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const Icon = ({ name, family, size, color, style }) => {
  switch(family) {
    case 'Ionicons':
      return <Ionicon name={name} color={color} size={size} style={style} />
    case 'MaterialCommunityIcons':
      return <MaterialIcon name={name} color={color} size={size} style={style} />
    case 'FontAwesome':
      return <FontAwesomeIcon name={name} color={color} size={size} style={style} />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any
}

Icon.defaultProps = {
  family: 'MaterialCommunityIcons',
  size: 20
}

export default Icon
