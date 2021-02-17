import { SET_TASKS } from '../actions/actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks // <--- [{id, name}, { id. name}]
    default:
      return state
  }
}

export default reducer