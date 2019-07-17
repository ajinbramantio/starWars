import React from 'react'
import { connect } from 'react-redux'
import { getFilms } from '../modules/home/actions'

import Card from './Card'
import Header from '../components/Headers'

import '../assets/style/globalStyle.sass'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: []
    }
  }

  Image(id) {
    return `/images/movies/${id}.jpg`
  }

  componentDidMount() {
    this.props.getFilms()
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.films.data.map((film, index) => {
            return (
              <div key={index} style={{ display: 'inline-block' }}>
                <Card detail={film} index={index} key={index} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films: state.film
})

const mapDispatchToProps = {
  getFilms
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
