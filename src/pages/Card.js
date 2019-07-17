import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  constructor(props) {
    super()
    this.state = {
      detail: props.detail,
      index: props.index
    }
  }

  Image() {
    return require(`../../public/images/movies/${
      this.state.detail.episode_id
    }.jpg`)
  }
  render() {
    return (
      <div>
        <Link to={`filmsDetail/${this.state.index}`}>
          <img
            src={this.Image()}
            style={{
              height: '40vh',
              width: '18vw',
              margin: '20px'
            }}
            alt=""
          />
        </Link>
      </div>
    )
  }
}

export default Card
