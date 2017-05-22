import React from 'react'

import Template from '../components/Template'
import GenericPage from '../components/GenericPage'
import setupPageContent from '../docs/SetupPage.md'


const SetupPage = () => (
  <Template>
    <GenericPage content={setupPageContent} />
  </Template>
)

export default SetupPage
