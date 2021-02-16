import { ADD_TODO, DEL_TODO, SET_TODOS } from "../actions"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]

    case DEL_TODO:
     
    return state.filter(todo => todo !== action.todo)
  case SET_TODOS:
  console.log('todos in redux')
  return action.todos
    default:
      return state
  }
}

export default reducer