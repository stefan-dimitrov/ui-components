import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Modal from './Modal'

describe('(Modal) rendering', () => {
  it('should render Modal component', () => {
    const wrapper = shallow(
      <Modal>
        <Modal.Trigger>
          <TouchableOpacity onPress={() => {}}>
            <Text>trigger</Text>
          </TouchableOpacity>
        </Modal.Trigger>
        <Modal.Body>
          <Text>body</Text>
        </Modal.Body>
      </Modal>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render Modal component with header', () => {
    const wrapper = shallow(
      <Modal hasCloseHeader={true} >
        <Modal.Trigger>
          <TouchableOpacity onPress={() => {}}>
            <Text>trigger</Text>
          </TouchableOpacity>
        </Modal.Trigger>
        <Modal.Body>
          <Text>body</Text>
        </Modal.Body>
      </Modal>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
  it('should hide modal when close header is pressed', () => {
    const wrapper = shallow(
      <Modal hasCloseHeader={true} />
    )
    wrapper.setState({ visible: true })
    wrapper
      .find(TouchableOpacity)
      .first()
      .props()
      .onPress()
    expect(wrapper.state().visible).toBe(false)
  })

  it('should open modal dialog on press trigger', () => {
    const wrapper = shallow(
      <Modal>
        <Modal.Trigger>
          <TouchableOpacity onPress={() => {}}>
            <Text>test</Text>
          </TouchableOpacity>
        </Modal.Trigger>
      </Modal>
    )
    wrapper.setState({ visible: false })
    wrapper
      .find(Modal.Trigger)
      .first()
      .props()
      .onShowDialog()
    expect(wrapper.state().visible).toBe(true)
  })
})