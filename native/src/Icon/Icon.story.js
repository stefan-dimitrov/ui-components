import React from 'react'
import Icon from './Icon'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('Icon', module).add('Example Icon', () => {
  return (
    <View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
          MaterialCommunityIcons 
        </Text>
        <Icon name={'alert'} size={50} /> 
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
         FontAwesomeIcon 
       </Text>
       <Icon family='FontAwesome' name={'exclamation-triangle'} size={50} />
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
          Ionicon 
        </Text>
        <Icon family='Ionicons' name={'md-alert'} size={50} /> 
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
          With Style 
        </Text>
        <Icon
          family='FontAwesome'
          name={'exclamation-triangle'}
          size={50}
          style={{ backgroundColor: 'yellow', color: 'red', borderRadius: 5 }} /> 
      </View>
    </View>
  )
})
