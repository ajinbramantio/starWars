import { combineReducers } from 'redux'

import films from './home/reducers'
import filmDetail from './filmDetail/reducers'
export default combineReducers({
  films,
  filmDetail
})
