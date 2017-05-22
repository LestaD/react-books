import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import Template from '../components/Template'

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const HomePage = () => (
  <Template>
    <AlignCenter>
      <Link to="/components">Show me your components</Link>
    </AlignCenter>
  </Template>
)

export default HomePage
