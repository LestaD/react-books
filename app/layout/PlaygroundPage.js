import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import GenericPage from '../components/GenericPage'
import Playground from '../components/Playground'
import Template from '../components/Template'

import playgroundContent from '../docs/PlaygroundPage.md'
import playgroundStarterCode from '../docs/playgroundStarterCode.js.txt'


export default class PlaygroundPage extends Component {
  playground = null

  componentDidMount() {
    const target = document.getElementById('markdown-playground')

    if (!target) {
      console.info('Playground not attached! Element with id #markdown-playground not found')
      return
    }

    this.playground = ReactDOM.render(<Playground sourceCode={playgroundStarterCode} />, target)
  }

  componentWillUnmount() {
    const target = document.getElementById('markdown-playground')

    if (target) {
      try {
        ReactDOM.unmountComponentAtNode(target)
      }
      catch (error) {
        console.error('Unmounting playground error:', error)
      }
    }
  }

  render() {
    return (
      <Template>
        <GenericPage fullsized content={playgroundContent} />
      </Template>
    )
  }
}
