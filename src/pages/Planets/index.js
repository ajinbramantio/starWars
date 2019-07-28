import React from 'react'
import { connect } from 'react-redux'
import { getFilms } from '../../models/home/actions'
import { getFilmDetail } from '../../models/filmDetail/actions'
import { getPlanets } from '../../models/planets/actions'
import { TablePlanets } from './tablePlanets'
import { Loading } from '../Loading'

import Header from '../../components/Header'
class Planets extends React.Component {
  componentDidMount() {
    if (this.props.films.data.length <= 0) {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.films.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getPlanets(this.props.filmDetail.data.planets)
          })
      })
    } else {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.films.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getPlanets(this.props.filmDetail.data.planets)
          })
      })
    }
  }
  render() {
    const planets = this.props.planets
    // console.log(planets == undefined)

    return (
      <React.Fragment>
        <Header />
        {planets ? (
          <TablePlanets
            planets={planets}
            movieId={this.props.match.params.movieId}
          />
        ) : (
          <Loading />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)

  return {
    films: state.films,
    filmDetail: state.filmDetail,
    planets: state.filmDetail.data.planets
  }
}

const mapDispatchToProps = {
  getFilms,
  getFilmDetail,
  getPlanets
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets)
