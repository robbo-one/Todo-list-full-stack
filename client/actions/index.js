import { addTodo, getTodos } from '../apis/todos'

export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const GET_TODO = 'GET_TODO'
// export const SET_TODOS= 'SET_TODOS'

export function addTodoToStore(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}
export function createTodo(todo) {
  return dispatch => {
    return addTodo({todo: todo})
    .then(addedTodo => {
      dispatch(addTodoToStore(addedTodo))
      return null
    })
  }
}

export function printTodos(todo){
  return{
    type: GET_TODO,
    todo: todo
  }
}
export function pullTodos(){
  return dispatch =>{
    return getTodos()
    .then(todos => {
      dispatch(printTodos(todos))
      return null
    })
  } 
}

// export function setTodos(todos){
//   return{ 
//    type: SET_TODOS,
//    todo: todos
//   }
// }

export function delTodo(todo) {
  return {
    type: DEL_TODO,
    todo: todo
  }
}
