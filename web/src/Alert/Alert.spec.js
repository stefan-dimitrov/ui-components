import React from 'react'
import Alert from './Alert'
import { shallow } from 'enzyme'

describe('Alert Componenent ', () => {
  it('should render text', () => {
    let wrapper = shallow(<Alert message="my message" />)
    expect(wrapper.text()).toBe('my message')
    expect(5).toBe(5)
  })
})
