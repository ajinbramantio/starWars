import { GET_PLANETS, GET_PLANETS_SUCCESS } from './actions'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  data: {
    results: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    default:
      return state
  }
}
