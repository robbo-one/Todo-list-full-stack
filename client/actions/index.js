export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const SET_TODOS= 'SET_TODOS'

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

export function setTodos(todos){
  return{ 
   type: SET_TODOS,
   todo: todos
  }
}

export function delTodo(todo) {
  return {
    type: DEL_TODO,
    todo: todo
  }
}



//action add todos (ie multi) 
