import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/style/globalStyle.sass'

import Header from '../components/Headers'
import { getPlanets } from '../modules/planets/actions'

class Planet extends React.Component {
  componentDidMount() {
    this.props.getPlanets()
  }
  render() {
    console.log(this.props.planets.data.results)
    const dataPlanets = this.props.planets.data.results

    return (
      <div>
        <Header />
        <h1 className="title">Planets</h1>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>name</th>
              <th>rotation_period</th>
              <th>orbital_period</th>
              <th>diameter</th>
              <th>climate</th>
              <th>terrain</th>
              <th>gravity</th>
              <th>population</th>
              <th>surface_water</th>
            </tr>
          </thead>
          <tbody>
            {dataPlanets.map((planet, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.grafity}</td>
                  <td>{planet.population}</td>
                  <td>{planet.surface_water}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="menu">
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets
})

const mapDispatchToProps = {
  getPlanets
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planet)
