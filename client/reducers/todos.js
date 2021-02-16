import { ADD_TODO, SET_TODOS, DELETE_TODOS, UPDATE_TODO } from "../actions"


const initialState = []



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODOS:
      return state.filter(todo => todo.id !== action.id)
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          todo = action.todo
        }
      return todo
        
      })
    default:
      return state;
  }
}

export default reducer