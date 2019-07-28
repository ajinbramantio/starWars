import axios from 'axios'

export const GET_PLANETS = '@planets/GET_PLANETS'
export const GET_PLANETS_SUCCESS = '@planets/GET_PLANETS_SUCCESS'
export const GET_PLANETS_FAIL = '@planets/GET_PLANETS_FAIL'

export const getPlanets = urls => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_PLANETS,
      payload: {
        urls
      }
    })
    // console.log(urls)

    try {
      urls.map(async (url, index) => {
        const result = await axios.get(url)
        let { data } = result
        // console.log(data)

        dispatch({
          type: GET_PLANETS_SUCCESS,
          payload: {
            data,
            index
          }
        })
      })

      resolve()
    } catch (error) {
      console.log(error)

      //   dispatch({
      //     type: GET_CHARACTERS_FAIL,
      //     payload: {
      //       message: error.response.data
      //     }
      //   })

      reject()
    }
  })
