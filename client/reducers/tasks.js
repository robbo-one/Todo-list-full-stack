import { ADD_TASK, SET_TASKS, DEL_TASK, UPT_TASK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks    
    case ADD_TASK:
      return [...state, {task: task, priority: priority}]
    case DEL_TASK:
      return state.filter(todo => 
        todo.id !== action.id)
    case UPT_TASK:
      return state.map(todo => {
        console.log(todo.id)
        if(todo.id === action.todo.id) {
          return action.todo
        }
      })
    default:
      return state
   }
}

export default reducer