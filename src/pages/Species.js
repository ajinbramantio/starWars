import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/style/globalStyle.sass'

import Header from '../components/Headers'
import { getSpecies } from '../modules/species/actions'

class Species extends React.Component {
  componentDidMount() {
    this.props.getSpecies()
  }
  render() {
    console.log(this.props.species.data.results)
    const dataSpecies = this.props.species.data.results

    return (
      <div>
        <Header />
        <h1 className="title">Species</h1>
        <table
          style={{
            backgroundColor: '#f5f3f3',
            margin: 'auto',
            marginTop: '50px',
            border: '1px solid black',
            borderCollapse: 'collapse'
          }}
        >
          <thead style={{ border: '2px solid black' }}>
            <tr>
              <th style={{ border: '2px solid black' }}>NO</th>
              <th style={{ border: '2px solid black' }}>name</th>
              <th style={{ border: '2px solid black' }}>classification</th>
              <th style={{ border: '2px solid black' }}>designation</th>
              <th style={{ border: '2px solid black' }}>average height</th>
              <th style={{ border: '2px solid black' }}>skin colors</th>
              <th style={{ border: '2px solid black' }}>hair colors</th>
              <th style={{ border: '2px solid black' }}>eye colors</th>
              <th style={{ border: '2px solid black' }}>average lifespan</th>
              <th style={{ border: '2px solid black' }}>language</th>
            </tr>
          </thead>
          <tbody>
            {dataSpecies.map((species, i) => {
              return (
                <tr key={i}>
                  <td style={{ border: '2px solid black' }}>{i + 1}</td>
                  <td style={{ border: '2px solid black' }}>{species.name}</td>
                  <td style={{ border: '2px solid black' }}>
                    {species.classification}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.designation}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.average_height}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.skin_colors}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.hair_colors}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.eye_colors}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.average_lifespan}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {species.language}
                  </td>
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
  species: state.species
})

const mapDispatchToProps = {
  getSpecies
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Species)
