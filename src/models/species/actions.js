import axios from 'axios'

export const GET_SPECIES = '@species/GET_SPECIES'
export const GET_SPECIES_SUCCESS = '@species/GET_SPECIES_SUCCESS'
export const GET_SPECIES_FAIL = '@species/GET_SPECIES_FAIL'

export const getSpecies = urls => dispatch => {
  new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_SPECIES,
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
          type: GET_SPECIES_SUCCESS,
          payload: {
            data,
            index
          }
        })
      })

      resolve()
    } catch (error) {
      console.log(error)
    }
  })
}
