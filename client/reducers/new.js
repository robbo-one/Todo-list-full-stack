import { NEW_TASK } from '../actions/actions'

const initialState = []

const reducerAddNew = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks // <--- [{id, name}, { id. name}]
    default:
      return state
  }
}

export default reducerAddNew