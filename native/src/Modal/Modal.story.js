import React from 'react'
import Modal from './Modal'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('Modal', module)
  .add('Example Modal with Trigger', () => (
    <Modal 
      containerStyles={styles.containerStyles}
      bodyStyles={styles.bodyStyles}
      hasCloseHeader={true}
    >
      <Modal.Trigger>
        <TouchableOpacity style={styles.trigger} onPress={() => {}}>
          <Text style={styles.triggerText} >Open</Text>
        </TouchableOpacity>
      </Modal.Trigger>
      <Modal.Body>
        <Text>body</Text>
      </Modal.Body>
    </Modal>
  ))
  .add('Example Modal with reference', () => (
    <View>
      <Modal 
        containerStyles={styles.containerStyles}
        bodyStyles={styles.bodyStyles}
        ref={ref => (this.modal = ref)}
      >
        <Modal.Body>
          <Text>body</Text>
          <TouchableOpacity style={styles.trigger} onPress={() => this.modal.close()}>
             <Text style={styles.triggerText} >Close</Text>
          </TouchableOpacity>
        </Modal.Body>
      </Modal>
      <View style={styles.containerColumn}>
        <TouchableOpacity style={styles.trigger} onPress={() => this.modal.show()}>
           <Text style={styles.triggerText} >Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))


const styles = StyleSheet.create({
  containerColumn: {
    flex: 1,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgb(236, 240, 241)'
  },
  bodyStyles: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    borderTopWidth: 5,
    borderRadius: 5,
    borderColor: 'rgb(34, 167, 240)',
    alignItems: 'center'
  },
  trigger: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'rgb(34, 167, 240)'
  },
  triggerText: {
    color: 'rgb(228, 241, 254)'
  }
})

export default styles
