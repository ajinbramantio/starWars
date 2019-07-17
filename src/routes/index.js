import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FilmDetail from '../pages/Film'
import FilmDetailByEpisode from '../pages/FilmDetailByEpisode'
import Character from '../pages/Character'
import Planet from '../pages/Planet'
import Species from '../pages/Species'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:movieId" component={FilmDetail} />
        <Route path="/filmsDetail/:movieId" component={FilmDetailByEpisode} />
        <Route path="/character" component={Character} />
        <Route path="/species" component={Species} />
        <Route path="/planet" component={Planet} />
      </Switch>
    </Router>
  )
}

export default App
