import React from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { ThemeProvider } from 'styled-components'
import { SphereTheme } from '@ui/pattern-library/themes'

import HomePage from './layout/Home'
import MainPage from './layout/Main'
import SetupPage from './layout/Setup'
import PlaygroundPage from './layout/PlaygroundPage'


const App = () => (
  <ThemeProvider theme={SphereTheme}>
    <Router history={useRouterHistory(createHashHistory)()}>
      <Route path="/" component={HomePage} />
      <Route path="/setup" component={SetupPage} />
      <Route path="/playground" component={PlaygroundPage} />
      <Route path="/components" component={MainPage}>
        <Route path=":component" />
      </Route>
    </Router>
  </ThemeProvider>
)

export default App
