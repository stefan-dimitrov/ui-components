import React from 'react'
import Alert from './Alert'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('Alert', module).add('Example Alert Box', () => (
  <Alert message="Alert !" />
))
