import React, { Component } from 'react'
import VersionChecker from './VersionChecker'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

class Page extends Component {
  state = {
    hasNewVersion: false
  }

  render() {
    const { hasNewVersion } = this.state
    return (
      <div>
        <VersionChecker
          matcher={src => src.startsWith('app.')}
          onVersionChange={() => this.setState({ hasNewVersion: true })}
          timeout={30000 /* 30 seconds */}
        />
        Is version updated: {hasNewVersion ? 'Yes' : 'No'}
      </div>
    )
  }
}

storiesOf('VersionChecker', module).add(
  'default',
  withInfo(`
     A generic component that performs app version checks using periodic XHR requests.
    
      ~~~js
      class Page extends Component {
        state = {
          hasNewVersion: false
        }

        render() {
          const { hasNewVersion } = this.state
          return (
            <div>
              <VersionChecker
                matcher={src => src.startsWith('app.')}
                onVersionChange={() => this.setState({ hasNewVersion: true })}
                timeout={30000 /* 30 seconds */}
              />
              Is version updated: {hasNewVersion ? 'Yes' : 'No'}
            </div>
          )
        }
      }
      ~~~

    `)(() => <Page />)
)
