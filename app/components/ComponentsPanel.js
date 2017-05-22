import React from 'react'
import styled, { css } from 'styled-components'
import { Link as RLink } from 'react-router'
import * as vars from '../styles/variables'

import collection from '../collection'

const Panel = styled.aside`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  align-items: stretch;
  overflow-x: auto;
  width: ${vars.sidePanelWidth}px;
  background-color: #f5f7f8;
  border-right: 1px solid #e2e4e7;
  padding-bottom: 40px;
`

const Category = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  margin-top: 10px;
`

const Title = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 12px;
`

const Link = styled(RLink)`
  display: block;
  flex-shrink: 0;
  font-size: 14px;
  color: black;
  text-decoration: none;
  padding: 8px 0;
  padding-left: 20px;
  border-left: 4px solid transparent;

  &:hover {
    background-color: #e2e4e7;
  }

  &.active {
    border-left-color: ${vars.primaryColor};
    color: ${vars.primaryColor};
  }

  ${props => props['data-unimplemented'] && css`
    color: rgba(0,0,0,.5);
    cursor: default;
    &::after {
      content: 'unimplemented';
      font-size: 12px;
      background-color: #d2d2d2;
      margin-left: 10px;
      line-height: 16px;
      padding: 0 6px;
      border-radius: 3px;
    }
    &:hover {
      background-color: transparent;
    }
    &.active:hover, &.active {
      color: rgba(0,0,0,.5);
    }
    &.active:hover {
      background-color: #e2e4e7;
    }
  `}
`

const ComponentsPanel = () => {
  const cats = {}

  Object.keys(collection).forEach((path) => {
    const com = collection[path]
    const props = {
      activeClassName: 'active',
      children: com.name,
      key: com.name,
      to: `/components/${path}`,
    }

    if (!com.page) {
      props['data-unimplemented'] = true
    }

    if (!cats[com.cat]) {
      cats[com.cat] = []
    }
    cats[com.cat].push(React.createElement(Link, props))
  })

  return (
    <Panel>
      {Object.keys(cats).map(name => (
        <Category key={name}>
          <Title>{name}</Title>
          {cats[name]}
        </Category>
      ))}
    </Panel>
  )
}

export default ComponentsPanel
