import axios from 'axios'

export const GET_PLANETS = '@planets/GET_PLANETS'
export const GET_PLANETS_SUCCESS = '@planets/GET_PLANETS_SUCCESS'
export const GET_PLANETS_FAIL = '@planets/GET_PLANETS_FAIL'

export const getPlanets = data => async dispatch => {
  // console.log(data)

  dispatch({
    type: GET_PLANETS
  })

  try {
    axios.get('https://swapi.co/api/planets').then(response => {
      const { data } = response

      dispatch({
        type: GET_PLANETS_SUCCESS,
        payload: {
          data
        }
      })
    })

    // console.log(data)
  } catch (e) {
    console.log(e.response.data)
  }
}
