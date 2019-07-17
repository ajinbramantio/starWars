import axios from 'axios'

export const GET_CHARACTER = '@character/GET_CHARACTER'
export const GET_CHARACTER_SUCCESS = '@character/GET_CHARACTER_SUCCESS'
export const GET_CHARACTER_FAIL = '@character/GET_CHARACTER_FAIL'

export const getCharacter = url => async dispatch => {
  dispatch({
    type: GET_CHARACTER
  })

  try {
    axios.get(url).then(response => {
      let data = response.data
      // console.log(data)

      return dispatch({
        type: GET_CHARACTER_SUCCESS,
        payload: {
          data
        }
      })
    })
  } catch (e) {
    console.log(e.response.results)
  }
}
