import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilms } from '../models/home/actions'

import Header from '../components/Header'
import { Loading } from './Loading'

class Home extends React.Component {
  componentDidMount() {
    this.props.getFilms()
  }
  render() {
    // console.log(this.props.films.length)

    return (
      <div>
        <Header />
        <div>
          {this.props.films.length === undefined ||
          this.props.films.length === 0 ? (
            <Loading />
          ) : (
            this.props.films.map((film, i) => {
              return (
                <Link to={`/film/${i}`} key={i}>
                  <img
                    src={`/images/movies/${film.episode_id}.jpg`}
                    style={{
                      height: '40vh',
                      width: '18vw',
                      margin: '20px'
                    }}
                    alt=""
                  />
                </Link>
              )
            })
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films: state.films.data
})
const mapDispatchToProps = {
  getFilms
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
