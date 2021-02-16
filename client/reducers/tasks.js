import { ADD_TASK, SET_TASKS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks    
    case ADD_TASK:
      return [...state, {task: task, priority: priority}]
    default:
      return state
   }
}

export default reducer