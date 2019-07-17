import React from 'react'
import { connect } from 'react-redux'
import FilmCharacterDetail from './FilmCharacterDetail'

class FilmCharacter extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h1>WOy</h1>
        {this.props.filmCharacters &&
          this.props.filmCharacters.map((item, i) => {
            return <FilmCharacterDetail key={i} url={item} />
          })}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  filmCharacters: state.filmDetail.data.characters
})

export default connect(mapStateToProps)(FilmCharacter)
