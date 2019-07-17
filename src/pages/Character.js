import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacter } from '../modules/characters/actions'
import '../assets/style/globalStyle.sass'
import Header from '../components/Headers'
class Character extends React.Component {
  componentDidMount() {
    console.log(this.props.characters)

    this.props.getCharacter('https://swapi.co/api/people')
  }
  render() {
    const dataCharacters = this.props.dataCharacters.data
    // console.log(this.props.dataCharacters.data[0])

    return (
      <div>
        <Header />
        <h1 className="title">Character</h1>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>name</th>
              <th>gender</th>
              <th>height</th>
              <th>mass</th>
              <th>skin color</th>
              <th>hair color</th>
            </tr>
          </thead>
          <tbody>
            {dataCharacters.map((character, i) => {
              let hasil = character.results.map((c, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{c.name}</td>
                    <td>{c.gender}</td>
                    <td>{c.height}</td>
                    <td>{c.mass}</td>
                    <td>{c.skin_color}</td>
                    <td>{c.hair_color}</td>
                  </tr>
                )
              })
              return hasil
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

const mapStateToProps = state => (
  console.log(state.characters),
  {
    dataCharacters: state.characters
  }
)

const mapDispatchToProps = {
  getCharacter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)
