import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ComponentsPanel from '../components/ComponentsPanel'
import Template from '../components/Template'
import ComponentViewer from '../components/ComponentViewer'


const MainLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
`

const ScrolledContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-x: auto;
  flex-grow: 1;
`

const MainPage = ({ params }) => (
  <Template>
    <MainLayout>
      <ComponentsPanel />
      <ScrolledContent>
        <ComponentViewer component={params.component} />
      </ScrolledContent>
    </MainLayout>
  </Template>
)

MainPage.propTypes = {
  params: PropTypes.shape({ component: PropTypes.string }),
}

MainPage.defaultProps = {
  params: { component: '' },
}

export default MainPage
