import React from 'react'
import Alert from './Alert'
import { storiesOf } from '@storybook/react'

storiesOf('Alert', module).add('Example Alert Box', () => (
  <Alert message="Alert !" />
))
