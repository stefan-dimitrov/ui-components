import React from 'react'
import Alert from './Alert'
import { shallow } from 'enzyme'

describe('Alert Componenent ', () => {
  it('should render text', () => {
    const wrapper = shallow(<Alert message='my message' />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Text').first().props().children).toBe('my message')
  })
})
