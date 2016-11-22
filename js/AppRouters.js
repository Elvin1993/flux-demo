import React, { Component } from 'react'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Index from './Index'

const app_router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/index" component={Index}></Route>
      <Route path="/home" component={Home}></Route>
    </Route>
  </Router>
)


export default class AppRouter extends Component {

  render() {
    return app_router
  }
}
