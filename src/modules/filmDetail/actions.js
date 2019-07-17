import axios from 'axios'

export const GET_FILMS_DETAIL = '@film-detail/GET_FILM_DETAIL'
export const GET_FILMS_DETAIL_SUCCESS = '@film-detail/GET_FILMS_DETAIL_SUCCESS'
export const GET_FILMS_DETAIL_FAIL = '@film-detail/GET_FILMS_DETAIL_FAIL'

export const getFilmDetail = url => async dispatch => {
  console.log(url)

  dispatch({
    type: GET_FILMS_DETAIL
  })

  try {
    const response = await axios.get(url)

    const { data } = response
    // console.log(data)

    dispatch({
      type: GET_FILMS_DETAIL_SUCCESS,
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}
