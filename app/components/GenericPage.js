import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Markdown from './Markdown'


export const MainLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
`

export const ScrolledContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-x: auto;
  flex-grow: 1;
`

const GenericPage = ({ content, fullsized }) => (
  <MainLayout>
    <ScrolledContent>
      <Markdown content={content} fullsized={fullsized} />
    </ScrolledContent>
  </MainLayout>
)

GenericPage.propTypes = {
  content: PropTypes.string.isRequired,
  fullsized: PropTypes.bool,
}

GenericPage.defaultProps = {
  fullsized: false,
}

export default GenericPage
