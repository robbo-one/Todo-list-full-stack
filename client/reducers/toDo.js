import {ADD_TASK} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return [...state, {
        task_details: action.task,
        priority: 1,
        completed: 0
      } ]
    default :
      return state
  }
}

export default reducer