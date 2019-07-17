import React from 'react'
import { connect } from 'react-redux'
import '../assets/style/globalStyle.sass'

import { getFilms } from '../modules/home/actions'
import { getFilmDetail } from '../modules/filmDetail/actions'

import Header from '../components/Headers'
import FilmDetail from './fragment/FilmDetail'
import FilmCharacter from './fragment/FilmCharacter'

class Film extends React.Component {
  state = {
    fragment: 0
  }

  componentDidMount() {
    // console.log(this.props.films.data)
    if (this.props.films.data.length <= 0) {
      this.props.getFilms().then(() => {
        // console.log(this.props.films.data[1])
        this.props.getFilmDetail(
          this.props.films.data[this.props.match.params.movieId].url
        )
      })
    } else {
      this.props.getFilmDetail(
        this.props.films.data[this.props.match.params.movieId].url
      )
    }
  }

  render() {
    const image = this.props.detail.data.episode_id
    // console.log(this.props.detail.data)

    return (
      <div>
        <button onClick={() => this.setState({ fragment: 0 })}>Detail</button>
        <button onClick={() => this.setState({ fragment: 1 })}>
          Character
        </button>
        {this.state.fragment == 0 && <FilmDetail />}
        {this.state.fragment == 1 && <FilmCharacter />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films: state.film,
  detail: state.filmDetail
})

const mapDispatchToProps = {
  getFilms,
  getFilmDetail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film)
