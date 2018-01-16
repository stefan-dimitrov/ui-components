import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';

const context = require.context('../src', true, /.story.js$/)

setOptions({
  name: 'React Native Web',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
})

function loadStories() {
  context.keys().forEach(context)
}

configure(loadStories, module)
