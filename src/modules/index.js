import { combineReducers } from 'redux'

import film from './home/reducer'
import filmDetail from './filmDetail/reducer'
import characters from './characters/reducers'
import planets from './planets/reducer'
import species from './species/reducers'

export default combineReducers({
  film,
  filmDetail,
  characters,
  planets,
  species
})
