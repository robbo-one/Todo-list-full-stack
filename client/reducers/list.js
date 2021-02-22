import { SHOW_THE_TASKS } from '../actions/actions'

const initialState = []

const reducerList = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_THE_TASKS:
      return action.tasks
    default:
      return state
  }
}

export default reducerList

