import axios from 'axios'

export const GET_FILMS_DETAILS = '@films/GET_FILMS'
export const GET_FILMS_DETAILS_SUCCESS = '@films/GET_FILMS_SUCCESS'
export const GET_FILMS_DETAILS_FAIL = '@films/GET_FILMS_FAIL'

export const getFilmDetail = url => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_FILMS_DETAILS
    })

    // console.log(url)

    try {
      const result = await axios.get(url)
      let { data } = result
      // console.log(data)

      dispatch({
        type: GET_FILMS_DETAILS_SUCCESS,
        payload: {
          data: data
        }
      })
      resolve()
    } catch (error) {
      dispatch({
        type: GET_FILMS_DETAILS_FAIL,
        payload: {
          message: error.response.data
        }
      })

      reject()
    }
  })
