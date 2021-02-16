import { ADD_TODO, GET_TODO, DELETE_TODO, UPDATE_TODO } from "../actions"


const initialState = []



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return action.todos
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO:
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