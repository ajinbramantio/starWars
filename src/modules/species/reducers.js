import { GET_SPECIES, GET_SPECIES_SUCCESS } from './actions'

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
    case GET_SPECIES:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    default:
      return state
  }
}
