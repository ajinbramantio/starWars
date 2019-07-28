import { GET_FILMS, GET_FILMS_SUCCESS, GET_FILMS_FAIL } from './actions'
const initialState = {
  isLoading: '',
  hasError: '',
  messageError: '',
  data: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.payload.data
      }
    case GET_FILMS_FAIL:
      // console.log(action.payload)

      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return state
  }
}
