import axios from 'axios'

export const GET_FILMS = '@films/GET_FILMS'
export const GET_FILMS_SUCCESS = '@films/GET_FILMS_SUCCESS'
export const GET_FILMS_FAIL = '@films/GET_FILMS_FAIL'

export const getFilms = () => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_FILMS
    })

    try {
      const response = await axios.get(`https://swapi.co/api/films`)

      const { data } = response
      // let result = data.results
      // console.log(result)
      // let test = result.sort((a, b) => (a.created > b.created ? 1 : -1))

      dispatch({
        type: GET_FILMS_SUCCESS,
        payload: {
          data: data.results.sort((a, b) => (a.created > b.created ? 1 : -1))
        }
      })

      resolve()
    } catch (e) {
      dispatch({
        type: GET_FILMS_FAIL,
        payload: {
          message: e.response.data
        }
      })

      reject()
    }
  })
