import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import gro from 'gro'

import { Switch, Row, Column } from '@ui/pattern-library/atoms'
import Markdown from './Markdown'
import ComponentsPageDocs from '../docs/ComponentsPage'
import Playground from './Playground'
import collection from '../collection'
import { asPath } from '../util'

const gr = gro('ComponentViewer')

const ComponentDescription = styled(Column)`
  padding: 0 45px;
  font-size: 10px;
`

const Title = styled.h1`
  display: flex;
  font-size: 3.2rem;
  padding-bottom: 0.3rem;
  color: #333;
  ${props => props.center && 'justify-content: center;'}
`

const Relations = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  margin-${props => props.top ? 'top' : 'bottom'}: 1.2em;
  font-size: 1.6rem;

  & > a {
    color: #4078c0;
    text-decoration: none;
    background-color: transparent;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`

export default class ComponentViewer extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  static defaultProps = {
    component: '',
  }

  state = { fullsized: false }
  editors = []
  markdownNode = null

  componentWillUpdate(nextProps) {
    if (nextProps.component !== this.props.component) {
      this.dropPlaygrounds()
    }
  }

  componentDidUpdate(prevProps) {
    const gend = gr.group('componentDidUpdate')
    if (prevProps.component !== this.props.component) {
      const tend = gr.time('componentDidUpdate')
      this.dropPlaygrounds()
      setTimeout(() => this.createPlaygrounds(), 100)
      tend()
    }
    gend()
  }

  componentDidMount() {
    this.createPlaygrounds()
  }

  componentWillUnmount() {
    this.dropPlaygrounds()
  }

  dropPlaygrounds = () => {
    const gend = gr.group('dropPlaygrounds')
    const tend = gr.time('dropPlaygrounds')
    if (this.editors) {
      this.editors.forEach(({ mountPoint }) => {
        try {
          ReactDOM.unmountComponentAtNode(mountPoint)
        }
        catch (e) {
          // eslint-disable-next-line no-console
          console.error('Unmounting playground error:', e)
        }
      })
    }
    tend()
    gend()
  }

  createPlaygrounds = () => {
    const gend = gr.group('createPlaygrounds')
    const tend = gr.time('createPlaygrounds')
    const list = Array.from(this.markdownNode.getElementsByClassName('hljs'))

    this.editors = list.map((item) => {
      const sourceCode = item.innerText
      const mountPoint = document.createElement('div')

      item.parentNode.replaceChild(mountPoint, item)

      const container = ReactDOM.render(<Playground sourceCode={sourceCode} />, mountPoint)
      return { mountPoint, container }
    })
    tend()
    gend()
  }

  changeFullsized = (event) => {
    this.setState({ fullsized: event.target.checked })
  }

  renderWelcome() {
    return (
      <Markdown
        reference={(node) => {
          this.markdownNode = node
        }}
        content={ComponentsPageDocs}
      />
    )
  }

  renderComponentContent() {
    const com = collection[this.props.component]

    return (
      <div>
        <Row justifyContent="spaceBetween">
          <ComponentDescription>
            <Title>{com.name}</Title>
            {com.uses.length !== 0
              && <Relations marginBetween={10}>
                <span>Uses:</span>
                {com.uses.map(name =>
                  <Link key={name} to={`/components/${asPath(name)}`}>{name}</Link>,
                )}
              </Relations>
            }
            {com.rel.length !== 0
              && <Relations marginBetween={10}>
                <span>Used in:</span>
                {com.rel.map(name =>
                  <Link key={name} to={`/components/${asPath(name)}`}>{name}</Link>,
                )}
              </Relations>
            }
          </ComponentDescription>
          <Row marginBetween="1rem" justifyContent="flexEnd" alignItems="center" padding={10}>
            <span>Stretch page</span>
            <Switch checked={this.state.fullsized} onChange={this.changeFullsized} />
          </Row>
        </Row>
        <Markdown
          reference={(node) => {
            this.markdownNode = node
          }}
          fullsized={this.state.fullsized}
          content={com.page}
        />
        {
          com.page
          ? null
          : <Title center>Component not implemented yet</Title>
        }
      </div>
    )
  }

  render() {
    const compath = this.props.component

    if (!compath) {
      return this.renderWelcome()
    }

    if (!collection[compath]) {
      return (
        <div>
          <Markdown
            reference={(node) => {
              this.markdownNode = node
            }}
            content=""
          />
          <Title center>Component not found</Title>
        </div>
      )
    }

    return this.renderComponentContent()
  }
}
