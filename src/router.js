import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from './component'

import AppCotent from './pages/AppContent'
import Viagens from './pages/viagens/viagens'

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} component={Viagens} />
      <Route path='/viagens' exact={true} component={Viagens} />
      <Route path='/hoteis' exact={true} component={AppCotent} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
