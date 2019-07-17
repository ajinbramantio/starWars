import React from 'react'
import { connect } from 'react-redux'

import { getCharacter } from '../../modules/characters/actions'

class FilmCharacterDetail extends React.Component {
  componentDidMount() {
    this.props.getCharacter(this.props.url)
  }
  tampil() {
    let hasil = this.props.dataCharacters.data.map(e => {
      return e
    })
    return hasil
  }
  render() {
    // const hasil = this.tampil()
    console.log(this.tampil())

    return (
      <div>
        <h1>
          {this.props.dataCharacters.data.map(e => {
            return e.name
          })}
        </h1>
      </div>
    )
  }
}

// const mapDispatchTo

const mapStateToProps = state => ({
  dataCharacters: state.characters
})
const mapDispatchToProps = {
  getCharacter
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmCharacterDetail)
