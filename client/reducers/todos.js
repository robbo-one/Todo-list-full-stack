import { ADD_TODO, DELETE_TODOS, SET_TODOS } from '../actions'


const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODOS:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default reducer