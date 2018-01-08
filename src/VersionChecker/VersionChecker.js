import React from 'react'
import PropTypes from 'prop-types'

export class VersionChecker extends React.Component {
  static propTypes = {
    matcher: PropTypes.func.isRequired,
    onVersionChange: PropTypes.func.isRequired,
    timeout: PropTypes.number
  }

  static defaultProps = {
    timeout: 60000
  }

  componentDidMount() {
    const { matcher, onVersionChange, timeout } = this.props

    let app
    let scripts = document.getElementsByTagName('script')

    for (let i = 0; i < scripts.length; i++) {
      const { src } = scripts[i]

      if (matcher(src)) {
        app = src
        break
      }

      if (i === scripts.length - 1) {
        return
      }
    }

    if (!app) {
      console.warn('version url was not matched')
      return
    }

    this.interval = setInterval(() => {
      const xhr = new XMLHttpRequest()

      xhr.open('GET', app)

      xhr.onload = () => {
        if (xhr.status !== 404) {
          return
        }

        onVersionChange()

        clearInterval(this.interval)
      }

      xhr.send()
    }, timeout)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return null
  }
}

export default VersionChecker
