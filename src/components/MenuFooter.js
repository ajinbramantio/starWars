import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/style/globalStyle.sass'

import { getFilmDetail } from '../modules/filmDetail/actions'
import { getCharacter } from '../modules/characters/actions'

class MenuFooter extends React.Component {
  componentDidMount() {}
  render() {
    // console.log(this.props)

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  characters: state.filmDetail.data.characters,
  planets: state.filmDetail.data.planets,
  species: state.filmDetail.data.species
})

const mapDispatchToProps = {
  getFilmDetail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuFooter)
