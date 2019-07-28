import React from 'react'
import '../assets/style.sass'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { getFilms } from '../models/home/actions'
import { getFilmDetail } from '../models/filmDetail/actions'

import { Menu } from '../components/Menu'
import Header from '../components/Header'
import { Loading } from './Loading'

class FilmDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      movieDetail: []
    }
  }
  componentDidMount() {
    if (this.props.films.data.length <= 0) {
      this.props.getFilms().then(() => {
        this.props.getFilmDetail(
          this.props.films.data[this.props.match.params.movieId].url
        )
      })
    } else {
      this.props.getFilms().then(() => {
        this.props.getFilmDetail(
          this.props.films.data[this.props.match.params.movieId].url
        )
      })
    }
  }
  render() {
    console.log(this.props.filmDetail.length)

    return (
      <div>
        <Header />
        {this.props.filmDetail.length === 0 ||
        this.props.filmDetail.length !== undefined ? (
          <Loading />
        ) : (
          <div>
            <h1 className="title">{this.props.filmDetail.title}</h1>
            <div className="bingkaiImg">
              <img
                src={`/images/movies/${this.props.filmDetail.episode_id}.jpg`}
                alt=""
                className="img"
              />
            </div>

            <div className="listAuthorEpisode">
              <p className="listP">
                Director : {this.props.filmDetail.director}
              </p>
            </div>
            <div className="listAuthorEpisode">
              <p className="listP">
                Producer : {this.props.filmDetail.producer}
              </p>
            </div>
            <div className="listAuthorEpisode">
              <p className="listP">
                Episode : {this.props.filmDetail.episode_id}
              </p>
            </div>
            <div className="listAuthorEpisode">
              <p className="listP">
                {' '}
                Release date : {this.props.filmDetail.release_date}
              </p>
            </div>
            <div className="deskripsi">
              <h1>Opening</h1>
              <p className="listP">{this.props.filmDetail.opening_crawl}</p>
            </div>

            <div className="menu" style={{ textAlign: 'center' }}>
              <Menu movieId={this.props.match.params.movieId} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    films: state.films,
    filmDetail: state.filmDetail.data
  }
}

const mapDispatchToProps = {
  getFilms,
  getFilmDetail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetail)
