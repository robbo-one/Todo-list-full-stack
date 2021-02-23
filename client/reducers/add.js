import { ADD_A_TASK } from '../actions/actions'

const initialState = []

const reducerAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_TASK:
      return [...state, action.task]
    default:
      return state
  }
}

export default reducerAdd