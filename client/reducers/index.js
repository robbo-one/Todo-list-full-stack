import { combineReducers } from 'redux'

import todos from './todos'
import filterList from './filterList'

export default combineReducers({
  todos,
  filterList
})
