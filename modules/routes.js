import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Contract from './Contract'
import Logo from './Logo'
import Streams from './Streams'
import Home from './Home'
import Approval from './Approval'
import Status from './Status'

module.exports = (
  <Route path="/" component={App} >
    <Route component={Home}>
      <IndexRoute component={Logo} />
      <Route path="/streams" component={Streams} />
    </Route>
    <Route path="/contract" component={Contract} />
    <Route path="/approval" component={Approval} />
    <Route path="/status" component={Status} />
  </Route>
)
