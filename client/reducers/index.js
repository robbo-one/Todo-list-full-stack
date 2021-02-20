import { combineReducers } from 'redux'
import reducerSetTask from './tasks'
import reducerAddNew from './tasks'

export default combineReducers({
  reducerSetTask,
  reducerAddNew
})
