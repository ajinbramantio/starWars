import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilms } from '../modules/home/actions'
import { getFilmDetail } from '../modules/filmDetail/actions'

import Header from '../components/Headers'

class FilmDetailByEpisode extends React.Component {
  componentDidMount() {
    // console.log('ini dari film details', this.props)
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
  Image() {
    return require(`../../public/images/movies/${
      this.props.detail.episode_id
    }.jpg`)
  }
  render() {
    const image = this.props.detail.episode_id
    console.log(image)

    return (
      <div>
        <Header />
        <h1 className="title">{this.props.detail.title}</h1>
        <div className="bingkaiImg">
          <img src={`/images/movies/${image}.jpg`} className="img" alt="" />
        </div>
        <div
          style={{
            margin: 'auto',
            width: '80%',
            width: '32%',
            backgroundColor: '#53ebcf'
          }}
        >
          <p>Director : {this.props.detail.director}</p>
        </div>
        <div
          style={{
            margin: 'auto',
            width: '80%',
            width: '32%',
            backgroundColor: '#53ebcf'
          }}
        >
          <p>Producer : {this.props.detail.producer}</p>
        </div>
        <div
          style={{
            margin: 'auto',
            width: '80%',
            width: '32%',
            backgroundColor: '#53ebcf'
          }}
        >
          <p>Episode : {this.props.detail.episode_id}</p>
        </div>

        <div
          style={{
            margin: 'auto',
            width: '80%',
            width: '32%',
            backgroundColor: '#53ebcf'
          }}
        >
          <p>Release date : {this.props.detail.release_date}</p>
        </div>
        <div className="deskripsi">
          <h1>Opening</h1>
          <p>{this.props.detail.opening_crawl}</p>
        </div>
        <div className="menuDetail">
          <nav>
            <ul>
              <Link to="/character">
                <li>Character</li>
              </Link>
              <Link to="/planet">
                <li>Planet</li>
              </Link>
              <Link to="/species">
                <li>Species</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.filmDetail.data)

  return {
    films: state.film,
    detail: state.filmDetail.data
  }
}

const mapDispatchToProps = {
  getFilms,
  getFilmDetail
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetailByEpisode)
