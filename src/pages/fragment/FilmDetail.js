import React from 'react'
import { connect } from 'react-redux'
import { getFilmDetail } from '../../modules/filmDetail/actions'
import { getCharacter } from '../../modules/characters/actions'

class FilmDetail extends React.Component {
  componentDidMount() {
    // console.log('ini dari film details', this.props)
    this.props.getFilmDetail()
  }
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('ini state film', state)

  return {
    dataFilmDetail: state
  }
}

const mapDispatchToProps = {
  getCharacter,
  getFilmDetail
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetail)
