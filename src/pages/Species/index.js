import React from 'react'
import { connect } from 'react-redux'

import { getFilms } from '../../models/home/actions'
import { getFilmDetail } from '../../models/filmDetail/actions'
import { getSpecies } from '../../models/species/actions'
import { Loading } from '../Loading'
import Header from '../../components/Header'

import { TablesSpecies } from './TablesSpecies'

class Species extends React.Component {
  componentDidMount() {
    if (this.props.filmDetail.data.length <= 0) {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.filmDetail.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getSpecies(this.props.filmDetail.data.species)
          })
      })
    } else {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.filmDetail.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getSpecies(this.props.filmDetail.data.species)
          })
      })
    }
  }
  render() {
    const species = this.props.filmDetail.data.species
    // console.log(this.props)

    return (
      <React.Fragment>
        <Header />
        {species ? (
          <TablesSpecies
            species={species}
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
    filmDetail: state.filmDetail
  }
}
const mapDispatchToProps = {
  getFilms,
  getFilmDetail,
  getSpecies
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Species)
