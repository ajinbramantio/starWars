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
      const result = await axios.get(`https://swapi.co/api/films`)
      let { data } = result
      //   console.log(data)

      dispatch({
        type: GET_FILMS_SUCCESS,
        payload: {
          data: data.results.sort((a, b) => (a.created > b.created ? 1 : -1))
        }
      })
      resolve()
    } catch (error) {
      // console.log(error.response)

      dispatch({
        type: GET_FILMS_FAIL,
        payload: {
          message: 'fail'
        }
      })

      reject()
    }
  })
