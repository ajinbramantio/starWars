import axios from 'axios'

export const GET_SPECIES = '@species/GET_SPECIES'
export const GET_SPECIES_SUCCESS = '@species/GET_SPECIES_SUCCESS'
export const GET_SPECIES_ERROR = '@species/GET_SPECIES_ERROR'
export const getSpecies = data => dispatch => {
  dispatch({
    type: GET_SPECIES
  })

  try {
    axios.get('https://swapi.co/api/species/').then(response => {
      const { data } = response
      //   console.log(data)
      dispatch({
        type: GET_SPECIES_SUCCESS,
        payload: {
          data
        }
      })
    })
  } catch (e) {
    console.log(e.response.data)
  }
}
