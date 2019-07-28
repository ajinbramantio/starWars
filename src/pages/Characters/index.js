import React from 'react'
import '../../assets/style.sass'
import { connect } from 'react-redux'
import { getFilms } from '../../models/home/actions'
import { getFilmDetail } from '../../models/filmDetail/actions'
import { getCharacters } from '../../models/characters/actions'
import { TableCharacters } from './tableCharacters'
import { Loading } from '../Loading'

import Header from '../../components/Header'
class Characters extends React.Component {
  componentDidMount() {
    if (this.props.films.data.length <= 0) {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.films.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getCharacters(this.props.filmDetail.data.characters)
          })
      })
    } else {
      this.props.getFilms().then(() => {
        this.props
          .getFilmDetail(
            this.props.films.data[this.props.match.params.movieId].url
          )
          .then(() => {
            this.props.getCharacters(this.props.filmDetail.data.characters)
          })
      })
    }
  }
  render() {
    const characters = this.props.filmDetail.data.characters
    // console.log(this.props.match.params)

    return (
      <React.Fragment>
        <Header />
        {characters ? (
          <TableCharacters
            characters={characters}
            movieId={this.props.match.params.movieId}
          />
        ) : (
          <Loading />
        )}
        <div className="menu" />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.filmDetail)

  return {
    films: state.films,
    filmDetail: state.filmDetail
  }
}

const mapDispatchToProps = {
  getFilms,
  getFilmDetail,
  getCharacters
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters)
