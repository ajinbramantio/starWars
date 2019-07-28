import React from 'react'
import '../../assets/style.sass'
import { Menu } from '../../components/Menu'

export const TableCharacters = props => {
  const characters = props.characters
  // console.log(props)

  return (
    <div>
      <h1 className="title">Characters</h1>
      <table style={{ margin: '0px auto' }}>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Eye color</th>
            <th>Hair color</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, i) => {
            // console.log(character)
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.eye_color}</td>
                <td>{character.hair_color}</td>
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
