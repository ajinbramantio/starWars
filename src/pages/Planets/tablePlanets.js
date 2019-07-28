import React from 'react'
import '../../assets/style.sass'
import { Menu } from '../../components/Menu'

export const TablePlanets = props => {
  // console.log(props.planets)

  return (
    <React.Fragment>
      <h1 className="title">Planets</h1>
      <table style={{ margin: '0px auto' }}>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>terrain</th>
            <th>surface_water</th>
          </tr>
        </thead>
        <tbody>
          {props.planets.map((planet, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="menu">
        <Menu movieId={props.movieId} />
      </div>
    </React.Fragment>
  )
}
