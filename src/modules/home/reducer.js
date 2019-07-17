import { GET_FILMS, GET_FILMS_SUCCESS } from './actions'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
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
        isLoading: false,
        data: action.payload.data
      }
    default:
      return state
  }
}
