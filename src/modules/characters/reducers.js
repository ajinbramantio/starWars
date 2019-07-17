import { GET_CHARACTER, GET_CHARACTER_SUCCESS } from './actions'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_CHARACTER_SUCCESS:
      // console.log(state.data.concat(action.payload.data))
      // data: state.data.concat(action.payload.data)

      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.payload.data)
      }
    default:
      return state
  }
}
