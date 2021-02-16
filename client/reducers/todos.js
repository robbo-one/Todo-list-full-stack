import { SET_TODOS, ADD_TODOS} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_TODOS:
      return action.todos
    case ADD_TODOS:
      return [...state, {id: action.id, task: action.task, completed: action.completed}]
      default:
      return state
  }
}

export default reducer