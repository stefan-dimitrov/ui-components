import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import OctIcon from 'react-native-vector-icons/Octicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

const Icon = ({ name, family, size, color, style }) => {
  switch (family) {
    case 'Ionicons':
      return <Ionicon name={name} color={color} size={size} style={style} />
    case 'MaterialIcons':
      return <MaterialIcon name={name} color={color} size={size} style={style} />
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcon name={name} color={color} size={size} style={style} />
    case 'FontAwesome':
      return <FontAwesomeIcon name={name} color={color} size={size} style={style} />
    case 'Octicons':
      return <OctIcon name={name} color={color} size={size} style={style} />
    case 'Feather':
      return <FeatherIcon name={name} color={color} size={size} style={style} />
    case 'SimpleLineIcons':
      return <SimpleLineIcon name={name} color={color} size={size} style={style} />
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
  family: 'MaterialIcons',
  size: 20
}

export default Icon
