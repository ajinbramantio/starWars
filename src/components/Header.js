import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
      <header className="titleHeader">
        <h1>
          <Link className="Link" to="/">
            Movie Star Wars{' '}
          </Link>
        </h1>
      </header>
    </React.Fragment>
  )
}
export default Header
