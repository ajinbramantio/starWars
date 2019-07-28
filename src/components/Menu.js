import React from 'react'
import '../assets/style.sass'
import { Link } from 'react-router-dom'
export const Menu = props => {
  //   console.log(props.movieId)

  return (
    <nav>
      <ul>
        <li>
          <Link className="textMenu" to={`/film/${props.movieId}/characters`}>
            character
          </Link>
        </li>

        <li>
          <Link className="textMenu" to={`/film/${props.movieId}/planets`}>
            planets{' '}
          </Link>
        </li>

        <li>
          <Link className="textMenu" to={`/film/${props.movieId}/species`}>
            species
          </Link>
        </li>
      </ul>
    </nav>
  )
}
