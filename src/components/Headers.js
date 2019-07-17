import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/globalStyle.sass'
export default Header => {
  return (
    <React.Fragment>
      <Link className="Link" to="/">
        <header>
          <h1>Movie Star Wars</h1>
        </header>
      </Link>
    </React.Fragment>
  )
}
