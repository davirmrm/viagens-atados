import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from './component'

import AppCotent from './pages/AppContent'
import Viagens from './pages/viagens/viagens'

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} component={AppCotent} />
      <Route path='/viagens' exact={true} component={Viagens} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
