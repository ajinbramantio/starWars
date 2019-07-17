import { GET_FILMS_DETAIL, GET_FILMS_DETAIL_SUCCESS } from './actions'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_DETAIL:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_FILMS_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return state
  }
}
