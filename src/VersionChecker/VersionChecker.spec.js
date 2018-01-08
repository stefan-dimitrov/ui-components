import React from 'react'
import { shallow, mount } from 'enzyme'
import VersionChecker from './VersionChecker'
import MockXMLHttpRequest from 'mock-xmlhttprequest'

describe('(Component) VersionChecker', () => {
  let originalXMLHttpRequest, originalHTMLBody

  beforeEach(() => {
    jest.useFakeTimers()
    originalXMLHttpRequest = window.XMLHttpRequest
    window.XMLHttpRequest = MockXMLHttpRequest
    originalHTMLBody = document.body.innerHTML
    document.body.innerHTML = '<div><script src="assets/app.js" /></div>'

    jest.clearAllTimers()
  })

  // Restore XHR & HTML Body
  afterEach(() => {
    window.XMLHttpRequest = originalXMLHttpRequest
    document.body.innerHTML = originalHTMLBody
  })

  it('should render nothing', () => {
    const wrapper = shallow(
      <VersionChecker matcher={src => true} onVersionChange={() => {}} />
    )

    expect(wrapper.getElement()).toBe(null)
  })

  it('should call onVersionChange when version is updated', done => {
    const onVersionChange = jest.fn()

    MockXMLHttpRequest.onSend = xhr => {
      xhr.respond(404, {}, 'not found')
    }

    const wrapper = shallow(
      <VersionChecker
        matcher={src => src === 'assets/app.js'}
        onVersionChange={onVersionChange}
      />
    )

    setImmediate(() => {
      jest.runAllTimers()

      expect(onVersionChange.mock.calls.length).toBe(1)
      done()
    })
  })

  it('should not call onVersionChange callback when version is not updated', done => {
    const onVersionChange = jest.fn()

    MockXMLHttpRequest.onSend = xhr => {
      xhr.respond(200, {}, 'ok')
    }

    const wrapper = shallow(
      <VersionChecker
        matcher={src => src === 'assets/app.js'}
        onVersionChange={onVersionChange}
      />
    )

    setImmediate(() => {
      jest.runOnlyPendingTimers()

      expect(onVersionChange.mock.calls.length).toBe(0)
      expect(setInterval).toHaveBeenCalledTimes(1)
      done()
    })
  })

  it('should schedule check at specified timeout', () => {
    const wrapper = shallow(
      <VersionChecker
        matcher={src => true}
        onVersionChange={() => {}}
        timeout={15000}
      />
    )

    expect(setInterval).toHaveBeenCalledWith(expect.anything(), 15000)
  })

  it('should schedule check if src is matching', () => {
    const wrapper = shallow(
      <VersionChecker matcher={src => true} onVersionChange={() => {}} />
    )

    expect(setInterval).toHaveBeenCalledTimes(1)
  })

  it('should not schedule check if src is not matching', () => {
    const wrapper = shallow(
      <VersionChecker matcher={src => false} onVersionChange={() => {}} />
    )

    expect(setInterval).toHaveBeenCalledTimes(0)
  })
})
