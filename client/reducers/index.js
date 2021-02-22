import { combineReducers } from 'redux'

import reducerList from './list'
import reducerAdd from './add'
import reducerDelete from './delete'
import reducerUpdate from './update'

export default combineReducers({
  reducerList,
  reducerAdd,
  reducerDelete,
  reducerUpdate,
})
