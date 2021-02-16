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

// export function fetchWombats() {
//   console.log('preparing the thunk (fetchWombats)')
//   return dispatch => {
//     console.log('running the thunk (fetchWombats)')
//     getWombats()
//       .then(wombats => {
//         console.log('got the wombats')

//         const wombatNames = wombats.map(wombat => {
//           return wombat.name
//         })
//         dispatch(setWombats(wombatNames))
//       })
//   }
// }


//action add todos (ie multi) 
