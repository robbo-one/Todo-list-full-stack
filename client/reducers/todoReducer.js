import { ADD_TASK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, {task: task, priority: priority}]
    default:
      return state
   }
}

export default reducer