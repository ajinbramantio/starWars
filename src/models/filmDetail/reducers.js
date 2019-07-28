import { GET_FILMS_DETAILS, GET_FILMS_DETAILS_SUCCESS } from './actions'
import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS } from '../characters/actions'
import { GET_PLANETS, GET_PLANETS_SUCCESS } from '../planets/actions'
import { GET_SPECIES, GET_SPECIES_SUCCESS } from '../species/actions'
const initialState = {
  isLoading: '',
  hasError: '',
  messageError: '',
  data: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_DETAILS:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_FILMS_DETAILS_SUCCESS:
      //   console.log(action.payload)

      return {
        ...state,
        isLoading: true,
        data: action.payload.data
      }

    case GET_CHARACTERS:
      // console.log(action.payload)

      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          characters: action.payload.urls.map(character => {
            return character
          })
        }
      }
    case GET_CHARACTERS_SUCCESS:
      // console.log(action.payload.index)

      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          characters: state.data.characters.map((character, i) => {
            if (i === action.payload.index) {
              return {
                isLoading: false,
                ...action.payload.data
              }
            }
            return { ...character }
          })
        }
      }

    case GET_PLANETS:
      // console.log(action.payload.urls)
      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          planets: action.payload.urls.map(planet => {
            // console.log(planet)

            return planet
          })
        }
      }

    case GET_PLANETS_SUCCESS:
      // console.log(state.data.planets)

      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          planets: state.data.planets.map((planet, i) => {
            // console.log(planet)

            if (i === action.payload.index) {
              return {
                isLoading: false,
                ...action.payload.data
              }
            }
            return { ...planet }
          })
        }
      }

    case GET_SPECIES:
      // console.log(action.payload.urls)

      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          species: action.payload.urls.map(species => {
            // console.log(species)

            return species
          })
        }
      }
    case GET_SPECIES_SUCCESS:
      // console.log(state.data.species)
      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          species: state.data.species.map((s, i) => {
            // console.log(planet)

            if (i === action.payload.index) {
              return {
                isLoading: false,
                ...action.payload.data
              }
            }
            return { ...s }
          })
        }
      }

    default:
      return state
  }
}
