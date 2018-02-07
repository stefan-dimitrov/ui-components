import React from 'react'
import Icon from './Icon'
import { shallow } from 'enzyme'

describe('Icon Componenent ', () => {
  it('should render component', () => {
    const wrapper = shallow(<Icon name='alert' />)
    expect(wrapper).toMatchSnapshot()
  })
})
