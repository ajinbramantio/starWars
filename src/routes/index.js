import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import FilmDetail from '../pages/FilmDetail'
import Characters from '../pages/Characters/index'
import Planets from '../pages/Planets/index'
import Species from '../pages/Species/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/film/:movieId" component={FilmDetail} />
        <Route exact path="/film/:movieId/characters" component={Characters} />
        <Route path="/film/:movieId/planets" component={Planets} />
        <Route path="/film/:movieId/species" component={Species} />
      </Switch>
    </Router>
  )
}

export default App
