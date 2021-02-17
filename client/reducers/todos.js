import { SET_TODOS, ADD_TODOS, DELETE_TODOS} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_TODOS:
      console.log(action.todos)
      return action.todos
    case ADD_TODOS:
      return [...state, {id: action.id, task: action.task, completed: action.completed}]
      case DELETE_TODOS:
        return state.filter(todo => todo.id !== action.id)
      default:
      return state
  }
}

export default reducer