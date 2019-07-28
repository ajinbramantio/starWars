import axios from 'axios'

export const GET_CHARACTERS = '@characters/GET_CHARACTERS'
export const GET_CHARACTERS_SUCCESS = '@characters/GET_CHARACTERS_SUCCESS'
export const GET_CHARACTERS_FAIL = '@characters/GET_CHARACTERS_FAIL'

export const getCharacters = urls => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_CHARACTERS,
      payload: {
        urls
      }
    })

    try {
      urls.map(async (url, index) => {
        const result = await axios.get(url)
        let { data } = result

        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: {
            data,
            index
          }
        })
      })

      //   dispatch({
      //     type: GET_CHARACTERS_SUCCESS,
      //     payload: {
      //       data: data
      //     }
      //   })
      resolve()
    } catch (error) {
      //   dispatch({
      //     type: GET_CHARACTERS_FAIL,
      //     payload: {
      //       message: error.response.data
      //     }
      //   })

      reject()
    }
  })
