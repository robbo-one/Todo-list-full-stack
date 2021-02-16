import { DEL_TODO, SET_TODOS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
      case DEL_TODO:
        return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}


export default reducer