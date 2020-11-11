import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Cars from './pages/cars'
import Car from './pages/car'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Cars />
      </Route>
      <Route path="/car/:id">
        <Car />
      </Route>
    </Switch>
  </Router>
)

export default App