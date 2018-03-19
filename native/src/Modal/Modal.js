import React from 'react'
import { Modal as RNModal, View, ScrollView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const Body = ({ children }) => children

Body.propTypes = {
  children: PropTypes.any.isRequired
}

class Trigger extends React.Component {
  render() {
    return React.Children.map(this.props.children, child => {
      const onPressCall = child.props.onPress
      return React.cloneElement(child, {
        onPress: () => {
          if (typeof onPressCall === 'function') {
            if (onPressCall.then !== undefined) {
              onPressCall()
                .then(result => {
                  this.props.onShowDialog()
                  return Promise.resolve(result)
                })
                .catch(error => {
                  return Promise.reject(error)
                })
            } else {
              onPressCall()
              this.props.onShowDialog()
            }
          } else {
            this.props.onShowDialog()
          }
        }
      })
    })
  }
}
Trigger.propTypes = {
  children: PropTypes.any.isRequired,
  onShowDialog: PropTypes.func
}

class Modal extends React.Component {
  static Body = Body
  static Trigger = Trigger

  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  open() {
    this.setState({ visible: true })
  }

  close() {
    this.setState({ visible: false })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.visible !== this.props.visible) {
      this.setState({ visible: newProps.visible })
    }
  }

  render() {
    const triggerButton = React.Children.map(this.props.children, child => {
      if (child.type === Trigger) {
        return React.cloneElement(child, {
          onShowDialog: () => {
            this.open()
          }
        })
      }
    })

    const children = React.Children.map(this.props.children, child => {
      if (child.type !== Trigger) {
        return React.cloneElement(child)
      }
    })

    const { visible } = this.state
    return (
      <View style={{ width: '100%' }}>
        <RNModal
          animationType={'fade'}
          transparent={true}
          visible={visible}
          onRequestClose={() => this.close()}
        >
          <View style={this.props.containerStyles}>
            <View style={this.props.bodyStyles}>
              {this.props.hasCloseHeader && (
                <View style={this.props.headerStyles}>
                  <TouchableOpacity onPress={() => this.close()}>
                    <Icon name={'close'} />
                  </TouchableOpacity>
                </View>
              )}
              <ScrollView>{children}</ScrollView>
            </View>
          </View>
        </RNModal>
        {triggerButton}
      </View>
    )
  }
}

Modal.propTypes = {
  containerStyles: PropTypes.any,
  bodyStyles: PropTypes.any,
  children: PropTypes.any,
  headerStyles: PropTypes.any,
  hasCloseHeader: PropTypes.bool.isRequired,
  visible: PropTypes.bool
}

Modal.defaultProps = {
  visible: false,
  hasCloseHeader: false,
  headerStyles: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 0,
    padding: 0,
    borderBottomWidth: 0
  }
}

export default Modal
