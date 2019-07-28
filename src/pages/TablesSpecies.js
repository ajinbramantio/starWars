import React from 'react'
import '../assets/style.sass'
import { Menu } from '../components/Menu'

export const TablesSpecies = props => {
  const species = props.species
  // console.log(props.movieId)

  return (
    <div>
      <h1 className="title">Species</h1>
      <table style={{ margin: '0px auto' }}>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Language</th>
            <th>skin_colors</th>
            <th>hair_colors</th>
            <th>designation</th>
          </tr>
        </thead>
        <tbody>
          {species.map((s, i) => {
            // console.log(species)

            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.language}</td>
                <td>{s.skin_colors}</td>
                <td>{s.hair_colors}</td>

                <td>{s.designation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="menu">
        <Menu movieId={props.movieId} />
      </div>
    </div>
  )
}
