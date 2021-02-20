import { addTodos } from '../apis/addTodos'
import { getAllTodos } from '../apis/allTodos'

export const SET_ALLTODOS = 'SET_ALLTODOS'


//Function on line 22 is DISPATCHED (when todos come back from api) and receives list of todos
export function setAllTodos (todos) {
    return {
        type: SET_ALLTODOS, // then finds this SET_ALLTODOS reducer and sends todos into state
        todos
    }
}

//When component hits this file it runs function below it says run getAllTodos inside API file, api hits route and returns todos
export function fetchAllTodos () {
    return dispatch => {
        return getAllTodos() //dispatches getAllTodos function from api - will hit up API
            .then(todos => { //api returns body of response (list of todos)
                dispatch(setAllTodos(todos)) //this function is called, jump to line 7. Then goes to reducer to setAllTodos in state to the object that came back
                return null
            })
    }
}


export function addTodo(task) {
    return dispatch => {
      
    dispatch(setNewTodo(task)) //dispatch to reducer with setNewTodo func call
    })}
}

export function setNewTodo(task) {
    return {
        type: 'ADD_TODO',
        task
    }
}
